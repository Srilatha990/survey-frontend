// import React from "react";

// const PremiumPage = () => {
//   const styles = {
//     premiumPage: {
//       fontFamily: "Arial, sans-serif",
//       padding: "20px",
//       margin: "0 auto",
//       maxWidth: "1200px",
//       marginTop:"100px"
//     },
//     choosePlanSection: {
//       display: "flex",
//       justifyContent: "space-between",
//       alignItems: "center",
//       marginBottom: "40px",
//     },
//     choosePlanLeft: {
//       flex: 1,
//     },
//     choosePlanLeftHeading: {
//       fontSize: "32px",
//       marginBottom: "10px",
//     },
//     choosePlanLeftText: {
//       fontSize: "16px",
//       color: "#666",
//     },
//     choosePlanRight: {
//       display: "flex",
//       gap: "10px",
//     },
//     planButton: {
//       padding: "12px 20px",
//       fontSize: "16px",
//       backgroundColor: "#007BFF",
//       color: "white",
//       border: "none",
//       cursor: "pointer",
//       borderRadius: "5px",
//       transition: "background-color 0.3s ease",
//     },
//     planButtonHover: {
//       backgroundColor: "#0056b3",
//     },
//     cardsSection: {
//       display: "grid",
//       gridTemplateColumns: "repeat(3, 1fr)",
//       gap: "20px",
//     },
//     card: {
//       padding: "20px",
//       backgroundColor: "#f9f9f9",
//       border: "1px solid #ddd",
//       borderRadius: "8px",
//       textAlign: "center",
//     },
//     cardHeading: {
//       fontSize: "24px",
//       color: "#333",
//       marginBottom: "15px",
//     },
//     cardSubheading: {
//       fontSize: "20px",
//       color: "#007BFF",
//       marginBottom: "10px",
//     },
//     cardText: {
//       fontSize: "14px",
//       color: "#666",
//       marginBottom: "20px",
//     },
//     cardList: {
//       listStyleType: "none",
//       padding: "0",
//       fontSize: "14px",
//       color: "#333",
//     },
//     cardListItem: {
//       display: "flex",
//       alignItems: "center",
//       marginBottom: "10px",
//     },
//     cardListItemSpan: {
//     //   marginRight: "10px",
//     // justifyContent:"center",
//     },
//     // Responsive Styles
//     "@media (max-width: 768px)": {
//       choosePlanSection: {
//         flexDirection: "column",
//         alignItems: "flex-start",
//       },
//       choosePlanRight: {
//         marginTop: "20px",
//         flexDirection: "column",
//       },
//       cardsSection: {
//         gridTemplateColumns: "1fr",
//       },
//       card: {
//         marginBottom: "20px",
//       },
//     },
//     "@media (max-width: 480px)": {
//       choosePlanLeftHeading: {
//         fontSize: "24px",
//       },
//       planButton: {
//         fontSize: "14px",
//         padding: "10px 15px",
//       },
//       cardHeading: {
//         fontSize: "20px",
//       },
//       cardSubheading: {
//         fontSize: "18px",
//       },
//       cardListItem: {
//         fontSize: "12px",
//       },
//     },
//   };

//   return (
//     <div style={styles.premiumPage}>
//       {/* First Part (Choose Your Plan Section) */}
//       <div style={styles.choosePlanSection}>
//         <div style={styles.choosePlanLeft}>
//           <h2 style={styles.choosePlanLeftHeading}>Choose Your Plan</h2>
//           <p style={styles.choosePlanLeftText}>
//             Select a plan that fits your needs and get started right away.
//           </p>
//         </div>
//         <div style={styles.choosePlanRight}>
//           <button style={styles.planButton}>Monthly</button>
//           <button style={styles.planButton}>Yearly</button>
//         </div>
//       </div>

