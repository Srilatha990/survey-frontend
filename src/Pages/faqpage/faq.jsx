import React, { useState } from 'react';

const FAQs = [
  {
    id: 1,
    question: 'What is the design process for a new building?',
    answer: 'Our design process typically begins with a consultation to discuss your needs and goals. From there, we create a custom design concept, which we then refine and develop into a final plan.',
  },
  {
    id: 2,
    question: 'How long does the design process take?',
    answer: 'The length of the design process varies depending on the complexity of the project, but we typically allow 2-6 weeks for the initial design concept and 2-4 weeks for revisions and finalization.',
  },
  {
    id: 3,
    question: 'What is the cost of your design services?',
    answer: 'Our design fees vary depending on the scope and complexity of the project. We offer a free consultation to discuss your needs and provide a custom quote.',
  },
  {
    id: 4,
    question: 'Do you offer interior design services?',
    answer: 'Yes, we offer a full range of interior design services, from space planning and furniture selection to color consultation and materials specification.',
  },
  {
    id: 5,
    question: 'Can I make changes to the design once it is finalized?',
    answer: 'Yes, we understand that changes can be necessary. We offer a revision process to accommodate any changes you may need to make.',
  },
];

const FAQPage = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const handleToggleFAQ = (id) => {
    setActiveFAQ((prev) => (prev === id ? null : id)); // Toggle active FAQ
  };

  return (
    <div className="faq-container">
      {/* First row with background image */}
      <div className="hero-section">
        <h1 className="hero-heading">Frequently Asked Questions</h1>
      </div>

      {/* Second row with FAQ content */}
      <div className="faq-content">
        <div className="faq-items">
          {FAQs.map((faq) => (
            <div key={faq.id} className="faq-item">
              <button
                className="faq-question"
                onClick={() => handleToggleFAQ(faq.id)}
              >
                <h2 className="question-text">{faq.question}</h2>
                <svg
                  className={`arrow-icon ${activeFAQ === faq.id ? 'rotate' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {activeFAQ === faq.id && (
                <p className="faq-answer">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Inline CSS */}
      <style>{`
        .faq-container {
          width: 100%;
        }

        /* First Row with Background Image */
        .hero-section {
          width: 100%;
          height: 600px; /* Adjust the height of the background */
          background-image: url('assets/img/aboutpage.jpg'); /* Replace with your image */
          background-size: cover;
          background-position: center;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .hero-heading {
          font-size: 3rem;
          color: white;
          text-align: center;
          font-weight: bold;
        }

        /* Second Row with FAQ Content */
        .faq-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
        }

        .faq-items {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .faq-item {
          background-color: white;
          border-radius: 8px;
          padding: 1.5rem;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .faq-item:hover {
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        .faq-question {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          text-align: left;
          background: none;
          border: none;
          padding: 0;
          font-size: 1.2rem;
          cursor: pointer;
        }

        .question-text {
          font-size: 1.2rem;
          font-weight: 600;
          color: #333;
        }

        .arrow-icon {
          width: 20px;
          height: 20px;
          transition: transform 0.3s ease;
        }

        .arrow-icon.rotate {
          transform: rotate(180deg);
        }

        .faq-answer {
          margin-top: 1rem;
          color: #555;
        }
      `}</style>
    </div>
  );
};

export default FAQPage;
