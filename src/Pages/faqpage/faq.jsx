import React, { useState } from 'react';

const FAQs = [
  {
    id: 1,
    question: 'What is the purpose of this survey?',
    answer: 'The purpose of this survey is to gather valuable feedback from users like you. Your responses will help us improve our services and understand user needs better. Your participation is greatly appreciated.',
  },
  {
    id: 2,
    question: 'How long will it take to complete the survey?',
    answer: 'The survey should take approximately [X minutes] to complete. The questions are designed to be quick and easy, and you can skip any questions you prefer not to answer.',
  },
  {
    id: 3,
    question: 'Do I need to create an account to complete the survey?',
    answer: ' No, you do not need to create an account to complete the survey. Simply click the link and start answering the questions. We value your time and aim to make the process as easy as possible.',
  },
  {
    id: 4,
    question: 'Can I change my answers after submitting the survey?',
    answer: 'Once you submit your answers, they cannot be changed. Please review your responses carefully before submitting. If you need to make corrections, feel free to contact our support team.',
  },
  {
    id: 5,
    question: 'What happens after I submit my survey answers?',
    answer: 'After you submit your answers, we will review the data and use it to improve our services. You may also receive a thank-you message or a follow-up email with further instructions or rewards, depending on the survey',
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
