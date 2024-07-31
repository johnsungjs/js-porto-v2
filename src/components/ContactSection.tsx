export default function ContactSection() {
  return (
    <>
      {/* CONTANCT SECTION START */}
      <section id="contact" className="pt-36 pb-32">
        <div className="container">
          <div className="w-full px-4">
            <div className="max-w-xl mx-auto text-center mb-16">
              <h4 className="font-semibold text-lg text-primary mb-2">
                Contact
              </h4>
              <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl">
                Hubungi Saya
              </h2>
              <p className="font-medium text-base text-primary md:text-lg">
                auctor neque vitae tempus quam pellentesque nec nam aliquam sem
                et tortor consequat id porta nibh aliquam sem et tortor
                consequat id porta nibh
              </p>
            </div>
          </div>
          <form>
            <div className="w-full lg:w-2/3 mx-auto">
              <div className="w-full px-4 mb-8">
                <label
                  htmlFor="name"
                  className="text-base font-bold text-primary"
                >
                  Nama
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-slate-300 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
                />
              </div>
              <div className="w-full px-4 mb-8">
                <label
                  htmlFor="email"
                  className="text-base font-bold text-primary"
                >
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  className="w-full bg-slate-300 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
                />
              </div>
              <div className="w-full px-4 mb-8">
                <label
                  htmlFor="message"
                  className="text-base font-bold text-primary"
                >
                  Pesan
                </label>
                <textarea
                  id="message"
                  className="w-full h-32 bg-slate-300 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
                ></textarea>
              </div>
              <div className="w-full px-4">
                <a
                  className="w-full block text-center text-base font-semibold text-white bg-primary py-3 rounded-full hover:opacity-80 hover:shadow-lg transition duration-500"
                  href="https://wa.me/+6281211899299"
                >
                  Hubungi Saya
                </a>
              </div>
            </div>
          </form>
        </div>
      </section>
      {/* CONTANCT SECTION END */}
    </>
  );
}
