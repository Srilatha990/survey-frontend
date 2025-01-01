

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const SurveyDetail = () => {
  const { category } = useParams(); // Get the category from the URL
  const [surveys, setSurveys] = useState([]);
  const navigate = useNavigate();

  // Fetch surveys by category
  useEffect(() => {
    fetch(`https://survey-backend-henna.vercel.app/api/surveys/category/${category}`)
      .then((res) => res.json())
      .then((data) => setSurveys(data.data))
      .catch((err) => console.error("Error fetching surveys:", err));
  }, [category]);

  // Handle survey card click to navigate to Survey Questions Page
  const handleSurveyClick = (surveyId) => {
    navigate(`/survey/${surveyId}`);
  };

  return (
    <div style={styles.container}>
      <h3>Surveys in {category}</h3>
      <div style={styles.surveyContainer}>
        {surveys.map((survey) => (
          <div
            key={survey._id}
            onClick={() => handleSurveyClick(survey._id)}
            style={styles.surveyCard}
          >
            <h4>{survey.surveyTitle}</h4>
            <p>Total Questions: {survey.noOfQuestions}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "60px",
    fontFamily: "Arial, sans-serif",
    marginTop: "100px",
  },
  surveyContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
  },
  surveyCard: {
    width: "300px",
    height: "200px",
    padding: "20px",
    backgroundColor: "#f8f9fa",
    cursor: "pointer",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    transition: "transform 0.3s",
    marginTop:"30px",
  },
};

export default SurveyDetail;
