"use client";
import Image from "next/image";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
  LocationOn,
  Call,
  Email,
} from "@mui/icons-material";

export default function Footer() {
  return (
    <footer className="text-grey-500">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Company Info */}
        <div>
        <Image
            src="/logo1.png"   // replace with your actual logo path
            alt="Capcloud Logo"
            width={130}
            height={60}
            className="mb-4"
          />
          <p className="text-md font-semibold leading-relaxed opacity-90 text-[#005AA7]">
            Capcloud is a modern real estate company offering thoughtfully
            designed flats in prime locations. We focus on comfort, quality,
            and long term value.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#005AA7]">Quick Links</h3>
          <ul className="space-y-2 text-sm opacity-90">
            <li><Link href="#">Home</Link></li>
            <li><Link href="#">About Us</Link></li>
            <li><Link href="#">Projects</Link></li>
            <li><Link href="#">Contact</Link></li>
            <li><Link href="#">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Properties */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#005AA7]">Our Properties</h3>
          <ul className="space-y-2 text-sm opacity-90">
            <li>2 & 3 BHK Flats</li>
            <li>Luxury Apartments</li>
            <li>Independent Floors</li>
            <li>Ready to Move Homes</li>
            <li>New Launch Projects</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#005AA7]">Contact Us</h3>

          <div className="flex items-start gap-3 mb-3 text-sm opacity-90">
            <LocationOn fontSize="small" />
            <span>D-56, Second Floor <br /> Chattarpur Enclave <br />Delhi, 110074</span>
          </div>

          <div className="flex items-center gap-3 mb-3 text-sm opacity-90">
            <Call fontSize="small" />
            <span>+91 80147 00000</span>
          </div>

          <div className="flex items-center gap-3 mb-5 text-sm opacity-90">
            <Email fontSize="small" />
            <span>info@capcloud.in</span>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
  <a href="#" target="_blank" className="hover:opacity-70">
    <Facebook sx={{ color: "#005AA7", fontSize: 28 }} />
  </a>

  <a href="https://www.instagram.com/capclouddevelopers?igsh=MWFjZXVlcHo2d2FyMQ==" target="_blank" className="hover:opacity-70">
    <Instagram sx={{ color: "#005AA7", fontSize: 28 }} />
  </a>

  <a href="#" target="_blank" className="hover:opacity-70">
    <LinkedIn sx={{ color: "#005AA7", fontSize: 28 }} />
  </a>

  <a href="#" target="_blank" className="hover:opacity-70">
    <Twitter sx={{ color: "#005AA7", fontSize: 28 }} />
  </a>
</div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 text-center py-4 text-sm opacity-80">
        © {new Date().getFullYear()} Capcloud. All rights reserved.
      </div>
    </footer>
  );
}