//       {/* Second Part (3 Cards) */}
//       <div style={styles.cardsSection}>
//         {/* Card 1 */}
//         <div style={styles.card}>
//           <h3 style={styles.cardHeading}>$19/month</h3>
//           <h4 style={styles.cardSubheading}>Starter</h4>
//           <p style={styles.cardText}>Get Started with Simple, Powerful Surveys</p>
//           <ul style={styles.cardList}>
//             <li style={styles.cardListItem}>
//               <span style={styles.cardListItemSpan}>✅</span> Unlimited Basic Surveys
//             </li>
//             <li style={styles.cardListItem}>
//               <span style={styles.cardListItemSpan}>✅</span> Basic Response Analytics
//             </li>
//             <li style={styles.cardListItem}>
//               <span style={styles.cardListItemSpan}>✅</span>Email Support
//             </li>
//           </ul>
//         </div>
//         {/* Card 2 */}
//         <div style={styles.card}>
//           <h3 style={styles.cardHeading}>$54/month</h3>
//           <h4 style={styles.cardSubheading}>Professional</h4>
//           <p style={styles.cardText}>Unlock Enhanced Features for Deeper Insights</p>
//           <ul style={styles.cardList}>
//             <li style={styles.cardListItem}>
//               <span style={styles.cardListItemSpan}>✅</span> Advanced Survey Logic
//             </li>
//             <li style={styles.cardListItem}>
//               <span style={styles.cardListItemSpan}>✅</span>Custom Branding
//             </li>
//             <li style={styles.cardListItem}>
//               <span style={styles.cardListItemSpan}>✅</span>Export Responses in Multiple Formats
//             </li>
//           </ul>
//         </div>
//         {/* Card 3 */}
//         <div style={styles.card}>
//           <h3 style={styles.cardHeading}>$89/month</h3>
//           <h4 style={styles.cardSubheading}>Company</h4>
//           <p style={styles.cardText}>Comprehensive Survey Management for Your Business</p>
//           <ul style={styles.cardList}>
//             <li style={styles.cardListItem}>
//               <span style={styles.cardListItemSpan}>✅</span> Collaborative Team Access
//             </li>
//             <li style={styles.cardListItem}>
//               <span style={styles.cardListItemSpan}>✅</span> Enterprise-Level Data Security
//             </li>
//             <li style={styles.cardListItem}>
//               <span style={styles.cardListItemSpan}>✅</span>Advanced Reporting & Dashboards
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PremiumPage;



import React from "react";

