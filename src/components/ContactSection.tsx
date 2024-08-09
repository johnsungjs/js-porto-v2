import { forwardRef, useMemo, useState } from "react";

interface InputUser {
  name: string;
  message: string;
}

export default forwardRef<HTMLDivElement>(function ContactSection(_props, ref) {
  const [inputUser, setInputUser] = useState<InputUser>({
    name: "",
    message: "",
  });

  const whatsAppUriWithMessage = useMemo(
    () =>
      encodeURI(
        `https://wa.me/+6281211899299?text=Hello I'm ${inputUser.name}, i've just seen your profile though your portfolio page, \n\n ${inputUser.message}`
      ),
    [inputUser]
  );

  return (
    <>
      {/* CONTANCT SECTION START */}
      <section ref={ref} id="contact" className="pt-36 pb-32">
        <div className="container">
          <div className="w-full px-4">
            <div className="max-w-xl mx-auto text-center mb-16">
              <h4 className="font-semibold text-lg text-primary mb-2">
                Contact
              </h4>
              <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl">
                Contact Me
              </h2>
              <p className="font-medium text-base text-primary md:text-lg">
                Feel Free to Contact Me Via Whatsapp To My Personal Number
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
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-slate-300 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
                  onBlur={(e) =>
                    setInputUser((prev: InputUser) => {
                      return { ...prev, name: e.target.value };
                    })
                  }
                />
              </div>

              <div className="w-full px-4 mb-8">
                <label
                  htmlFor="message"
                  className="text-base font-bold text-primary"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full h-32 bg-slate-300 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
                  onBlur={(e) =>
                    setInputUser((prev: InputUser) => {
                      return { ...prev, message: e.target.value };
                    })
                  }
                />
              </div>
              <div className="w-full px-4">
                <a
                  target="blank"
                  href={whatsAppUriWithMessage}
                  className="w-full block text-center text-base font-semibold text-white bg-primary py-3 rounded-full hover:opacity-80 hover:shadow-lg transition duration-500"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </form>
        </div>
      </section>
      {/* CONTANCT SECTION END */}
    </>
  );
});
