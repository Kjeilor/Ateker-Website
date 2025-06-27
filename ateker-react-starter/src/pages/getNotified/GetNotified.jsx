// src/pages/GetNotified.jsx
import React, { useState } from "react";
import "./styles/GetNotified.scss";

const GetNotified = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    organization: "",
    contactName: "",
    email: "",
    role: "",
    interest: "",
    notes: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      organization: formData.organization,
      name: formData.contactName,
      email: formData.email,
      role: formData.role,
      interest: formData.interest,
      message: formData.notes,
      timestamp: new Date().toISOString(),
    };

    try {
      const response = await fetch("https://sheetdb.io/api/v1/hioiqxq8rz9gy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: payload }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        console.error("Submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="notify-page">
      <div className="notify-container">
        <h2>Register Interest</h2>
        <p>
          Fill out the form below and we'll contact you about using Ateker in
          your city, department, or institution.
        </p>

        {!submitted ? (
          <form className="interest-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="organization"
              placeholder="Organization / Institution Name"
              value={formData.organization}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="contactName"
              placeholder="Full Name"
              value={formData.contactName}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="role"
              placeholder="Your Role / Department"
              value={formData.role}
              onChange={handleChange}
            />
            <select
              name="interest"
              value={formData.interest}
              onChange={handleChange}
              required
            >
              <option value="">
                Which product are you most interested in?
              </option>
              <option value="Sudo Canary">Sudo Canary</option>
              <option value="Channel Blue">Channel Blue</option>
              <option value="Storebook">Storebook</option>
              <option value="Corner Store">Corner Store</option>
              <option value="All">All of them</option>
            </select>
            <textarea
              name="notes"
              rows="4"
              placeholder="Anything else you'd like to share?"
              value={formData.notes}
              onChange={handleChange}
            />

            <button type="submit" className="cta-btn">
              Submit
            </button>
          </form>
        ) : (
          <div className="confirmation-message">
            <h3>Thank you!</h3>
            <p>We’ve received your interest and will be in touch soon.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default GetNotified;
