import React from 'react';
import { Twitter, Facebook, Linkedin } from 'lucide-react';

const PinterestIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg 
    role="img" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...props}
  >
    <title>Pinterest</title>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.737-7.252 7.82-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.627-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
  </svg>
);


const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-800/50 bg-black">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-5">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">Pinalysis</h3>
            <p className="max-w-xs text-slate-400">
              Get to know what’s really working on Pinterest and grow your presence with smart, easy-to-understand insights. 📊
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="https://x.com/pinalysis_com/" target="_blank" rel="noopener noreferrer" className="text-slate-400 transition-colors hover:text-[#ea384c]">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://www.pinterest.com/Pinalysis/" target="_blank" rel="noopener noreferrer" className="text-slate-400 transition-colors hover:text-[#ea384c]">
                <PinterestIcon className="h-5 w-5" />
              </a>
              <a href="https://www.pinalysis.com" target="_blank" rel="noopener" className="text-slate-400 transition-colors hover:text-[#ea384c]">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.pinalysis.com" target="_blank" rel="noopener" className="text-slate-400 transition-colors hover:text-[#ea384c]">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">PRODUCT</h4>
            <ul className="space-y-3">
              <li><a href="https://www.pinalysis.com/features" target="_blank" rel="noopener" className="text-slate-400 transition-colors hover:text-[#ea384c]">Features</a></li>
              <li><a href="https://www.pinalysis.com/pricing" target="_blank" rel="noopener" className="text-slate-400 transition-colors hover:text-[#ea384c]">Pricing</a></li>
              <li><a href="https://www.pinalysis.com/roadmap" target="_blank" rel="noopener" className="text-slate-400 transition-colors hover:text-[#ea384c]">Roadmap</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">FREE TOOLS</h4>
            <ul className="space-y-3">
              <li><a href="https://www.pinalysis.com/ideas-finder" className="text-slate-400 transition-colors hover:text-[#ea384c]">Ideas Finder</a></li>
              <li><a href="https://www.pinalysis.com/content-categorize" target="_blank" rel="noopener noreferrer" className="text-slate-400 transition-colors hover:text-[#ea384c]">Content Categorize</a></li>                          
            </ul>
          </div>
          
          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">RESOURCES</h4>
            <ul className="space-y-3">
              <li><a href="https://www.pinalysis.com/blog" target="_blank" rel="noopener" className="text-slate-400 transition-colors hover:text-[#ea384c]">Blog</a></li>
              <li><a href="https://www.pinalysis.com/changelog" target="_blank" rel="noopener" className="text-slate-400 transition-colors hover:text-[#ea384c]">Change Log</a></li>
              <li><a href="https://www.pinalysis.com/knowledge" target="_blank" rel="noopener" className="text-slate-400 transition-colors hover:text-[#ea384c]">Knowledge Base</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">COMPANY</h4>
            <ul className="space-y-3">
              <li><a href="https://www.pinalysis.com/about" target="_blank" rel="noopener" className="text-slate-400 transition-colors hover:text-[#ea384c]">About</a></li>              
              <li><a href="https://www.pinalysis.com/contact" target="_blank" rel="noopener" className="text-slate-400 transition-colors hover:text-[#ea384c]">Contact</a></li>
              <li><a href="https://www.pinalysis.com/privacy" target="_blank" rel="noopener" className="text-slate-400 transition-colors hover:text-[#ea384c]">Privacy</a></li>
              <li><a href="https://www.pinalysis.com/terms" target="_blank" rel="noopener" className="text-slate-400 transition-colors hover:text-[#ea384c]">Terms</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 border-t border-slate-800 pt-8 text-center text-slate-400">
          <p>© {new Date().getFullYear()} Pinalysis. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;