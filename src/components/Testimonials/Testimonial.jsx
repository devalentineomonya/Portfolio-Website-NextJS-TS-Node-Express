import { Navigation, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Swipper from "../Swipper/Swipper";
import "swiper/css";
import "swiper/swiper-bundle.css";
import "./testimonial.css";
import HeadLine from "../HeadLine/HeadLine";
import SwipperItems from "../../assets/SwipperList/SwipperList";

const Testimonial = ({testimonials=SwipperItems}) => {
  return (
    <div className="testimonial-section">
      <HeadLine number={"03"} description={"Who have seen my work"} name={"Testimonials"}/>
      <div className="swipper-container">
        <Swiper
          modules={[Navigation, A11y]}
          slidesPerView={1}
          navigation
        >
          {testimonials.map((testimonial, i) => (
            <SwiperSlide
              key={i}
              style={{
                cursor: "grab",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Swipper
                key={i}
                image={testimonial.image}
                name={testimonial.name}
                position = {testimonial.position}
                description={testimonial.description}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
export default Testimonial;
