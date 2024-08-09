import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import PortofolioSection from "../components/PortofolioSection";
import ClientSection from "../components/ClientSection";
import FooterSection from "../components/FooterSection";
import ContactSection from "../components/ContactSection";
import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

export default function WebPortofolio() {
  // usestate for modal
  // const [showModal, setShowModal] = useState(false);
  const portofolioRef = useRef<HTMLDivElement[] | null[]>([]);

  const params = useParams();

  useEffect(() => {
    if (params["*"] === null || params["*"] === undefined) return;

    switch (params["*"]) {
      case "home":
        portofolioRef.current[0]?.scrollIntoView({ behavior: "smooth" });
        break;
      case "portofolio":
        portofolioRef.current[1]?.scrollIntoView({ behavior: "smooth" });
        break;
      case "clients":
        portofolioRef.current[2]?.scrollIntoView({ behavior: "smooth" });
        break;
      case "contact":
        portofolioRef.current[3]?.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        portofolioRef.current[0]?.scrollIntoView({ behavior: "smooth" });
        break;
    }
  });

  return (
    <>
      {/* TODO: CANT HANDLE THE SCROLL ACTION ON OVERFLOW */}
      {/* <div className="flex flex-col w-screen h-screen overflow-x-hidden overflow-y-auto"> */}
      {/* HEADER START */}
      <Navbar portofolioRef={portofolioRef} />
      {/* HEADER END */}
      <HeroSection ref={(r) => (portofolioRef.current[0] = r)} />

      <PortofolioSection ref={(r) => (portofolioRef.current[1] = r)} />

      <ClientSection ref={(r) => (portofolioRef.current[2] = r)} />

      <ContactSection ref={(r) => (portofolioRef.current[3] = r)} />

      <FooterSection ref={(r) => (portofolioRef.current[4] = r)} />

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
