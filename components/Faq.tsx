import React from 'react';

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

const Faq: React.FC = () => {
  return (
    <section className="bg-slate-800 border-t border-slate-700/50">
      <div className="container mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Frequently Asked Questions
        </h2>
        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group rounded-lg bg-slate-900 p-6 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-white">
                <h3 className="font-medium">{faq.question}</h3>
                <span className="relative h-5 w-5 shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 leading-relaxed text-slate-400">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;