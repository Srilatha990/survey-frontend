
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Import useNavigate

const SurveyQuestionsPage = () => {
  const { id } = useParams(); // Get the survey ID from the URL
  const navigate = useNavigate(); // Initialize useNavigate
  const [survey, setSurvey] = useState(null);
  const [answers, setAnswers] = useState({});
  const [loading, setLoading] = useState(true);

  // Fetch survey details by ID
  useEffect(() => {
    fetch(`https://survey-backend-henna.vercel.app/api/surveys/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setSurvey(data.data);
        setLoading(false);
      })
      .catch((err) => console.error("Error fetching survey details:", err));
  }, [id]);

  const handleChange = (questionId, value) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the answers to the backend for processing (no validation here as requested)
    fetch(`https://survey-backend-henna.vercel.app/api/surveys/${id}/submit`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ answers }),
    })
      .then((res) => res.json())
      .then((data) => {
        // Show an alert message after submitting the survey
        alert("Thanks for submitting the survey!"); // Simple alert after submission
        
        // Redirect to the surveys page
        navigate("/surveys"); // Redirect to the surveys page
      })
      .catch((err) => console.error("Error submitting answers:", err));
  };

  if (loading) {
    return <p>Loading survey questions...</p>;
  }

  return (
    <div style={styles.container}>
      <h2>{survey.surveyTitle}</h2>
      <form onSubmit={handleSubmit}>
        {survey.questions.map((question) => (
          <div key={question._id} style={styles.questionBlock}>
            <p>{question.questionText}</p>
            <div style={styles.checkboxContainer}>
              <label>
                <input
                  type="radio"
                  name={question._id}
                  value="Yes"
                  checked={answers[question._id] === "Yes"}
                  onChange={(e) => handleChange(question._id, e.target.value)}
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name={question._id}
                  value="No"
                  checked={answers[question._id] === "No"}
                  onChange={(e) => handleChange(question._id, e.target.value)}
                />
                No
              </label>
            </div>
          </div>
        ))}
        <button type="submit" style={styles.submitButton}>
          Submit Answers
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    padding: "60px",
    fontFamily: "Arial, sans-serif",
    marginTop: "100px",
  },
  questionBlock: {
    marginBottom: "20px",
  },
  checkboxContainer: {
    display: "flex",
    gap: "20px",  // Add space between Yes and No options
    marginTop: "10px",
  },
  submitButton: {
    padding: "10px 20px",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "20px",
  },
};

export default SurveyQuestionsPage;
