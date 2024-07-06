import { Navigation, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Testimonial from "../Swipper/Testimonial";
import "swiper/css";
import "swiper/swiper-bundle.css";
import "./testimonials.css";
import HeadLine from "../HeadLine/HeadLine";
import SwipperItems from "../../assets/SwipperList/SwipperList";

const Testimonials = ({testimonials=SwipperItems}) => {
  return (
    <div className="testimonials-section">
      <HeadLine number={"03"} description={"Who has seen my work"} name={"Testimonials"}/>
      <div className="testimonials-container">
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
              <Testimonial
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
export default Testimonials;
