"use client"
import Link from "next/link";

export default function ThankYouPage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/img5.webp')" }}
    >
      {/* Black overlay */}
      <div className="min-h-screen bg-black/60 flex items-center justify-center px-4">
        <div className="text-center max-w-md w-full text-white">
          <h1 className="text-3xl sm:text-4xl font-semibold mb-3">
            Thank You for Visiting
          </h1>

          <p className="text-base sm:text-lg opacity-90 mb-6">
            Our team will connect with you soon
          </p>

          <Link href="/">
            <button className="bg-[#005AA7] hover:opacity-90 transition px-6 py-3 rounded-md text-base font-medium">
              Return to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
