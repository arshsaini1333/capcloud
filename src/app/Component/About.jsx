import Image from "next/image";

export default function AboutSection({ openForm }) {
  return (
    <section
      className="w-full py-16 sm:py-20 px-4 sm:px-6 md:px-16 bg-white"
      id="about"
    >
      <div
        className="
          max-w-7xl mx-auto
          grid grid-cols-1 md:grid-cols-[1fr_1.4fr]
          gap-10 md:gap-16
          items-center
        "
      >
        {/* LEFT IMAGE */}
        <div className="rounded-3xl overflow-hidden shadow-xl w-full">
        <div className="relative w-full h-[280px] sm:h-[360px] md:h-[440px]">
  <Image
    src="/images/img10.webp"
    alt="About Capcloud"
    fill
    className="object-cover"
  />
</div>

        </div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col justify-center">

          {/* Tag */}
          <span className="inline-block mb-4 px-4 py-1 rounded-full text-sm font-medium bg-[#005AA7]/20 text-[#005AA7] w-fit">
            About Us
          </span>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">
            Building Homes With Trust & Quality
          </h2>

          {/* Paragraph */}
          <div className="text-gray-700 leading-relaxed text-base sm:text-lg space-y-5 mb-10">
            Discover luxury 2BHK, 3BHK & 4BHK low-rise builder floors designed for
            families who want space, comfort and premium living at an affordable
            price.
            <br />
            <br />
            Capcloud Developers brings you modern homes with beautiful interiors,
            a peaceful neighbourhood and strong connectivity to all major parts
            of Delhi & Gurgaon.
          </div>

          {/* CTA BUTTON */}
          <button
            className="
              px-8 sm:px-10 py-3
              rounded-lg text-white
              text-base sm:text-lg
              font-semibold
              shadow-md hover:shadow-lg transition
              w-fit
            "
            style={{ backgroundColor: "#005AA7" }}
            onClick={openForm}
          >
            Explore Our Projects
          </button>
        </div>
      </div>
    </section>
  );
}
