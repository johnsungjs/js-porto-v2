
export default function PortofolioSection() {
  return (
    <>
      {/* PORTFOLIO SECTION START */}
      <section id="portfolio" className="pt-36 pb-16 bg-slate-200">
        <div className="container">
          <div className="w-full px-4">
            <div className="max-w-xl mx-auto text-center mb-16">
              <h4 className="font-semibold text-lg text-primary mb-2">
                Portfolio
              </h4>
              <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl">
                Project Terbaru
              </h2>
              <p className="font-medium text-base text-primary md:text-lg">
                auctor neque vitae tempus quam pellentesque nec nam aliquam sem
                et tortor consequat id porta nibh aliquam sem et tortor
                consequat id porta nibh
              </p>
            </div>
          </div>
          <div className="mx-auto w-full px-4 flex flex-wrap justify-center xl:w-10/12">
            <div className="mb-12 p-4 md:w-1/2">
              <div className="rounded-md shadow-md overflow-hidden">
                <img src={"/images/portfolio/1.jpeg"} alt="cashier app" />
              </div>
              <h3 className="font-semibold text-xl text-dark mt-5 mb-3">
                Cashier App
              </h3>
              <p className="font-medium text-base text-primary">
                auctor neque vitae tempus quam pellentesque nec nam aliquam sem
                et tortor consequat id porta nibh aliquam sem et tortor
                consequat id porta nibh
              </p>
            </div>
            <div className="mb-12 p-4 md:w-1/2">
              <div className="rounded-md shadow-md overflow-hidden">
                <img src={"/images/portofolio/1.jpeg"} alt="cashier app" />
              </div>
              <h3 className="font-semibold text-xl text-dark mt-5 mb-3">
                Cashier App
              </h3>
              <p className="font-medium text-base text-primary">
                auctor neque vitae tempus quam pellentesque nec nam aliquam sem
                et tortor consequat id porta nibh aliquam sem et tortor
                consequat id porta nibh
              </p>
            </div>
            <div className="mb-12 p-4 md:w-1/2">
              <div className="rounded-md shadow-md overflow-hidden">
                <img src={"/images/portofolio/1.jpeg"} alt="cashier app" />
              </div>
              <h3 className="font-semibold text-xl text-dark mt-5 mb-3">
                Cashier App
              </h3>
              <p className="font-medium text-base text-primary">
                auctor neque vitae tempus quam pellentesque nec nam aliquam sem
                et tortor consequat id porta nibh aliquam sem et tortor
                consequat id porta nibh
              </p>
            </div>
            <div className="mb-12 p-4 md:w-1/2">
              <div className="rounded-md shadow-md overflow-hidden">
                <img src={"/images/portofolio/1.jpeg"} alt="cashier app" />
              </div>
              <h3 className="font-semibold text-xl text-dark mt-5 mb-3">
                Cashier App
              </h3>
              <p className="font-medium text-base text-primary">
                auctor neque vitae tempus quam pellentesque nec nam aliquam sem
                et tortor consequat id porta nibh aliquam sem et tortor
                consequat id porta nibh
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* PORTFOLIO SECTION END */}
    </>
  );
}
