import { forwardRef } from "react";
import { motion } from "framer-motion";
import { Direction, fadeIn } from "../utils/framerStyle";

export default forwardRef<HTMLDivElement>(function ClientSection(_props, ref) {
  return (
    <>
      {/* CLIENT SECTION START */}
      <section ref={ref} id="clients" className="pt-36 pb-32 bg-slate-700">
        <div className="container">
          <div className="w-full px-4">
            <motion.div
              variants={fadeIn(Direction.UP, 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }} className="mx-auto text-center mb-16">
              <h4 className="font-semibold text-lg text-secondary mb-2">
                Clients
              </h4>
              <h2 className="font-bold text-white text-3xl mb-4 sm:text-4xl lg:text-5xl">
                Have worked with
              </h2>
              <p className="font-medium text-base text-secondary md:text-lg">
                My Previous satisfied clients, coming from various background
                and size such as startup, individual business, and corporation{" "}
              </p>
            </motion.div>
          </div>
          <div className="w-full px-4">
            <div className="flex flex-wrap items-center justify-center">
              <a
                href="https://bankmega.com/"
                target="blank"
                className="w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8"
              >
                <img
                  src={"/images/clients/logoMegaKotak.png"}
                  alt="bank-mega"
                />
              </a>
              <a
                href="https://www.delisome.my.id/"
                target="blank"
                className="w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8"
              >
                <img
                  className="rounded-full scale-90"
                  src={"/images/clients/delisome.jpeg"}
                  alt="bank-mega"
                />
              </a>
              <a
                href="https://www.okeo.shop/"
                target="blank"
                className="w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8"
              >
                <img
                  className="rounded-full scale-90"
                  src={"/images/clients/okeo.jpg"}
                  alt="bank-mega"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* CLIENT SECTION END */}
    </>
  );
});
