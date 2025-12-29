"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { LocationOn } from "@mui/icons-material";
import CallIcon from "@mui/icons-material/Call";
import CampaignIcon from "@mui/icons-material/Campaign";
import ApartmentIcon from "@mui/icons-material/Apartment";
import BedIcon from "@mui/icons-material/Bed";
import CropSquareIcon from "@mui/icons-material/CropSquare";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import LandscapeIcon from "@mui/icons-material/Landscape";

const properties = [
  {
    title: "Krishna Suites",
    location: "Chattarpur Enclave, South Delhi",
    image: "/herobg.jpg",
    cars: "Residential • 4 BHK",
    price: "₹1.5 Cr",
    description:
      "Krishna Suites is a spacious 4 BHK home in Chattarpur Enclave. It offers ample space, natural light, and a comfortable living experience in a prime South Delhi location.",
      area: "175 Sq Yards",
      type: "4 BHK"
  },
  {
    title: "MG-8 ",
    location: "Chattarpur–Maidangarhi Road, South Delhi",
    image: "/herobg1.jpg",
    cars: "Residential • 3 BHK",
    price: "₹85 Lakh",
    description:
      "MG-8 Floors offers a well-planned 3 BHK home with strong road connectivity. A practical choice for families looking to settle in South Delhi.",
      area: "125 Sq Yards",
      type: "2, 3 BHK"
  },
  {
    title: "Breeze Homes",
    location: "Chattarpur Enclave, South Delhi",
    image: "/herobg2.jpg",
    cars: "Residential • 2 & 3 BHK",
    price: "₹75 Lakh",
    description:
      "Breeze Homes provides modern 2 BHK and 3 BHK options in a peaceful part of Chattarpur Enclave, ideal for comfortable everyday living.",
      area: "125 Sq Yards",
      type: "2, 3 BHK"
  },
];

export default function FeaturedPropertySlider({ openForm }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % properties.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const current = properties[active];

  return (
    <section className="w-full py-20 px-4">
      {/* Heading */}
      <div className="w-full flex flex-col items-center mb-12">
        <span className="px-4 py-1 rounded-full text-sm font-medium bg-[#005AA7]/20 text-[#005AA7]">
          Ongoing Project
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mt-4 text-center">
          Current Premium Developments
        </h2>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-16">

        {/* LEFT — IMAGE SLIDER */}
        <div>
          <div className="relative w-full h-[420px] rounded-2xl overflow-hidden">
            <Image
              src={current.image}
              alt={current.title}
              fill
              className="object-cover"
              priority
            />

            {/* <div className="absolute bottom-4 left-4 bg-white px-5 py-3 rounded-lg">
              <p className="text-sm text-gray-500">{current.location}</p>
              <h4 className="font-semibold text-lg">{current.title}</h4>
              <p className="text-sm text-gray-600">{current.cars}</p>
            </div> */}
          </div>

          {/* Pagination */}
          <div className="flex justify-center gap-3 mt-4">
            {properties.map((_, i) => (
              <span
                key={i}
                className={`h-2 w-2 rounded-full ${
                  i === active ? "bg-[#005AA7]" : "bg-gray-300"
                }`}
              />
            ))}
          </div>

          {/* Thumbnails */}
          <div className="flex gap-4 mt-6">
            {properties.map((item, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`relative w-24 h-16 rounded-lg overflow-hidden border-2 ${
                  active === i ? "border-[#005AA7]" : "border-transparent"
                }`}
              >
                <Image src={item.image} alt={item.title} fill className="object-cover" />
                {active === i && (
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-[#005AA7]" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT — CONTENT */}
        <div>
          {/* Tags */}
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 text-sm rounded-full bg-[#005AA7] text-white font-medium">
              For Sale
            </span>
            <span className="ml-auto text-sm text-gray-500">Build 2031</span>
          </div>

          <h3 className="text-3xl font-bold leading-tight mb-3">
            {current.title}
          </h3>

          <div className="flex items-center gap-2 text-gray-600 mb-8">
            <LocationOn fontSize="small" className="text-[#005AA7]" />
            {current.location}
          </div>

          {/* Info Cards */}
          <div className=" w-1/3 flex flex-col gap-4 mb-8 relative right-[30%]">
            <InfoCard icon={<ApartmentIcon />} label="Home" value={current.type} className=""/>
            <InfoCard icon={<CropSquareIcon />} label="Area" value={current.area} />
            
          </div>

          <p className="text-gray-600 leading-relaxed mb-8">
            {current.description}
          </p>

          {/* CTA */}
          <div className="flex gap-4 flex-wrap">
            <button
              onClick={openForm}
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-[#005AA7] text-white font-medium hover:bg-[#004b8a]"
            >
              <CampaignIcon fontSize="small" />
              Enquire Now
            </button>

            <button className="flex items-center gap-2 px-6 py-3 rounded-lg border border-[#005AA7] text-[#005AA7] font-medium hover:bg-[#005AA7]/10">
              <CallIcon fontSize="small" />
              Get Call Back
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({ icon, label, value }) {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm flex items-center gap-3">
      <span className="text-[#005AA7]">{icon}</span>
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <p className="font-semibold">{value}</p>
      </div>
    </div>
  );
}
