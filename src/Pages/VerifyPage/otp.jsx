import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const VerifyOtp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    otp: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://survey-backend-henna.vercel.app/users/verify-otp",
        formData
      );

      if (response.status === 200) {
        toast.success(response.data.message || "OTP verified successfully!", {
          position: "top-center",
          autoClose: 2000,
        });
        setTimeout(() => navigate("/login"), 2000); // Redirect to login page after 2 seconds
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Invalid OTP!", {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "50px auto",
        textAlign: "center",
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "20px",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Toast Container for notifications */}
      <ToastContainer />
      <h2 style={{ marginBottom: "20px" }}>Verify OTP</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "20px" }}>
          <label
            htmlFor="otp"
            style={{
              display: "block",
              marginBottom: "5px",
              fontSize: "14px",
              textAlign: "left",
            }}
          >
            OTP
          </label>
          <input
            type="text"
            id="otp"
            name="otp"
            value={formData.otp}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              fontSize: "14px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
            required
          />
        </div>
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            fontSize: "16px",
            color: "#fff",
            backgroundColor: "#002261",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#002261")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#002261")}
        >
          Verify
        </button>
      </form>
    </div>
  );
};

export default VerifyOtp;
