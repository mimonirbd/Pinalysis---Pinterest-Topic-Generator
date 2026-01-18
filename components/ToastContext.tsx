
import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { CheckCircle2 } from 'lucide-react';

interface ToastContextType {
  showToast: (message: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toast, setToast] = useState<{ message: string; id: number; visible: boolean } | null>(null);

  const showToast = useCallback((message: string) => {
    const id = Date.now();
    setToast({ message, id, visible: true });

    // Hide after 3 seconds
    setTimeout(() => {
      setToast((current) => (current?.id === id ? { ...current, visible: false } : current));
    }, 3000);
    
    // Remove from DOM after animation finishes
    setTimeout(() => {
        setToast((current) => (current?.id === id ? null : current));
    }, 3300);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toast && (
        <div 
            className={`fixed top-24 left-1/2 z-50 flex -translate-x-1/2 items-center gap-3 rounded-full border border-slate-700 bg-slate-900/90 px-6 py-3 text-sm font-medium text-white shadow-2xl backdrop-blur-md transition-all duration-300 ease-out ${toast.visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
            role="alert"
        >
          <CheckCircle2 className="h-5 w-5 text-[#ea384c]" />
          <span>{toast.message}</span>
        </div>
      )}
    </ToastContext.Provider>
  );
};
