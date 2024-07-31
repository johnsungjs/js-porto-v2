import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [hamburger, setHamburger] = useState(false);

  const headerRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    window.onscroll = () => {
      const fixedNav = headerRef.current!.offsetTop;

      if (window.scrollY > fixedNav) {
        headerRef.current!.classList.add("navbar-fixed");
      } else {
        headerRef.current!.classList.remove("navbar-fixed");
      }
    };
  }, []);

  return (
    <>
      <div
        ref={headerRef}
        className="bg-transparent absolute top-0 left-0 w-full flex items-center z-10"
      >
        <div className="container">
          <div className="flex items-center justify-between relative">
            <div className="px-4">
              <a
                href="#home"
                className="font-bold text-lg text-primary block py-6"
              >
                John Sung
              </a>
            </div>
            <div className="flex items-center px-4">
              {/* hamburger */}
              <button
                id="hamburger"
                name="hamburger"
                type="button"
                className={`${
                  hamburger ? "hamburger-active" : ""
                } block absolute right-4 lg:hidden`}
                onClick={() => setHamburger(!hamburger)}
              >
                <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
                <span className="hamburger-line transition duration-300 ease-in-out"></span>
                <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
              </button>
              {/* nav */}
              <nav
                id="nav-menu"
                className={`${
                  hamburger ? "" : "hidden"
                } absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none`}
              >
                <ul className="block lg:flex">
                  <li className="group">
                    <a
                      href="#home"
                      className="text-base text-dark py-2 mx-8 flex group-hover:text-primary"
                    >
                      Beranda
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#about"
                      className="text-base text-dark py-2 mx-8 flex group-hover:text-primary"
                    >
                      Tentang Saya
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#portfolio"
                      className="text-base text-dark py-2 mx-8 flex group-hover:text-primary"
                    >
                      Portfolio
                    </a>
                  </li>
                  {/* <li className="group">
                    <a href="#clients" className="text-base text-dark py-2 mx-8 flex group-hover:text-primary">Clients</a>
                  </li> */}
                  <li className="group">
                    <a
                      href="#blog"
                      className="text-base text-dark py-2 mx-8 flex group-hover:text-primary"
                    >
                      Blog
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#contact"
                      className="text-base text-dark py-2 mx-8 flex group-hover:text-primary"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
