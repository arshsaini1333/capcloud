"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function SiteVisitHero() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    consent: false,
  });
  const [loading, setLoading] = useState(false);

  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = ["/images/img5.webp", "/images/img8.webp", "/images/img9.webp"];

  const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbzlcp9ztREye5ETnWjxPwrVwAygTzWFX1H53x0G2zj-kNDuaOQysWaITmWK398YewZWFA/exec";

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [slides.length]);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const postData = new FormData();
    postData.append("name", formData.name);
    postData.append("email", formData.email);
    postData.append("phone", formData.phone);
    postData.append("msg", formData.message);

    fetch(SCRIPT_URL, {
      method: "POST",
      body: postData,
      mode: "no-cors",
    })
      .then(() => {
        setLoading(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          consent: false,
        });
        alert("done");
      })
      .catch(() => {
        setLoading(false);
      });
  };

  return (
    <section className="relative w-full min-h-screen md:h-[110vh] overflow-hidden pt-24 md:pt-0" id="home">

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
              priority={index === 0}
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* FORM WRAPPER */}
      <div className="relative z-10 flex justify-center md:justify-end items-center mt-15 h-screen px-4 md:px-10">

        {/* GLASS FORM */}
        <div
          className="
            bg-white/30 backdrop-blur-xl
            shadow-2xl rounded-2xl
            px-6 sm:p-8 py-4
            w-full max-w-sm sm:max-w-md
            border border-white/20
          "
        >
          <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-gray-900 drop-shadow-sm">
            Book a Free Site Visit
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              type="text"
              placeholder="Full Name"
              name="name"
              value={formData.name}
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
              value={formData.email}
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
              name="phone"
              value={formData.phone}
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
              value={formData.message}
              onChange={handleChange}
              rows="1"
              className="
                w-full px-4 py-3 rounded-xl
                bg-white/40 backdrop-blur-md
                placeholder-gray-700
                focus:outline-none focus:ring-2 focus:ring-[#005AA7]
              "
            ></textarea>

            <label className="flex items-start gap-3 text-xs sm:text-sm text-gray-900 leading-tight">
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
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
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
