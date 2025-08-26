import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
    {
        question: 'Is this Pinterest topic generator really free?',
        answer: 'Yes, this tool is 100% free to use. There are no hidden charges, and you can perform as many searches as you need. It\'s our contribution to the creator community from Pinalysis.com.',
    },
    {
        question: 'How are the topics sourced?',
        answer: 'The topics are sourced from a comprehensive and curated database of popular and trending keywords on Pinterest. We regularly update our list to ensure the data is fresh and relevant for your research.',
    },
    {
        question: 'Do I need a Pinalysis account to use this?',
        answer: 'No, an account is not required. This tool is open and accessible to everyone, whether you have a Pinalysis account or not. You can start searching immediately.',
    },
    {
        question: 'How can this tool help my Pinterest strategy?',
        answer: 'It helps you find high-interest topics so you can create content people are actually searching for. Use the topic list to generate ideas and find the right topic tags for your Pins. This can help you reach a bigger audience and get more engagement.',
    },
];

const FaqItem: React.FC<{
  faq: { question: string; answer: string };
  isOpen: boolean;
  onClick: () => void;
}> = ({ faq, isOpen, onClick }) => {
  return (
    <div className="border-b border-slate-800 py-6 last:border-b-0">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between text-left gap-4"
        aria-expanded={isOpen}
      >
        <span className="text-lg font-medium text-white hover:text-red-400 transition-colors">{faq.question}</span>
        <ChevronDown
          className={`h-5 w-5 flex-shrink-0 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100 pt-4' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-base text-slate-400">{faq.answer}</p>
        </div>
      </div>
    </div>
  );
};


const Faq: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-slate-950/50 border-t border-slate-800/50">
            <div className="container mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                <h2 className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Frequently Asked Questions
                </h2>
                <div className="mt-12">
                    {faqs.map((faq, index) => (
                        <FaqItem
                            key={index}
                            faq={faq}
                            isOpen={openIndex === index}
                            onClick={() => handleToggle(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faq;
