"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function SiteVisitHero() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
    consent: false,
  });

  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    "/herobg.jpg",
    "/herobg1.jpg",
    "/herobg2.jpg",
  ];

  // Auto Slider Effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [slides.length]);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("Form submitted!");
  }

  return (
    <section className="relative w-full h-[110vh] overflow-hidden top-10">

      {/* BACKGROUND SLIDES */}
      <div className="absolute inset-0">
        {slides.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* GLASS FORM */}
      <div
        className="
          absolute right-15 top-1/2 -translate-y-1/2 
          bg-white/30 backdrop-blur-xl
          shadow-2xl rounded-2xl 
          p-8 w-[360px] md:w-[400px]
          border border-white/20
          z-10
        "
      >
        <h2 className="text-2xl font-semibold mb-6 text-gray-900 drop-shadow-sm">
          Book a Free Site Visit
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            placeholder="Full Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="
              w-full px-4 py-3 rounded-xl 
              bg-white/40 backdrop-blur-md
              placeholder-gray-700
              focus:outline-none focus:ring-2 focus:ring-[#005AA7]
            "
          />

          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="
              w-full px-4 py-3 rounded-xl 
              bg-white/40 backdrop-blur-md
              placeholder-gray-700
              focus:outline-none focus:ring-2 focus:ring-[#005AA7]
            "
          />

          <input
            type="tel"
            placeholder="Mobile Number"
            name="mobile"
            value={form.mobile}
            onChange={handleChange}
            required
            className="
              w-full px-4 py-3 rounded-xl 
              bg-white/40 backdrop-blur-md
              placeholder-gray-700
              focus:outline-none focus:ring-2 focus:ring-[#005AA7]
            "
          />

          <textarea
            placeholder="Your message or site visit preferences…"
            name="message"
            value={form.message}
            onChange={handleChange}
            rows="1"
            className="
              w-full px-4 py-3 rounded-xl 
              bg-white/40 backdrop-blur-md
              placeholder-gray-700
              focus:outline-none focus:ring-2 focus:ring-[#005AA7]
            "
          ></textarea>

          <label className="flex items-start gap-3 text-sm text-gray-900 leading-tight">
            <input
              type="checkbox"
              name="consent"
              checked={form.consent}
              onChange={handleChange}
              required
              className="mt-1 h-4 w-4 text-[#005AA7] rounded"
            />
            <span>
              I agree to be contacted by your team regarding project details, 
              availability, and scheduling my site visit.
            </span>
          </label>

          <button
            type="submit"
            className="
              w-full py-3 rounded-xl text-white font-medium text-base 
              shadow-lg hover:shadow-xl transition
            "
            style={{ backgroundColor: "#005AA7" }}
          >
            Submit Request
          </button>
        </form>
      </div>
    </section>
  );
}
