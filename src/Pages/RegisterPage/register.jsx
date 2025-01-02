import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignupForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmpassword: "",
  });

  const [validationErrors, setValidationErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateFields = () => {
    const errors = {};

    if (!formData.FirstName.trim()) {
      errors.FirstName = "First Name is required";
    }

    if (!formData.LastName.trim()) {
      errors.LastName = "Last Name is required";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Enter a valid email address";
    }

    if (!formData.phoneNumber.trim()) {
      errors.phoneNumber = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
      errors.phoneNumber = "Phone number must be exactly 10 digits";
    }

    if (!formData.password) {
      errors.password = "Password is required";
    } else if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }

    if (!formData.confirmpassword) {
      errors.confirmpassword = "Confirm Password is required";
    } else if (formData.password !== formData.confirmpassword) {
      errors.confirmpassword = "Passwords do not match";
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateFields();

    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }

    setValidationErrors({});

    try {
      const response = await axios.post(
        "https://survey-backend-henna.vercel.app/api/users/register",
        formData
      );

      if (response.status === 201) {
        toast.success(response.data.message, {
          position: "top-center",
          autoClose: 2000,
        });
        setTimeout(() => navigate("/otp"), 500);
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong!", {
        position: "top-center",
        autoClose: 2000,
      });
    }
  };

  const handleLoginRedirect = () => {
    navigate("/login");
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
      <ToastContainer />
      <h2 style={{ marginBottom: "20px" }}>Signup</h2>
      <form onSubmit={handleSubmit}>
        {[
          { name: "FirstName", label: "First Name", type: "text" },
          { name: "LastName", label: "Last Name", type: "text" },
          { name: "email", label: "Email", type: "email" },
          { name: "phoneNumber", label: "Phone Number", type: "tel" },
          { name: "password", label: "Password", type: "password" },
          { name: "confirmpassword", label: "Confirm Password", type: "password" },
        ].map((field) => (
          <div style={{ marginBottom: "15px" }} key={field.name}>
            <label
              style={{
                display: "block",
                marginBottom: "5px",
                fontSize: "14px",
                textAlign: "left",
              }}
            >
              {field.label}
            </label>
            <input
              name={field.name}
              type={field.type}
              value={formData[field.name]}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "10px",
                fontSize: "14px",
                borderRadius: "4px",
                border: validationErrors[field.name]
                  ? "1px solid red"
                  : "1px solid #ccc",
              }}
            />
            {validationErrors[field.name] && (
              <p style={{ color: "red", fontSize: "12px", textAlign: "left" }}>
                {validationErrors[field.name]}
              </p>
            )}
          </div>
        ))}
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
          Signup
        </button>
      </form>
      <p style={{ marginTop: "20px", fontSize: "14px" }}>
        Already have an account?{" "}
        <button
          onClick={handleLoginRedirect}
          style={{
            color: "#002261",
            background: "none",
            border: "none",
            cursor: "pointer",
            textDecoration: "underline",
          }}
          onMouseEnter={(e) => (e.target.style.color = "#002261")}
          onMouseLeave={(e) => (e.target.style.color = "#002261")}
        >
          Login
        </button>
      </p>
    </div>
  );
};

export default SignupForm;
