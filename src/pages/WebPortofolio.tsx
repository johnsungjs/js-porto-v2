import { useState } from "react";
import Navbar from "../components/Navbar";
import BigModal from "../components/BigModal";
import HeroSection from "../components/HeroSection";
import PortofolioSection from "../components/PortofolioSection";
import ClientSection from "../components/ClientSection";
import FooterSection from "../components/FooterSection";
import ContactSection from "../components/ContactSection";

export default function WebPortofolio() {
  const [showModal, setShowModal] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any

  console.log(showModal);

  return (
    <>
      {/* HEADER START */}
      <Navbar />
      {/* HEADER END */}
      <HeroSection />

      <PortofolioSection />

      <ClientSection />

      <ContactSection />

      <FooterSection />

      {/* MODAL SECTION START */}
      <BigModal
        title="hardcode title"
        body="hardcode body"
        isVisible={showModal}
        setIsVisible={setShowModal}
      />
      {/* MODAL SECTION END */}
    </>
  );
}