const PremiumPage = () => {
  const styles = {
    premiumPage: {
      fontFamily: "Arial, sans-serif",
      padding: "20px",
      margin: "0 auto",
      maxWidth: "1200px",
      marginTop:"120px",
    },
    choosePlanSection: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "40px",
    },
    choosePlanLeft: {
      flex: 1,
    },
    choosePlanLeftHeading: {
      fontSize: "32px",
      marginBottom: "10px",
      color: "#333", // Heading color
    },
    choosePlanLeftText: {
      fontSize: "16px",
      color: "#666",
    },
    choosePlanRight: {
      display: "flex",
      gap: "10px",
    },
    planButton: {
      padding: "12px 20px",
      fontSize: "16px",
      backgroundColor: "#2ea6f7", // Button color
      color: "white",
      border: "none",
      cursor: "pointer",
      borderRadius: "5px",
      transition: "background-color 0.3s ease",
    },
    planButtonHover: {
      backgroundColor: "#007BFF",
    },
    cardsSection: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "20px",
    },
    card: {
      padding: "20px",
      backgroundColor: "#f9f9f9",
      border: "1px solid #ddd",
      borderRadius: "8px",
      textAlign: "center",
    },
    cardHeading: {
      fontSize: "24px",
      color: "#333", // Heading color
      marginBottom: "15px",
    },
    cardSubheading: {
      fontSize: "20px",
      color: "#2ea6f7", // Subheading color
      marginBottom: "10px",
    },
    cardText: {
      fontSize: "14px",
      color: "#666",
      marginBottom: "20px",
    },
    cardList: {
      listStyleType: "none",
      padding: "0",
      fontSize: "14px",
      color: "#333",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start", // Aligning list items to the left
      gap: "10px", // Adding vertical space between items
    },
    cardListItem: {
      display: "flex",
      alignItems: "center",
    },
    cardListItemBox: {
      display: "inline-block",
      width: "18px",
      height: "18px",
      border: "2px solid #2ea6f7", // Blue border around the tick
      borderRadius: "3px",
      textAlign: "center",
      marginRight: "10px",
    },
    cardListItemSpan: {
      fontSize: "14px",
      color: "#2ea6f7", // Blue tick color
      lineHeight: "18px", // Vertically align tick
    },
    // Responsive Styles
    "@media (max-width: 768px)": {
      choosePlanSection: {
        flexDirection: "column",
        alignItems: "flex-start",
      },
      choosePlanRight: {
        marginTop: "20px",
        flexDirection: "column",
      },
      cardsSection: {
        gridTemplateColumns: "1fr",
      },
      card: {
        marginBottom: "20px",
      },
    },
    "@media (max-width: 480px)": {
      choosePlanLeftHeading: {
        fontSize: "24px",
      },
      planButton: {
        fontSize: "14px",
        padding: "10px 15px",
      },
      cardHeading: {
        fontSize: "20px",
      },
      cardSubheading: {
        fontSize: "18px",
      },
      cardListItem: {
        fontSize: "12px",
      },
    },
  };

  return (
    <div style={styles.premiumPage}>
      {/* First Part (Choose Your Plan Section) */}
      <div style={styles.choosePlanSection}>
        <div style={styles.choosePlanLeft}>
          <h2 style={styles.choosePlanLeftHeading}>Choose Your Plan</h2>
          <p style={styles.choosePlanLeftText}>
            Select a plan that fits your needs and get started right away.
          </p>
        </div>
        <div style={styles.choosePlanRight}>
          <button style={styles.planButton}>Monthly</button>
          <button style={styles.planButton}>Yearly</button>
        </div>
      </div>

      {/* Second Part (3 Cards) */}
      <div style={styles.cardsSection}>
        {/* Card 1 */}
        <div style={styles.card}>
          <h3 style={styles.cardHeading}>$19/month</h3>
          <h4 style={styles.cardSubheading}>Starter</h4>
          <p style={styles.cardText}>Kickstart your survey journey</p>
          <ul style={styles.cardList}>
            <li style={styles.cardListItem}>
              <div style={styles.cardListItemBox}>
                <span style={styles.cardListItemSpan}>✅</span>
              </div>
              Unlimited Basic Surveys
            </li>
            <li style={styles.cardListItem}>
              <div style={styles.cardListItemBox}>
                <span style={styles.cardListItemSpan}>✅</span>
              </div>
              Basic Response Analytics
            </li>
            <li style={styles.cardListItem}>
              <div style={styles.cardListItemBox}>
                <span style={styles.cardListItemSpan}>✅</span>
              </div>
              Email Support
            </li>
          </ul>
        </div>
        {/* Card 2 */}
        <div style={styles.card}>
          <h3 style={styles.cardHeading}>$49/month</h3>
          <h4 style={styles.cardSubheading}>Professional</h4>
          <p style={styles.cardText}>Unlock Enhanced Features for Deeper Insights</p>
          <ul style={styles.cardList}>
            <li style={styles.cardListItem}>
              <div style={styles.cardListItemBox}>
                <span style={styles.cardListItemSpan}>✅</span>
              </div>
              Advanced Survey Logic
            </li>
            <li style={styles.cardListItem}>
              <div style={styles.cardListItemBox}>
                <span style={styles.cardListItemSpan}>✅</span>
              </div>
              Custom Branding
            </li>
            <li style={styles.cardListItem}>
              <div style={styles.cardListItemBox}>
                <span style={styles.cardListItemSpan}>✅</span>
              </div>
              Export Responses in Multiple Formats
            </li>
          </ul>
        </div>
        {/* Card 3 */}
        <div style={styles.card}>
          <h3 style={styles.cardHeading}>$99/month</h3>
          <h4 style={styles.cardSubheading}>Company</h4>
          <p style={styles.cardText}>Enterprise-Grade Survey Solutions</p>
          <ul style={styles.cardList}>
            <li style={styles.cardListItem}>
              <div style={styles.cardListItemBox}>
                <span style={styles.cardListItemSpan}>✅</span>
              </div>
              Collaborative Team Access
            </li>
            <li style={styles.cardListItem}>
              <div style={styles.cardListItemBox}>
                <span style={styles.cardListItemSpan}>✅</span>
              </div>
              Enterprise-Level Data Security
            </li>
            <li style={styles.cardListItem}>
              <div style={styles.cardListItemBox}>
                <span style={styles.cardListItemSpan}>✅</span>
              </div>
              Advanced Reporting & Dashboards
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PremiumPage;


