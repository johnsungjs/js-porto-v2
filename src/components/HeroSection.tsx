export default function HeroSection() {
  return (
    <>
      {/* HERO SECTION START */}
      <section id="home" className="pt-36 bg-bgColor">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full self-center px-4 lg:w-1/2">
              <h1 className="text-base font-semibold text-textColor md:text-xl">
                Halo Semua, saya{" "}
                <span className="block font-bold text-textColor text-4xl mt-1 lg:text-5xl">
                  John Sung
                </span>
              </h1>
              <h2 className="font-medium text-primary text-lg mb-5 lg:text-2xl">
                Web & <span className="text-dark">Mobile Developer</span>{" "}
              </h2>
              <p className="font-medium text-textColor mb-10 leading-relaxed">
                Belajar web programming itu mudah kan?{" "}
                <span className="text-dark font-bold">ngga</span>
              </p>
              <a
                href="https://wa.me/+6281211899299"
                className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out"
              >
                Hubungi Saya
              </a>
            </div>
            <div className="w-full self-end px-4 lg:w-1/2">
              <div className="relative mt-10 lg:mt-9 lg:right-0">
                <img
                  src={"/images/burungpretBgRemove.png"}
                  alt="burung"
                  className="max-w-full mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* HERO SECTION END */}
    </>
  );
}
