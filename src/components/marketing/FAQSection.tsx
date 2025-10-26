"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Container from "../global/container";

const faqs = [
  {
    question: "What services does your agency provide?",
    answer:
      "We specialize in Web Development, App Development, Digital Marketing, and Business Automation using the latest AI tools and frameworks.",
  },
  {
    question: "How long does it take to build a website or app?",
    answer:
      "Project timelines vary depending on complexity. Most web projects take 3–5 weeks, while mobile apps may take 6–10 weeks from design to deployment.",
  },
  {
    question: "Do you offer maintenance and support after launch?",
    answer:
      "Yes. We provide ongoing maintenance, feature updates, and technical support to ensure your website or app runs smoothly at all times.",
  },
  {
    question: "Can I request a custom automation for my business?",
    answer:
      "Absolutely! We design custom automation workflows that integrate seamlessly with your existing tools, saving time and improving productivity.",
  },
  {
    question: "How can I get a quote for my project?",
    answer:
      "Simply click on 'Request a Quote' or reach out via our contact form — our team will respond with a tailored plan and estimated pricing.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative w-full bg-black text-white py-20 overflow-hidden">
      <Container>
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold">
            Frequently Asked{" "}
            <span className="text-blue-500 font-subheading italic">Questions</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Have questions about our services? We’ve got answers to help you
            understand how we can elevate your business.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-800 bg-gray-900/40 rounded-2xl overflow-hidden transition-all"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="text-lg font-medium">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="text-blue-500 w-5 h-5" />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-5 pb-5 text-gray-300"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </Container>

      {/* Subtle blue glow background */}
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-blue-500/20 blur-[100px] rounded-full" />
    </section>
  );
};

export default FAQSection;
