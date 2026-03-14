"use client";

import { Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [focused, setFocused] = useState(null);

  const [status, setStatus] = useState("idle");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
    honey: "",
  });

  const [errors, setErrors] = useState({});

  /* ---------------- Validation ---------------- */

  const validate = () => {
    const newErrors = {};

    if (formData.name.trim().length < 3) {
      newErrors.name = "Name too short";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email";
    }

    if (!formData.projectType) {
      newErrors.projectType = "Select project type";
    }

    if (formData.message.trim().length < 10) {
      newErrors.message = "Message too short";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  /* ---------------- Submit ---------------- */

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.honey) return;

    if (!validate()) return;

    setStatus("submitting");

    try {
      await new Promise((r) => setTimeout(r, 1200));

      setStatus("success");

      setFormData({
        name: "",
        email: "",
        projectType: "",
        message: "",
        honey: "",
      });

      setTimeout(() => setStatus("idle"), 2000);
    } catch {
      alert("Something went wrong");
      setStatus("idle");
    }
  };

  /* ---------------- Input Change ---------------- */

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  /* ================================================= */

  return (
    <section
      id="contact"
      className="py-32 px-6 bg-gradient-to-br from-[#fffef7] to-[#f7f5ee] text-stone-900"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
        {/* LEFT */}
        <div className="space-y-10">
          <div>
            <p className="text-sm font-mono text-[#B45309] tracking-widest mb-4">
              CONTACT
            </p>

            <h2 className="text-5xl md:text-7xl font-black leading-tight mb-6">
              Let’s Build
              <br />
              Something Great
            </h2>

            <p className="text-lg text-stone-600 max-w-md">
              Tell us about your project. We usually respond within 24 hours.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-[#B45309] text-white rounded-xl">
                <Mail size={18} />
              </div>

              <div>
                <p className="text-sm text-stone-500">Email</p>
                <p className="font-semibold">hello@oddlambda.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 bg-stone-900 text-white rounded-xl">
                <MapPin size={18} />
              </div>

              <div>
                <p className="text-sm text-stone-500">Location</p>
                <p className="font-semibold">New Delhi, India</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="bg-white/70 backdrop-blur-xl border border-stone-200 rounded-3xl shadow-xl p-10">
          {status === "success" ? (
            <div className="text-center py-16">
              <h3 className="text-2xl font-bold mb-2">Message Sent ✅</h3>
              <p className="text-stone-600">We’ll contact you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Honeypot */}
              <input
                type="text"
                name="honey"
                value={formData.honey}
                onChange={handleChange}
                className="hidden"
              />

              {/* NAME */}
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                autoComplete="name"
                required
                placeholder="Name"
                className="w-full border-b border-stone-300 bg-transparent py-4 text-lg outline-none focus:border-[#B45309]"
              />

              {errors.name && (
                <p className="text-red-500 text-xs">{errors.name}</p>
              )}

              {/* EMAIL */}
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
                required
                placeholder="Email"
                className="w-full border-b border-stone-300 bg-transparent py-4 text-lg outline-none focus:border-[#B45309]"
              />

              {errors.email && (
                <p className="text-red-500 text-xs">{errors.email}</p>
              )}

              {/* SELECT */}
              <select
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                required
                className="w-full border-b border-stone-300 bg-transparent py-4 text-lg outline-none focus:border-[#B45309]"
              >
                <option value="">Project Type</option>
                <option>Custom Website</option>
                <option>Landing Page</option>
                <option>Web Application</option>
                <option>E-Commerce</option>
                <option>SEO and Growth</option>
              </select>

              {errors.projectType && (
                <p className="text-red-500 text-xs">{errors.projectType}</p>
              )}

              {/* MESSAGE */}
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your message"
                className="w-full border-b border-stone-300 bg-transparent py-4 text-lg resize-none outline-none focus:border-[#B45309]"
              />

              {errors.message && (
                <p className="text-red-500 text-xs">{errors.message}</p>
              )}

              {/* BUTTON */}
              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full bg-stone-900 text-white py-5 rounded-xl font-semibold hover:bg-[#B45309] transition flex items-center justify-center gap-3 shadow-lg disabled:opacity-60"
              >
                {status === "submitting" ? "Sending..." : "Send Message"}
                <Send size={18} />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
