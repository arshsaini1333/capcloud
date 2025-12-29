"use client";

import {
  DirectionsSubway,
  LocationCity,
  ShoppingBag,
  Apartment,
  FlightTakeoff,
} from "@mui/icons-material";

export default function LocationBenefits() {
  const benefits = [
    {
      icon: <DirectionsSubway sx={{ color: "#4CAF50", fontSize: 28 }} />,
      text: "Chhattarpur Metro – 5 mins",
    },
    {
      icon: <DirectionsSubway sx={{ color: "#FF9800", fontSize: 28 }} />,
      text: "Qutub Minar Metro – 10 mins",
    },
    {
      icon: <ShoppingBag sx={{ color: "#9C27B0", fontSize: 28 }} />,
      text: "Saket Malls – 10 mins",
    },
    {
      icon: <Apartment sx={{ color: "#03A9F4", fontSize: 28 }} />,
      text: "Vasant Kunj – 15 mins",
    },
    {
      icon: <LocationCity sx={{ color: "#E91E63", fontSize: 28 }} />,
      text: "Gurgaon Border – 15 mins",
    },
    {
      icon: <FlightTakeoff sx={{ color: "#795548", fontSize: 28 }} />,
      text: "Airport – 25 mins",
    },
  ];

  return (
    <section className="w-full py-20 px-4 bg-[#f8fbff]">
      <div className="max-w-7xl mx-auto">
        {/* Sub Heading */}
        <div className="flex justify-center mb-4">
          <span className="px-6 py-2 rounded-full text-sm font-medium text-[#005AA7] bg-[#e6f0fb]">
            Location Benefits
          </span>
        </div>

        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-14">
        Perfectly Positioned for Everyday Convenience
        </h2>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-15 items-center">
          {/* Left */}
          <div className="space-y-5 w-3/4 ">
            {benefits.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-5 rounded-lg bg-white shadow-sm border  transition hover:shadow-xl"
              >
                <div className="shrink-0">{item.icon}</div>
                <p className="text-lg text-gray-800">{item.text}</p>
              </div>
            ))}
          </div>

          {/* Right */}
          <div className="w-full h-full rounded-xl overflow-hidden shadow">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28051.644301663193!2d77.1469303987544!3d28.495939161424804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1e41ca7de7c1%3A0x921a88ef7354b930!2sChhatarpur%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1765727217127!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
