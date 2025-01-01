

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CategoriesPage = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  // Fetch all categories
  useEffect(() => {
    fetch("https://survey-backend-henna.vercel.app/api/surveys/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data.data))
      .catch((err) => console.error("Error fetching categories:", err));
  }, []);

  // Navigate to SurveysPage with the selected category
  const handleCategoryClick = (category) => {
    navigate(`/surveys/${category}`);
  };

  return (
    <div style={styles.container}>
      <h3 style={styles.title}>Survey Categories</h3>
      <div style={styles.categoryContainer}>
        {categories.map((category, index) => (
          <div
            key={index} // You can use index as a key here as it will always be unique
            onClick={() => handleCategoryClick(category)}
            style={styles.categoryCard}
          >
            <h5>{category}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "70px",
    fontFamily: "Arial, sans-serif",
    marginTop: "100px",
  },
  // Title centered
  title: {
    textAlign: "center",  // Centers the title
    marginBottom: "40px", // Adds some space below the title
  },
  // Category container with responsive layout
  categoryContainer: {
    display: "flex",
    flexDirection: "column",  // Display items in a vertical column on small screens
    gap: "20px",  // Adds space between cards
    marginBottom: "40px",
    flexWrap: "wrap", // Allow wrapping for larger screens
    justifyContent: "center", // Center items
  },
  // Full-width cards with centered text
  categoryCard: {
    padding: "20px",
    backgroundColor: "#f8f9fa",
    cursor: "pointer",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    textAlign: "center",  // Center text inside the card
    width: "100%",  // Full width for the card on mobile
    transition: "transform 0.3s",
  },
  
  // Responsive media queries for larger screens
  '@media (min-width: 600px)': {
    container: {
      padding: "70px 50px",  // Adjust padding for tablets and larger screens
    },
    categoryContainer: {
      flexDirection: "row",  // Use horizontal layout for larger screens
      justifyContent: "space-around",  // Spread out cards horizontally
    },
    categoryCard: {
      width: "45%",  // Make each card take 45% of the container on medium screens
    },
  },

  '@media (min-width: 1024px)': {
    categoryContainer: {
      justifyContent: "space-between",  // More space for larger desktop screens
    },
    categoryCard: {
      width: "30%",  // Cards will take 30% of the container width on larger screens
    },
  },
};

export default CategoriesPage;
