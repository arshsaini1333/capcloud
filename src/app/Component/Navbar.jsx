"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaRegHandshake } from "react-icons/fa"; // Add this at top

export default function Navbar({openForm}) {
  const [open, setOpen] = useState(false);

  const brand = "#005AA7";

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-[0_4px_15px_rgba(0,0,0,0.5)]">
      <div className="max-w-7xl mx-auto px-4 py-1 flex justify-between items-center">

        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo1.png"
            alt="CapCloud Developers Logo"
            width={90}   // Increased size
            height={1}
            className="cursor-pointer"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 text-sm tracking-wide font-medium items-center">
          <Link href="/" className="hover:opacity-80" style={{ color: brand }}>HOME</Link>
          <Link href="#about" className="hover:opacity-80" style={{ color: brand }}>ABOUT</Link>
          <Link href="#amenities" className="hover:opacity-80" style={{ color: brand }}>AMENITIES</Link>
          <Link href="#properties" className="hover:opacity-80" style={{ color: brand }}>PROPERTIES</Link>

          {/* CTA Contact Button */}
          <Link
              href="#contact"
              className="px-5 py-2 rounded-md text-white flex items-center gap-2 font-semibold"
              style={{ backgroundColor: brand }}
              >
                  <FaRegHandshake size={18} />
                    Book a Site Visit
            </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl focus:outline-none"
          style={{ color: brand }}
        >
          ☰
        </button>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div
          className="md:hidden fixed top-0 right-0 h-full w-64 bg-white shadow-[ -4px_0_15px_rgba(0,0,0,0.3)] p-5 space-y-6 transition-all"
        >
          {/* Close Button */}
          <button
            onClick={() => setOpen(false)}
            className="text-3xl mb-4 justify-end relative left-48"
            style={{ color: brand }}
          >
            ✕
          </button>

          <div className="flex flex-col gap-4 text-lg font-medium">
            <Link href="/" onClick={() => setOpen(false)} style={{ color: brand }}>HOME</Link>
            <Link href="#about" onClick={() => setOpen(false)} style={{ color: brand }}>ABOUT</Link>
            <Link href="#amenities" onClick={() => setOpen(false)} style={{ color: brand }}>AMENITIES</Link>
            <Link href="#properties" onClick={() => setOpen(false)} style={{ color: brand }}>PROPERTIES</Link>

            {/* Mobile CTA */}
            <Link
              href="#contact"
              className="px-5 py-2 rounded-md text-white flex items-center gap-2 font-semibold"
              style={{ backgroundColor: brand }}
              >
                  <FaRegHandshake size={18} />
                    Book a Site Visit
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
