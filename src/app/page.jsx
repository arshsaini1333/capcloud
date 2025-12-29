
"use client"
import Image from "next/image";
import Navbar from "./Component/Navbar";
import SiteVisitHero from "./Component/Hero";
import AboutSection from "./Component/About";
import AmenitiesSection from "./Component/AmenitiesSection";
import CompletedProjects from "./Component/CompletedProject";
import WhatWeOffer from "./Component/WhatWeOffer";
import Footer from "./Component/Footer";
import EnquiryForm from "./Component/ContactForm";
import LocationBenefits from "./Component/locationBenefits";
import ContactUsSection from "./Component/ContactUsSection";
import FeaturedPropertiesSlider from "./Component/OngoingProject";
import { useEffect } from "react";
import { useState } from "react";
export default function Home() {

  const [showForm, setShowForm] = useState(false);

  // functions you will pass to any component
  const openForm = () => setShowForm(true);
  const closeForm = () => setShowForm(false);

   // Auto-open popup after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowForm(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
    <Navbar />
    <SiteVisitHero/>
    <AboutSection openForm={openForm}/>
    <WhatWeOffer openForm={openForm}/>
    <FeaturedPropertiesSlider openForm={openForm}/>
    <AmenitiesSection openForm={openForm}/>
    <CompletedProjects/>
    
    
    <LocationBenefits/>
    
    <ContactUsSection openForm={openForm}/>
    <Footer/>
    <EnquiryForm isOpen={showForm} closeForm={closeForm} />
    </>
  );
}
