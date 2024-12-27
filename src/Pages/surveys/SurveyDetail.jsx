import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SurveyDetail = () => {
  const { id } = useParams(); // Get the survey ID from the URL
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [loading, setLoading] = useState(true);

  // Fetch survey questions by ID
  useEffect(() => {
    fetch(`https://survey-backend-henna.vercel.app/api/surveys/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data.data.questions);
        setLoading(false);
      })
      .catch((err) => console.error("Error fetching survey details:", err));
  }, [id]);

  const handleChange = (questionId, value) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the answers to the backend for validation
    fetch(`http://localhost:5000/api/surveys/${id}/validate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ answers }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.correct) {
          alert("You are right!");
        } else {
          alert("You are wrong!");
        }
      })
      .catch((err) => console.error("Error submitting answers:", err));
  };

  if (loading) {
    return <p>Loading survey details...</p>;
  }

  return (
    <div style={styles.container}>
      <h2>Survey Questions</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        {questions.map((question) => (
          <div key={question._id} style={styles.questionBlock}>
            <p>{question.questionText}</p>
            <input
              type="text"
              placeholder="Your answer"
              onChange={(e) => handleChange(question._id, e.target.value)}
              style={styles.input}
              required
            />
          </div>
        ))}
        <button type="submit" style={styles.submitButton}>
          Submit Answers
        </button>
      </form>
    </div>
  );
};

// Inline styles for UI
const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    marginTop:"100px"
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
  input: {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  submitButton: {
    padding: "10px 20px",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default SurveyDetail;
