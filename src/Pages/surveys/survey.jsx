import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Survey = () => {
  const [surveys, setSurveys] = useState([]);
  const navigate = useNavigate();

  // Fetch surveys from the backend
  useEffect(() => {
    fetch("https://survey-backend-henna.vercel.app/api/surveys")
      .then((res) => res.json())
      .then((data) => setSurveys(data.data))
      .catch((err) => console.error("Error fetching surveys:", err));
  }, []);

  const handleCardClick = (surveyId) => {
    navigate(`/survey/${surveyId}`); // Redirect to the survey detail page
  };

  return (
    <div style={styles.container}>
      {surveys.map((survey) => (
        <div
          key={survey._id}
          className="survey-card"
          onClick={() => handleCardClick(survey._id)}
          style={styles.card}
        >
          <div className="card-inner" style={styles.cardInner}>
            <div className="card-front" style={styles.cardFront}>
              <h3>{survey.surveyTitle}</h3>
              <p>{survey.surveyCategory}</p>
            </div>
            <div className="card-back" style={styles.cardBack}>
              <h4>Total Questions</h4>
              <p>{survey.noOfQuestions}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// Inline styles for UI
const styles = {
  container: {
    display: "flex",
    flexWrap: "nowrap",
    overflowX: "auto",
    gap: "20px",
    padding: "20px",
    marginTop:"100px",
  },
  card: {
    width: "300px",
    height: "200px",
    perspective: "1000px",
    cursor: "pointer",
  },
  cardInner: {
    position: "relative",
    width: "100%",
    height: "100%",
    textAlign: "center",
    transition: "transform 0.6s",
    transformStyle: "preserve-3d",
  },
  cardFront: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
    backgroundColor: "#f8f9fa",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
  },
  cardBack: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
    backgroundColor: "#343a40",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    transform: "rotateY(180deg)",
    borderRadius: "10px",
  },
};

export default Survey;
