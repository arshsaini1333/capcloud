"use client";

import { useState } from "react";
import { Call, WhatsApp, EventAvailable } from "@mui/icons-material";

export default function ContactUsSection({ openForm }) {
  const PHONE_NUMBER = "918014700000";
  const WHATSAPP_NUMBER = "918014700000";

  const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbzlcp9ztREye5ETnWjxPwrVwAygTzWFX1H53x0G2zj-kNDuaOQysWaITmWK398YewZWFA/exec";

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const postData = new FormData();
    postData.append('name', formData.name);
    postData.append('email', formData.email);
    postData.append('phone', formData.phone);
    postData.append('msg', formData.message);
   

    fetch(SCRIPT_URL, {
      method: 'POST',
      body: postData,
      mode: 'no-cors'
    })
      .then(() => {
        
        setLoading(false);
        setFormData({ name: '', email: '', phone: '', message: '' });
        alert("done")
      })
      .catch(() => {
        
        setLoading(false);
      });
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
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="flex items-center gap-3 px-8 py-4 bg-black text-white rounded-lg text-lg font-semibold hover:opacity-90 transition"
              >
                <Call />
                Call Now
              </a>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                className="flex items-center gap-3 px-8 py-4 bg-[#25D366] text-white rounded-lg text-lg font-semibold hover:opacity-90 transition"
              >
                <WhatsApp />
                WhatsApp Now
              </a>

              <button
                onClick={openForm}
                className="flex items-center gap-3 px-8 py-4 bg-[#005AA7] text-white rounded-lg text-lg font-semibold hover:bg-[#004a8a] transition cursor-pointer"
              >
                <EventAvailable />
                Book Site Visit
              </button>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div
            id="contact-form"
            className="flex flex-col justify-center h-full shadow-xl px-10 py-5 rounded-2xl mx-auto bg-white"
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
                disabled={loading}
                className="w-full bg-[#005AA7] text-white py-4 rounded-lg text-lg font-semibold hover:bg-[#004a8a] transition"
              >
                {loading ? "Submitting..." : "Submit Enquiry"}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
