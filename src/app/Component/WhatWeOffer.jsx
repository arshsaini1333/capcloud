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

export default function WhatWeOffer({openForm}) {
  return (
    <section className="py-20 w-full mt-20 bg-[#f5f8fa]">

      {/* ---------- ROW 1 (First 3 Cards) ---------- */}
      <div className="flex justify-center gap-14 mb-16 h-72">

        {/* Card 1 */}
        <div className="w-72 p-8 rounded-lg shadow-xl h-fit text-[#005AA7] self-end 
                        transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 bg-white">
          <FaMapMarkedAlt 
            size={32} 
            className="mb-4 transition-transform duration-300 group-hover:scale-110 hover:scale-125"
          />
          <h3 className="font-semibold text-xl mb-2">Prime Locations</h3>
          <p className="text-base text-[#005AA7]">
            Safe, well-connected areas for long-term value.
          </p>
        </div>

        {/* Card 2 (Blue card) */}
        <div className="w-72 p-8 rounded-lg shadow h-fit text-white bg-[#005AA7]
                        transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
          <FaHome 
            size={32} 
            className="mb-4 transition-transform duration-300 hover:scale-125"
          />
          <h3 className="font-semibold text-xl mb-2">Affordable Homes</h3>
          <p className="text-base text-white">
            Budget-friendly options with all essentials.
          </p>
        </div>

        {/* Card 3 */}
        <div className="w-72 p-8 rounded-lg shadow-xl h-fit text-[#005AA7] self-end 
                        transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 bg-white">
          <FaTools 
            size={32} 
            className="mb-4 transition-transform duration-300 hover:scale-125"
          />
          <h3 className="font-semibold text-xl mb-2">Quality You Can See</h3>
          <p className="text-base">
            Durable materials and clean workmanship.
          </p>
        </div>

      </div>

      {/* ---------- ROW 2 (Heading) ---------- */}
      <div>
      <h2 className="text-5xl font-bold text-center text-[#005AA7] mb-10 -mt-10">
        What We Offer
      </h2>
      <div className="w-full flex justify-center ">
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
          hover:bg-[#005AA7]
          border-2
          border-[#005AA7]
          hover:shadow-lg
          hover:text-white
          transition
          cursor-pointer
        "
      >
        Explore Our Homes
        <ArrowForwardIcon sx={{ fontSize: 22 }} />
      </button>
    </div>
      </div>

      {/* ---------- ROW 3 (Next 3 Cards) ---------- */}
      <div className="flex justify-center gap-14 h-72">

        {/* Card 4 */}
        <div className="w-72 p-8 rounded-lg shadow-xl text-[#005AA7] h-fit
                        transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 bg-white">
          <FaClock 
            size={32} 
            className="mb-4 transition-transform duration-300 hover:scale-125"
          />
          <h3 className="font-semibold text-xl mb-2">Timely Delivery</h3>
          <p className="text-base">
            We hand over projects on time, every time.
          </p>
        </div>

        {/* Card 5 (Blue card) */}
        <div className="w-72 p-8 rounded-lg shadow self-end bg-[#005AA7] text-white h-fit
                        transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
          <FaUniversity 
            size={32} 
            className="mb-4 transition-transform duration-300 hover:scale-125"
          />
          <h3 className="font-semibold text-xl mb-2">Loan Assistance</h3>
          <p className="text-base">
            Guidance for smooth home loan approval.
          </p>
        </div>

        {/* Card 6 */}
        <div className="w-72 p-8 rounded-lg shadow-xl text-[#005AA7] h-fit
                        transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 bg-white">
          <FaSmile 
            size={32} 
            className="mb-4 transition-transform duration-300 hover:scale-125"
          />
          <h3 className="font-semibold text-xl mb-2">Smooth Experience</h3>
          <p className="text-base">
            Clear communication and zero hidden charges.
          </p>
        </div>

      </div>
      
    </section>
  );
}
