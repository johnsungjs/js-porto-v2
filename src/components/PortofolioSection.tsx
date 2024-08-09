import { forwardRef } from "react";

export default forwardRef<HTMLDivElement>(function PortofolioSection(
  _props,
  ref
) {
  return (
    <>
      {/* PORTFOLIO SECTION START */}
      <section ref={ref} id="portfolio" className="pt-36 pb-16 bg-slate-200">
        <div className="container">
          <div className="w-full px-4">
            <div className="max-w-xl mx-auto text-center mb-16">
              <h4 className="font-semibold text-lg text-primary mb-2">
                Portfolio
              </h4>
              <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl">
                Latest Personal Projects
              </h2>
              <p className="font-medium text-base text-primary md:text-lg">
                My Latest Project With My Partner{" "}
                <a
                  className="underline hover:font-bold"
                  href="https://www.linkedin.com/in/johnsungjs/in/alvin-fernando-86a4301b8/"
                  target="blank"
                >
                  Alvin Fernando
                </a>{" "}
                that we made during our freetime to experiencing various
                technologies, from website based application, mobile based
                Application, and Progressive Web Application
              </p>
            </div>
          </div>
          <div className="mx-auto w-full px-4 flex flex-wrap justify-center xl:w-10/12">
            <div className="mb-12 p-4 md:w-1/2">
              <div className="rounded-md overflow-hidden">
                <img
                  className="h-[600px] mx-auto"
                  src={"/images/portfolio/delisome.jpeg"}
                  alt="cashier app"
                />
              </div>
              <h3 className="font-semibold text-2xl text-primary mt-5 mb-3 text-center hover:underline cursor-pointer">
                <a href="https://www.delisome.my.id/" target="blank">
                  Delisome Marketplace
                </a>
              </h3>
              <p className="font-medium text-base  text-center">
                An website based online store service that provided digital
                products mobile game top ups, digital services vouchers, and
                many more. Made with{" "}
                <span className="text-primary">ReactJS</span> and{" "}
                <span className="text-primary">Java Spring Boot</span>
              </p>
            </div>
            <div className="mb-12 p-4 md:w-1/2">
              <div className="rounded-md overflow-hidden">
                <img
                  className="h-[600px] mx-auto"
                  src={"/images/portfolio/foodapp.jpeg"}
                  alt="cashier app"
                />
              </div>
              <h3 className="font-semibold text-2xl text-primary mt-5 mb-3 text-center">
                Food App
              </h3>
              <p className="font-medium text-base text-black text-center">
                A food providing mobile application utilizing a unique blend of{" "}
                <span className="text-primary">Flutter</span> and{" "}
                <span className="text-primary">Java Spring Boot</span>{" "}
                technologies. The cherry on top? It flawlessly operates on both
                iOS and Android devices.
              </p>
            </div>
            <div className="mb-12 p-4 md:w-1/2">
              <div className="rounded-md shadow-md overflow-hidden">
                <img
                  className=""
                  src={"/images/portfolio/1.jpeg"}
                  alt="cashier app"
                />
              </div>
              <h3 className="font-semibold text-2xl text-primary mt-5 mb-3 text-center">
                Cashier App
              </h3>
              <p className="font-medium text-base text-black text-center">
                A web based application that operates without requiring an
                internet connection. It features a user-friendly interface for
                easy menu navigation. The app is built with{" "}
                <span className="text-primary">Java Spring Boot</span> for the
                backend and <span className="text-primary">ReactJs</span> for
                the frontend, that wrapped into a single page application.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* PORTFOLIO SECTION END */}
    </>
  );
});
