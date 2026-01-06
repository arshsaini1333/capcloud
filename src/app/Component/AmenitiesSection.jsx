"use client";

import Image from "next/image";

export default function AmenitiesSection({openForm}) {
  const brand = "#005AA7";

  const amenities = [
    { image: "/a1.avif", label: "Branded Elevators" },
    { image: "/a2.avif", label: "CCTV Cameras" },
    { image: "/a3.jpeg", label: "Wardrobes" },
    { image: "/a4.jpg", label: "Modular Kitchen" },
    { image: "/a5.webp", label: "Dedicated Stilt Parking" },
    { image: "/a6.jpg", label: "Smart Digital Locks" },
    { image: "/a7.jpg", label: "Terrace Garden" },
    { image: "/a8.jpg", label: "Branded Bathroom Fittings" },
    { image: "/a9.jpg", label: "24x7 Water Supply" },
    { image: "/a10.jpeg", label: "Electricity Meter" },
  ];

  return (
    <section
      className="w-full py-20 px-6 md:px-16 bg-[#f5f8fa]"
      id="amenities"
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Tag */}
        <span className="inline-block mb-4 px-4 py-1 rounded-full text-sm font-medium bg-[#005AA7]/20 text-[#005AA7]">
          Our Amenities
        </span>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Building Amenities
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8">
          {amenities.map((item, index) => (
            <div
              key={index}
              className="
                bg-white rounded-2xl shadow-md overflow-hidden
                group cursor-pointer
                hover:shadow-lg transition
              "
            >
              {/* Image */}
              <div className="relative h-36 w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.label}
                  fill
                  className="
                    object-cover
                    transition-transform duration-500
                    group-hover:scale-110
                  "
                />
              </div>

              {/* Title */}
              <div className="py-4 px-3">
                <p
                  className="text-sm font-semibold text-center"
                  style={{ color: brand }}
                >
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <button
          className="
            mt-12 px-10 py-3 rounded-lg text-white text-lg font-medium
            shadow-md hover:shadow-lg transition cursor-pointer
          "
          style={{ backgroundColor: brand }}
          onClick={openForm}
        >
          Explore More Features
        </button>
      </div>
    </section>
  );
}
