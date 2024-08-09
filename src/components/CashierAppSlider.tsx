import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

export default function CashierAppSlider() {
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
          src={"/images/portfolio/cashier-app/1.jpeg"}
          alt="cashier app"
        />
      </SwiperSlide>
      <SwiperSlide className="w-full h-full">
        <img
          className="w-full h-full"
          src={"/images/portfolio/cashier-app/2.jpeg"}
          alt="cashier app"
        />
      </SwiperSlide>
      <SwiperSlide className="w-full h-full">
        <img
          className="w-full h-full"
          src={"/images/portfolio/cashier-app/3.jpeg"}
          alt="cashier app"
        />
      </SwiperSlide>
      <SwiperSlide className="w-full h-full">
        <img
          className="w-full h-full"
          src={"/images/portfolio/cashier-app/4.jpeg"}
          alt="cashier app"
        />
      </SwiperSlide>
      <SwiperSlide className="w-full h-full">
        <img
          className="w-full h-full"
          src={"/images/portfolio/cashier-app/5.jpeg"}
          alt="cashier app"
        />
      </SwiperSlide>
    </Swiper>
  );
}
