import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import PortofolioSection from "../components/PortofolioSection";
import ClientSection from "../components/ClientSection";
import FooterSection from "../components/FooterSection";
import ContactSection from "../components/ContactSection";

export default function WebPortofolio() {
  // usestate for modal
  // const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* TODO: CANT HANDLE THE SCROLL ACTION ON OVERFLOW */}
      {/* <div className="flex flex-col w-screen h-screen overflow-x-hidden overflow-y-auto"> */}
      {/* HEADER START */}
      <Navbar />
      {/* HEADER END */}
      <HeroSection />

      <PortofolioSection />

      <ClientSection />

      <ContactSection />

      <FooterSection />

      {/* MODAL USAGE IF USED */}
      {/* <BigModal
          title="hardcode title"
          body="hardcode body"
          isVisible={showModal}
          setIsVisible={setShowModal}
        /> */}
      {/* MODAL SECTION END */}
      {/* </div> */}
    </>
  );
}
