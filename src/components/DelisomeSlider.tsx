import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

export default function DelisomeSlider() {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="w-full h-full bg-transparent"
    >
      <SwiperSlide className="w-full h-full">
        <img
          className="w-full h-full"
          src={"/images/portfolio/delisome/1.jpeg"}
          alt="cashier app"
        />
      </SwiperSlide>
      <SwiperSlide className="w-full h-full">
        <img
          className="w-full h-full"
          src={"/images/portfolio/delisome/2.jpeg"}
          alt="cashier app"
        />
      </SwiperSlide>
      <SwiperSlide className="w-full h-full">
        <img
          className="w-full h-full"
          src={"/images/portfolio/delisome/3.jpeg"}
          alt="cashier app"
        />
      </SwiperSlide>
      <SwiperSlide className="w-full h-full">
        <img
          className="w-full h-full"
          src={"/images/portfolio/delisome/4.jpeg"}
          alt="cashier app"
        />
      </SwiperSlide>
      <SwiperSlide className="w-full h-full">
        <img
          className="w-full h-full"
          src={"/images/portfolio/delisome/5.jpeg"}
          alt="cashier app"
        />
      </SwiperSlide>
      <SwiperSlide className="w-full h-full">
        <img
          className="w-full h-full"
          src={"/images/portfolio/delisome/6.jpeg"}
          alt="cashier app"
        />
      </SwiperSlide>
      <SwiperSlide className="w-full h-full">
        <img
          className="w-full h-full"
          src={"/images/portfolio/delisome/7.jpeg"}
          alt="cashier app"
        />
      </SwiperSlide>
      <SwiperSlide className="w-full h-full">
        <img
          className="w-full h-full"
          src={"/images/portfolio/delisome/8.jpeg"}
          alt="cashier app"
        />
      </SwiperSlide>
    </Swiper>
  );
}
