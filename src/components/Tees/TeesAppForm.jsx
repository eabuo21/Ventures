import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import {
  showSuccessNotification,
  showErrorNotification,
} from "../Notification/Notification";
import validation from "./Validate";

const TeesAppForm = ({ onClose }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({
    name: "",
    email: "",
  });
  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    const validationErrors = validation(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const templateParams = {
        name: values.name,
        email: values.email,
      };

      emailjs
        .send(
          "service_z3uzwhg", // Replace with your EmailJS service ID
          "template_vahdjvt", // Replace with your EmailJS template ID
          templateParams,
          "CDmJ3huYpinZb0wEA" // Replace with your EmailJS public API key
        )
        .then((response) => {
          setValues({ name: "", email: "" });
          setLoading(false);
          if (response.status === 200) {
            showSuccessNotification("Subscribed successfully");
            // Close modal here
            onClose();
            // Navigate to success page
            navigate("/success");
          } else {
            showErrorNotification("Failed, try again");
            setLoading(false);
          }
        })
        .catch((error) => {
          showErrorNotification("Failed, try again");
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col inset-0 bg-black z-50 w-full h-full justify-center items-center fixed">
      <div className="bg-white w-[300px] h-[300px] inset-0 z-50 flex flex-col gap-4 justify-start items-center md:w-[600px] md:h-[400px]">
        <button onClick={onClose} className="text-dark text-xl mx-auto mr-5">
          Close
        </button>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 justify-start items-center w-full md:gap-9"
        >
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleInput}
            placeholder="Full Name"
            required
            className="border-l-2 border-red border-b-2 border-b-dark h-[40px] w-[250px] md:w-[500px] px-2 focus:outline-none"
          />
          {errors.name && <p className="text-red">{errors.name}</p>}

          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleInput}
            placeholder="Email Address"
            required
            className="border-l-2 border-red border-b-2 border-b-dark h-[40px] w-[250px] md:w-[500px] px-2 focus:outline-none"
          />
          {errors.email && <p className="text-red">{errors.email}</p>}

          <button
            className="bg-red text-white h-[40px] w-[250px] md:w-[500px] px-2"
            type="submit"
            disabled={loading}
          >
            {loading ? "Please Wait..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default TeesAppForm;
