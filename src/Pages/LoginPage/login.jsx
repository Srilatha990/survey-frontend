import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://survey-backend-henna.vercel.app/api/users/login",
        formData
      );

      if (response.status === 200) {
        localStorage.setItem("authToken", response.data.token);
        localStorage.setItem("userId", response.data.user.id);

        toast.success("Login successful! Redirecting...", {
          position: "top-center",
          autoClose: 2000,
        });

        setTimeout(() => navigate("/surveys"), 1000);
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Invalid credentials!", {
        position: "top-center",
        autoClose: 2000,
      });
    }
  };

  const handleSignupRedirect = () => {
    navigate("/register");
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto", textAlign: "center", border: "1px solid #ccc", borderRadius: "8px", padding: "20px", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" }}>
      <ToastContainer />
      <h2 style={{ marginBottom: "20px" }}>Login</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px", fontSize: "14px", textAlign: "left" }}>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "10px",
              fontSize: "14px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px", fontSize: "14px", textAlign: "left" }}>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "10px",
              fontSize: "14px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
        </div>
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            fontSize: "16px",
            color: "#fff",
            backgroundColor: "#26a69a",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#00796b")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#26a69a")}
        >
          Login
        </button>
      </form>
      <p style={{ marginTop: "20px", fontSize: "14px" }}>
        Don't have an account?{" "}
        <button
          onClick={handleSignupRedirect}
          style={{
            color: "#26a69a",
            background: "none",
            border: "none",
            cursor: "pointer",
            textDecoration: "underline",
          }}
          onMouseEnter={(e) => (e.target.style.color = "#00796b")}
          onMouseLeave={(e) => (e.target.style.color = "#26a69a")}
        >
          Signup
        </button>
      </p>
    </div>
  );
};

export default LoginForm;
