import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Rectangle from '../assets/Rectangle.png'
const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    date: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Appointment Booked Successfully!");
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      date: "",
    });
  };

  return (
    <div id="contact">
    <div  className="w-full px-6 py-12 bg-gray-100 flex flex-col md:flex-row items-center justify-between justify-center item-center gap-8 max-w-7xl mx-auto">
      {/* Left: Form */}
      <div className="w-full md:w-1/2 ">
        <h2 className="text-3xl font-bold mb-4">Schedule an Appointment</h2>
        <p className="mb-6 text-gray-600">Fill the form and schedule an appointment.</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Full Name"
            required
            className="w-full p-3 border border-gray-300 rounded"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="w-full p-3 border border-gray-300 rounded"
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone"
            required
            className="w-full p-3 border border-gray-300 rounded"
          />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
          >
            Book an Appointment
          </button>
        </form>
      </div>

      {/* Right: Image */}
      <div className="w-full md:w-1/3">
        <img
          src={Rectangle}
          alt="Appointment"
          className="w-full rounded shadow"
        />
      </div>

      {/* Toast Container */}
      <ToastContainer />
    </div>
    </div>
  );
};

export default AppointmentForm;
