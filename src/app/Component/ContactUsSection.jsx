"use client";

import { useState } from "react";
import { Call, WhatsApp, EventAvailable } from "@mui/icons-material";

export default function ContactUsSection({openForm}) {
  const PHONE_NUMBER = "919999999999"; // replace
  const WHATSAPP_NUMBER = "919999999999"; // replace

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className="w-full py-24 px-4 bg-[#f5f8fa]" id="contact">
      <div className="max-w-7xl mx-auto">

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-16 items-stretch">

          {/* LEFT SIDE */}
          <div className="flex flex-col justify-center h-full">
            <span className="inline-flex w-fit mb-6 px-4 py-2 rounded-full bg-[#e6f0fb] text-[#005AA7] font-semibold text-sm">
              🏆 Best Final Combo
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mb-5">
              Ready to Own Your Dream Home?
            </h2>

            <p className="text-lg text-gray-600 mb-12 max-w-xl">
              Luxury 2, 3 & 4 BHK Homes in Prime Locations
            </p>

            {/* CTA BUTTONS */}
            <div className="flex flex-wrap gap-5">
              {/* Call Now */}
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="flex items-center gap-3 px-8 py-4 bg-black text-white rounded-lg text-lg font-semibold hover:opacity-90 transition"
              >
                <Call />
                Call Now
              </a>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                className="flex items-center gap-3 px-8 py-4 bg-[#25D366] text-white rounded-lg text-lg font-semibold hover:opacity-90 transition"
              >
                <WhatsApp />
                WhatsApp Now
              </a>

              {/* Book Site Visit */}
              <button
                onClick={openForm}
                className="flex items-center gap-3 px-8 py-4 bg-[#005AA7] text-white rounded-lg text-lg font-semibold hover:bg-[#004a8a] transition cursor-pointer"
              >
                <EventAvailable />
                Book Site Visit
              </button>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div
            id="contact-form"
            className="flex flex-col justify-center h-full shadow-xl px-10 py-5 rounded-2xl mx-auto"
          >
            <h3 className="text-2xl font-bold mb-8 text-[#005AA7]">
              Send Your Query To Our Team
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5 max-w-md">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-4 border rounded-lg outline-none focus:border-[#005AA7]"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-4 border rounded-lg outline-none focus:border-[#005AA7]"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-4 border rounded-lg outline-none focus:border-[#005AA7]"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                rows={2}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-4 border rounded-lg outline-none focus:border-[#005AA7]"
              />

              <button
                type="submit"
                className="w-full bg-[#005AA7] text-white py-4 rounded-lg text-lg font-semibold hover:bg-[#004a8a] transition"
              >
                Submit Enquiry
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
