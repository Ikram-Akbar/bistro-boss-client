// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
// Import swiper img
import img1 from "../../../assets/home/slide1.jpg";
import img2 from "../../../assets/home/slide2.jpg";
import img3 from "../../../assets/home/slide3.jpg";
import img4 from "../../../assets/home/slide4.jpg";
import img5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Categories = () => {
  return (
    <>
      <section>
        <SectionTitle
          subHeading={"From 11:00 am to 10:00 pm"}
          heading={"Order online "}
        ></SectionTitle>
        <Swiper
          slidesPerView={5}
          spaceBetween={35}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper mb-24"
        >
          <SwiperSlide>
            <img src={img1} alt="" />
            <h3 className="uppercase text-4xl text-white -mt-12 text-center">
              salad
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img2} alt="" />
            <h3 className="uppercase text-4xl text-white -mt-12 text-center">
              Pizza
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img3} alt="" />
            <h3 className="uppercase text-4xl text-white -mt-12 text-center">
              soups
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img4} alt="" />
            <h3 className="uppercase text-4xl text-white -mt-12 text-center">
              dessert
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img5} alt="" />
            <h3 className="uppercase text-4xl text-white -mt-12 text-center">
              salad
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img3} alt="" />
            <h3 className="uppercase text-4xl text-white -mt-12 text-center">
              soups
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img3} alt="" />
            <h3 className="uppercase text-4xl text-white -mt-12 text-center">
              soups
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img3} alt="" />
            <h3 className="uppercase text-4xl text-white -mt-12 text-center">
              soups
            </h3>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default Categories;
