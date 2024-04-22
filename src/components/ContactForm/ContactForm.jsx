import React, { useState } from "react";

import "./contactform.css";
import HeadLine from "../HeadLine/HeadLine";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
   
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setLoading(false);
      setTimeout(() => {
        setErrors("");
      }, 5000);
      return; 
    }

    const formDataToSend = new FormData(event.target);
    formDataToSend.append("access_key", import.meta.env.VITE_W3FORMS_KEY);

    const object = Object.fromEntries(formDataToSend);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const responseData = await res.json();

      if (responseData.success) {
        setFormData({
          fullname: "",
          email: "",
          message: "",
        });
        setSuccessMessage("Thank you, your email was sent successfully.");
        setLoading(false);
        setTimeout(() => {
          setSuccessMessage("");
        }, 5000);
      } else {
        setErrorMessage("Form submission failed:", responseData);
        setLoading(false);
        setTimeout(() => {
          setErrorMessage("");
        }, 5000);
      }
    } catch (error) {
      setErrorMessage("An error occurred while submitting the form:", error);
      setLoading(false);
      setTimeout(() => {
        setErrorMessage("");
      }, 5000);
    }
  };

  const validate = (data) => {
    let errors = {};
    if (!data.fullname.trim()) {
      errors.fullname = "Name is required *";
    }
    if (!data.email.trim()) {
      errors.email = "Email is required *";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Email is invalid";
    }
    if (!data.message.trim()) {
      errors.message = "Message is required *";
    }
    return errors;
  };

  return (
    <div className="contact-form-container">
      <div className="contact-title">
        <HeadLine
          id="contact"
          number={"07"}
          description={"React Out To Me"}
          name={"Contact"}
        />
      </div>
      <div className="contact-form-section">
        <form onSubmit={onSubmit}>
          {errorMessage && <small className="form-text">{errorMessage}</small>}
          {successMessage && <small className="form-text">{successMessage}</small>}
          <div className="input-fields">
            <div className="input-field">
              <input
                type="text"
                className={`form-control ${errors.fullname && "is-invalid"}`}
                name="fullname"
                value={formData.fullname}
                onChange={handleChange}
                placeholder="Your Name*"
              />
              {errors.fullname && (
                <small className="form-text">{errors.fullname}</small>
              )}
            </div>
            <div className="input-field">
              <input
                type="email"
                className={`form-control ${errors.email && "is-invalid"}`}
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email*"
              />
              {errors.email && (
                <small className="form-text">{errors.email}</small>
              )}
            </div>
          </div>
          <div className="text-area">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message*"
              className={`form-control ${errors.message && "is-invalid"}`}
            ></textarea>
            {errors.message && (
              <small className="form-text">{errors.message}</small>
            )}
          </div>
          <div className="contact-button">
            <button type="submit" disabled={loading}>
              {loading ? <div className="loader"></div> : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
