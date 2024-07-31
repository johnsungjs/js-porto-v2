export default function ClientSection() {
  return (
    <>
      {/* CLIENT SECTION START */}
      <section id="clients" className="pt-36 pb-32 bg-slate-700">
        <div className="container">
          <div className="w-full px-4">
            <div className="mx-auto text-center mb-16">
              <h4 className="font-semibold text-lg text-primary mb-2">
                Clients
              </h4>
              <h2 className="font-bold text-white text-3xl mb-4 sm:text-4xl lg:text-5xl">
                Yang Pernah Bekerjasama
              </h2>
              <p className="font-medium text-base text-secondary md:text-lg">
                auctor neque vitae tempus quam pellentesque nec nam aliquam sem
                et tortor consequat id porta{" "}
              </p>
            </div>
          </div>
          <div className="w-full px-4">
            <div className="flex flex-wrap items-center justify-center">
              <a
                href="#home"
                className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8"
              >
                <img src={"/images/clients/apple.svg"} alt="mekdi" />
              </a>
              <a
                href="#home"
                className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8"
              >
                <img src={"/images/clients/apple.svg"} alt="google" />
              </a>
              <a
                href="#home"
                className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8"
              >
                <img src={"/images/clients/apple.svg"} alt="apple" />
              </a>
              <a
                href="#home"
                className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8"
              >
                <img src={"/images/clients/apple.svg"} alt="bmw" />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* CLIENT SECTION END */}
    </>
  );
}
