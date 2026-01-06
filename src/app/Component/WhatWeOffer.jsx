"use client";

import {
  FaMapMarkedAlt,
  FaHome,
  FaTools,
  FaClock,
  FaUniversity,
  FaSmile,
} from "react-icons/fa";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function WhatWeOffer({ openForm }) {
  return (
    <section className="py-20 w-full mt-20 bg-[#f5f8fa]">

      {/* ---------- MOBILE HEADING (TOP) ---------- */}
      <h2 className="block md:hidden text-3xl font-bold text-center text-[#005AA7] mb-10">
        What We Offer
      </h2>

      {/* ---------- ROW 1 (Desktop unchanged, Mobile stacked) ---------- */}
      <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-14 mb-16 md:h-72">

        {/* Card 1 */}
        <div className="w-full md:w-72 p-8 rounded-lg shadow-xl h-fit text-[#005AA7]
                        md:self-end transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 bg-white">
          <FaMapMarkedAlt size={32} className="mb-4 transition-transform duration-300 hover:scale-125" />
          <h3 className="font-semibold text-xl mb-2">Prime Locations</h3>
          <p className="text-base">
            Safe, well-connected areas for long-term value.
          </p>
        </div>

        {/* Card 2 */}
        <div className="w-full md:w-72 p-8 rounded-lg shadow h-fit text-white bg-[#005AA7]
                        transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
          <FaHome size={32} className="mb-4 transition-transform duration-300 hover:scale-125" />
          <h3 className="font-semibold text-xl mb-2">Affordable Homes</h3>
          <p className="text-base">
            Budget-friendly options with all essentials.
          </p>
        </div>

        {/* Card 3 */}
        <div className="w-full md:w-72 p-8 rounded-lg shadow-xl h-fit text-[#005AA7]
                        md:self-end transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 bg-white">
          <FaTools size={32} className="mb-4 transition-transform duration-300 hover:scale-125" />
          <h3 className="font-semibold text-xl mb-2">Quality You Can See</h3>
          <p className="text-base">
            Durable materials and clean workmanship.
          </p>
        </div>
      </div>

      {/* ---------- DESKTOP HEADING (UNCHANGED POSITION) ---------- */}
      <div className="hidden md:block">
        <h2 className="text-5xl font-bold text-center text-[#005AA7] mb-10 -mt-10">
          What We Offer
        </h2>
      </div>

      {/* ---------- ROW 3 (Desktop unchanged, Mobile stacked) ---------- */}
      <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-14 md:h-72">

        {/* Card 4 */}
        <div className="w-full md:w-72 p-8 rounded-lg shadow-xl text-[#005AA7] h-fit
                        transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 bg-white">
          <FaClock size={32} className="mb-4 transition-transform duration-300 hover:scale-125" />
          <h3 className="font-semibold text-xl mb-2">Timely Delivery</h3>
          <p className="text-base">
            We hand over projects on time, every time.
          </p>
        </div>

        {/* Card 5 */}
        <div className="w-full md:w-72 p-8 rounded-lg shadow md:self-end bg-[#005AA7] text-white h-fit
                        transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
          <FaUniversity size={32} className="mb-4 transition-transform duration-300 hover:scale-125" />
          <h3 className="font-semibold text-xl mb-2">Loan Assistance</h3>
          <p className="text-base">
            Guidance for smooth home loan approval.
          </p>
        </div>

        {/* Card 6 */}
        <div className="w-full md:w-72 p-8 rounded-lg shadow-xl text-[#005AA7] h-fit
                        transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 bg-white">
          <FaSmile size={32} className="mb-4 transition-transform duration-300 hover:scale-125" />
          <h3 className="font-semibold text-xl mb-2">Smooth Experience</h3>
          <p className="text-base">
            Clear communication and zero hidden charges.
          </p>
        </div>
      </div>

      {/* ---------- CTA BUTTON (BOTTOM ON MOBILE & DESKTOP) ---------- */}
      <div className="w-full flex justify-center mt-14">
        <button
          onClick={openForm}
          className="
            flex items-center gap-3
            bg-white
            text-[#005AA7]
            px-8 py-4
            rounded-lg
            text-lg
            font-semibold
            shadow-md
            border-2 border-[#005AA7]
            hover:bg-[#005AA7]
            hover:text-white
            hover:shadow-lg
            transition
            cursor-pointer
          "
        >
          Explore Our Homes
          <ArrowForwardIcon sx={{ fontSize: 22 }} />
        </button>
      </div>

    </section>
  );
}
