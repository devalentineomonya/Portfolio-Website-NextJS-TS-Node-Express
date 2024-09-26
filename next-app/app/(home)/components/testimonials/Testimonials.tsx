"use client";

import { Navigation, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/swiper-bundle.css";
import SectionLayout from "@/components/layouts/section/SectionLayout";
import Testimonial from "./Testimonial";
import testimonialItems from "./testimonialItems";

const Testimonials = () => {
  return (
    <SectionLayout
      sectionName="Testimonials"
      sectionDescription="Who has seen my work"
      sectionNumber="03"
      sectionId="testimonials"
    >
      <div className="testimonials-container">
        <Swiper modules={[Navigation, A11y]} slidesPerView={1} navigation>
          {testimonialItems.map((testimonial) => (
            <SwiperSlide
              key={testimonial.name}
              style={{
                cursor: "grab",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Testimonial
                image={testimonial.image}
                name={testimonial.name}
                position={testimonial.position}
                description={testimonial.description}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </SectionLayout>
  );
};
export default Testimonials;
