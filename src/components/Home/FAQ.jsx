import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "react-feather"; // Icons for dropdown

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "How can I register as a donor?",
      answer:
        "To register as a donor, click on the 'Register as Donor' button and fill out the registration form. You will receive a confirmation email once your registration is complete.",
    },
    {
      question: "How do needy institutions raise requirements?",
      answer:
        "Needy institutions can raise requirements by logging into their dashboard and submitting a request for the items they need. Donors will then be able to fulfill these requests.",
    },
    {
      question: "What is the role of suppliers in DonorSync?",
      answer:
        "Suppliers provide essential items to needy institutions. They receive orders from donors and ensure timely delivery of the items.",
    },
    {
      question: "Is there a fee for using DonorSync?",
      answer:
        "No, DonorSync is completely free for donors, needy institutions, and suppliers. Our goal is to facilitate transparent and efficient donations.",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-sky-100 via-orange-100 to-amber-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-80 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-gray-800">
                  {faq.question}
                </h3>
                <span className="text-gray-600">
                  {activeIndex === index ? <ChevronUp /> : <ChevronDown />}
                </span>
              </div>
              {activeIndex === index && (
                <p className="mt-4 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;