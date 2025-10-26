"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import Container from "../global/container";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    service: "",
    budget: "",
    contactTime: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSuccess("Message sent successfully!");
        setForm({
          name: "",
          email: "",
          phone: "",
          company: "",
          website: "",
          service: "",
          budget: "",
          contactTime: "",
          message: "",
        });
      } else {
        setSuccess("Failed to send message. Try again.");
      }
    } catch (err) {
      console.error(err);
      setSuccess("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
          <Container>
                         <div className="flex flex-col items-center justify-center w-full max-w-3xl mx-auto text-center">
                             <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mb-6">
                                 Get in <span className="font-subheading italic text-blue-500">Touch</span> with Us
                             </h2>
                         </div>
                     </Container>
      <div className="bg-gradient-to-r from-black/90 via-gray-900/90 to-black/90 text-white p-10 rounded-3xl max-w-3xl mx-auto shadow-2xl border border-blue-600">
        {/* Heading */}
        <div className="text-center mb-8">
         
          <p className="text-gray-400 mt-3 text-base md:text-lg">
            Fill out the form below and our team will get back to you promptly.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name *"
              value={form.name}
              onChange={handleChange}
              required
              className="p-4 rounded-lg bg-gray-900 border border-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email *"
              value={form.email}
              onChange={handleChange}
              required
              className="p-4 rounded-lg bg-gray-900 border border-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number *"
              value={form.phone}
              onChange={handleChange}
              required
              className="p-4 rounded-lg bg-gray-900 border border-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
            <input
              type="text"
              name="company"
              placeholder="Company Name"
              value={form.company}
              onChange={handleChange}
              className="p-4 rounded-lg bg-gray-900 border border-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="url"
              name="website"
              placeholder="Website URL"
              value={form.website}
              onChange={handleChange}
              className="p-4 rounded-lg bg-gray-900 border border-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              required
              className="p-4 rounded-lg bg-gray-900 border border-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            >
              <option value="">Select Service Interested *</option>
              <option value="website-maintenance">Website Maintenance</option>
              <option value="digital-marketing">Digital Marketing Pack</option>
              <option value="enterprise-pack">Enterprise Pack</option>
              <option value="complete-business-suite">Complete Business Suite</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="budget"
              placeholder="Budget (INR)"
              value={form.budget}
              onChange={handleChange}
              className="p-4 rounded-lg bg-gray-900 border border-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
            <input
              type="text"
              name="contactTime"
              placeholder="Preferred Contact Time"
              value={form.contactTime}
              onChange={handleChange}
              className="p-4 rounded-lg bg-gray-900 border border-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>

          <textarea
            name="message"
            placeholder="Your Message *"
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
            className="p-4 rounded-lg bg-gray-900 border border-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />

          <Button type="submit" size="lg" variant="blue" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </Button>
        </form>

        {success && <p className="mt-4 text-center text-green-400 font-medium">{success}</p>}
      </div>
    </Container>
  );
};

export default ContactForm;
