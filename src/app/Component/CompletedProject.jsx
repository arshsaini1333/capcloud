"use client";

import Image from "next/image";
import { MdLocationOn, MdApartment, MdHome } from "react-icons/md";

export default function CompletedProjects() {
  const blue = "#005AA7";

  const completedProjects = [
    {
      title: "C-204 Chattarpur Enclave",
      location: "Chattarpur Enclave",
      size: "500 sq yards",
      bhk: "3 BHK",
      img: "/herobg1.jpg",
    },
    {
      title: "B-63 Chattarpur Enclave",
      location: "Chattarpur Enclave",
      size: "200 sq yards",
      bhk: "4 BHK",
      img: "/herobg.jpg",
    },
    {
      title: "C2/11A Sushant Lok 1 Gurgaon",
      location: "Sushant Lok 1, Gurgaon",
      size: "418 sq yards",
      bhk: "4 BHK",
      img: "/herobg2.jpg",
    },
    {
      title: "A-681/A Sushant Lok 1 Gurgaon",
      location: "Sushant Lok 1, Gurgaon",
      size: "270 sq yards",
      bhk: "4 BHK",
      img: "/herobg1.jpg",
    },
    {
      title: "C-641 Sushant Lok 1 Gurgaon",
      location: "Sushant Lok 1, Gurgaon",
      size: "215 sq yards",
      bhk: "3 BHK",
      img: "/herobg.jpg",
    },
    {
      title: "963 Sector 43 Gurgaon",
      location: "Sector 43, Gurgaon",
      size: "390 sq yards",
      bhk: "Independent House",
      img: "/herobg2.jpg",
    },
    {
      title: "B-61 Chattarpur Enclave",
      location: "Chattarpur Enclave",
      size: "450 sq yards",
      bhk: "3 BHK",
      img: "/herobg1.jpg",
    },
    {
      title: "C2/22 Sushant Lok 1 Gurgaon",
      location: "Sushant Lok 1, Gurgaon",
      size: "418 sq yards",
      bhk: "4 BHK",
      img: "/herobg2.jpg",
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-10" id="properties">
      <div className="text-center mb-10">
  {/* Sub Heading Pill */}
  <div
    className="inline-block px-5 py-1 rounded-full text-sm font-medium mb-3"
    style={{ backgroundColor: "#C8DBEB", color: "#005AA7" }}
  >
    Completed Projects
  </div>

  {/* Main Heading */}
  <h2
    className="text-3xl md:text-4xl font-semibold"
    style={{ color: "#0D1A2D" }}
  >
    Delivered Luxury Homes
  </h2>
</div>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {completedProjects.map((p, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition p-0 overflow-hidden"
          >
            {/* Image */}
            <div className="relative w-full h-56 overflow-hidden group">
             <Image
             src={p.img}
             alt={p.title}
             fill
             className="object-cover transition-transform duration-500 group-hover:scale-110"
             />

  {/* Completed Tag */}
  <div className="absolute top-3 left-3 bg-[#005AA7]/70 text-white text-sm px-2 py-1 rounded-md font-semibold flex items-center gap-1">
    <MdHome /> Completed
  </div>
</div>

            {/* Content */}
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-1">{p.title}</h3>

              <p className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                <MdLocationOn size={18} color={blue} />
                {p.location}
              </p>

              <div className="flex justify-between text-sm text-gray-700 mt-4">
                <div className="flex flex-col items-center">
                  <MdApartment size={22} color={blue} />
                  <span>{p.bhk}</span>
                </div>

                <div className="flex flex-col items-center">
                  <MdHome size={22} color={blue} />
                  <span>{p.size}</span>
                </div>
              </div>

              <p className="mt-4 text-sm font-semibold" style={{ color: blue }}>
                Delivered Successfully
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
