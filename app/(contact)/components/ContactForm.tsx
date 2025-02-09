"use client"
import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

interface FormData {
  fullName: string;
  email: string;
  message: string;
}

interface Errors {
  fullName?: string;
  email?: string;
  message?: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<Errors>({});
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setLoading(false);
      setTimeout(() => {
        setErrors({});
      }, 5000);
      return;
    }

    try {
      const res = await axios.post("/api/contact", formData);

      if (res.data.success) {
        setFormData({ fullName: "", email: "", message: "" });
        setSuccessMessage("Thank you, your email was sent successfully.");
        setLoading(false);
        setTimeout(() => {
          setSuccessMessage("");
        }, 5000);
      } else {
        setErrorMessage("Form submission failed.");
        setLoading(false);
        setTimeout(() => {
          setErrorMessage("");
        }, 5000);
      }
    } catch (error) {
      console.log(error)
      setErrorMessage("An error occurred while submitting the form.");
      setLoading(false);
      setTimeout(() => {
        setErrorMessage("");
      }, 5000);
    }
  };

  const validate = (data: FormData) => {
    const errors: Errors = {};
    if (!data.fullName.trim()) {
      errors.fullName = "Name is required *";
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
    <div className="flex justify-center items-center w-full h-full">
      <div className="bg-white h-full pt-6 w-full">
        <form onSubmit={onSubmit} className="space-y-4">
          {errorMessage && (
            <small className="text-red-500 block text-center">{errorMessage}</small>
          )}
          {successMessage && (
            toast.success("Thank you for your message. I'll be sure to respond soon.")
          )}
          <div>
            <input
              type="text"
              className={`w-full p-3 border ${
                errors.fullName ? "border-red-500" : "border-gray-300"
              } rounded-md focus:outline-none focus:ring-[1px] focus"border-none focus:ring-indigo-500`}
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Your Name*"
            />
            {errors.fullName && (
              <small className="text-red-500">{errors.fullName}</small>
            )}
          </div>
          <div>
            <input
              type="email"
              className={`w-full p-3 border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded-md focus:outline-none focus:ring-[1px] focus"border-none focus:ring-indigo-500`}
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email*"
            />
            {errors.email && (
              <small className="text-red-500">{errors.email}</small>
            )}
          </div>
          <div>
            <textarea
              name="message"
              className={`w-full p-3 border min-h-52 ${
                errors.message ? "border-red-500" : "border-gray-300"
              } rounded-md focus:outline-none focus:ring-[1px] focus"border-none focus:ring-indigo-500 h-40`}
              value={formData.message}
              onChange={handleChange}
              placeholder="Message*"
            ></textarea>
            {errors.message && (
              <small className="text-red-500">{errors.message}</small>
            )}
          </div>
          <div>
            <button
              type="submit"
              disabled={loading}
              className="w-full max-w-48 bg-primary text-white p-3 disabled:p-2 rounded-md hover:bg-pink-600 transition disabled:bg-red-200 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {loading ? <div className="h-8 aspect-square border-4 rounded-full border-white border-y-transparent animate-spin"></div> : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
