import { useRef } from "react";

export default function BlogSection() {
  const blogRef = useRef<HTMLInputElement | null>(null);
  return (
    <>
      {/* BLOG SECTION START */}
      <section id="blog" className="pt-36 pb-32 bg-slate-200">
        <div className="container">
          <div className="w-full px-4">
            <div className="max-w-xl mx-auto text-center mb-16">
              <h4 className="font-semibold text-lg text-primary mb-2">Blog</h4>
              <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl">
                Tulisan Terkini
              </h2>
              <p className="font-medium text-base text-primary md:text-lg">
                auctor neque vitae tempus quam pellentesque nec nam aliquam sem
                et tortor consequat id porta nibh aliquam sem et tortor
                consequat id porta nibh
              </p>
            </div>
          </div>
          <div ref={blogRef} className="flex flex-wrap justify-center">
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10 group cursor-pointer">
                <img
                  src="https://source.unsplash.com/360x200?programming"
                  alt=""
                  className="w-full"
                />
                <div className="py-8 px-6">
                  <h3 className="mb-3 font-semibold text-xl text-dark truncate group-hover:text-primary">
                    Tips Belajar Programming
                  </h3>
                  <p className="min-h-[72px] font-medium text-base text-secondary mb-4 line-clamp-3">
                    sem et tortor consequat id porta nibh
                  </p>
                  <p
                    className="font-medium text-sm bg-primary py-2 px-4 rounded-lg text-white hover:opacity-80"
                    onClick={() => alert("stay tune")}
                  >
                    Coming Soon
                  </p>
                </div>
              </div>
            </div>
            <div ref={blogRef} className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10 group cursor-pointer">
                <img
                  src="https://source.unsplash.com/360x200?coffee"
                  alt=""
                  className="w-full"
                />
                <div className="py-8 px-6">
                  <h3 className="mb-3 font-semibold text-xl text-dark truncate group-hover:text-primary">
                    Tips Belajar Programming
                  </h3>
                  <p className="min-h-[72px] font-medium text-base text-secondary mb-4 line-clamp-3">
                    aliquam sem et tortor consequat id porta nibh aliquam sem et
                    tortor consequat id porta nibh
                  </p>
                  <p className="font-medium text-sm bg-primary py-2 px-4 rounded-lg text-white hover:opacity-80">
                    Baca selengkapnya...
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10 group cursor-pointer">
                <img
                  src="https://source.unsplash.com/360x200?computer"
                  alt=""
                  className="w-full"
                />
                <div className="py-8 px-6">
                  <h3 className="mb-3 font-semibold text-xl text-dark truncate group-hover:text-primary">
                    Tips Belajar Programming
                  </h3>
                  <p className="min-h-[72px] font-medium text-base text-secondary mb-4 line-clamp-3">
                    aliquam sem aksldk alsdkals lakojDLF aklsdaslk asldka
                    alsdalsdo las et tortor consequat id porta nibh aliquam sem
                    et tortor consequat id porta nibh
                  </p>
                  <p className="font-medium text-sm bg-primary py-2 px-4 rounded-lg text-white hover:opacity-80">
                    Baca selengkapnya...
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10 group cursor-pointer">
                <img
                  src="https://source.unsplash.com/360x200?games"
                  alt=""
                  className="w-full"
                />
                <div className="py-8 px-6">
                  <h3 className="mb-3 font-semibold text-xl text-dark truncate group-hover:text-primary">
                    Tips Belajar Programming
                  </h3>
                  <p className="min-h-[72px] font-medium text-base text-secondary mb-4 line-clamp-3">
                    aliquam sem et tortor consequat id porta nibh aliquam sem et
                    tortor consequat id porta nibh
                  </p>
                  <p className="font-medium text-sm bg-primary py-2 px-4 rounded-lg text-white hover:opacity-80">
                    Baca selengkapnya...
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10 group cursor-pointer">
                <img
                  src="https://source.unsplash.com/360x200?work"
                  alt=""
                  className="w-full"
                />
                <div className="py-8 px-6">
                  <h3 className="mb-3 font-semibold text-xl text-dark truncate group-hover:text-primary">
                    Tips Belajar Programming
                  </h3>
                  <p className="min-h-[72px] font-medium text-base text-secondary mb-4 line-clamp-3">
                    aliquam sem et tortor consequat id porta nibh aliquam sem et
                    tortor consequat id porta nibh akssakd aksdka kasdka aksdk
                    ask aksdkaskkka ksdaksdkaka asadasda
                  </p>
                  <p className="font-medium text-sm bg-primary py-2 px-4 rounded-lg text-white hover:opacity-80">
                    Baca selengkapnya...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* BLOG SECTION END */}
    </>
  );
}
