import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SurveyQuestions = () => {
  const { id } = useParams();  // Get survey ID from URL
  const [questions, setQuestions] = useState([]);
  const [ratings, setRatings] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Fetch the survey details by ID
  useEffect(() => {
    fetch(`https://survey-backend-henna.vercel.app/api/surveys/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data.data.questions);  // Store survey questions
      })
      .catch((err) => console.error("Error fetching survey questions:", err));
  }, [id]);

  // Handle rating change for each question
  const handleRatingChange = (questionId, rating) => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [questionId]: rating,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can send the ratings to the backend if needed
    console.log("Ratings Submitted:", ratings);

    // Show a thank you message after submission
    setSubmitted(true);
  };

  // If survey questions are being fetched
  if (!questions.length) {
    return <p>Loading survey questions...</p>;
  }

  return (
    <div style={styles.container}>
      <h2>Survey Questions</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        {questions.map((question) => (
          <div key={question._id} style={styles.questionBlock}>
            <div style={styles.questionText}>{question.questionText}</div>
            <div style={styles.ratingBlock}>
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  onClick={() => handleRatingChange(question._id, star)}
                  style={{
                    ...styles.star,
                    color: ratings[question._id] >= star ? "#FFD700" : "#ccc",  // Fill stars based on rating
                  }}
                >
                  ★
                </span>
              ))}
            </div>
          </div>
        ))}
        <button type="submit" style={styles.submitButton}>Submit Ratings</button>
      </form>

      {submitted && <p style={styles.thankYouMessage}>Thanks for submitting your ratings!</p>}
    </div>
  );
};

// Inline styles for UI
const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    marginTop: "100px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  questionBlock: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  questionText: {
    fontSize: "1rem",
    fontWeight: "bold",
  },
  ratingBlock: {
    display: "flex",
    gap: "10px",
    cursor: "pointer",
  },
  star: {
    fontSize: "1.5rem",
  },
  submitButton: {
    padding: "10px 20px",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  thankYouMessage: {
    marginTop: "20px",
    color: "#28a745",
    fontWeight: "bold",
  },
};

export default SurveyQuestions;


