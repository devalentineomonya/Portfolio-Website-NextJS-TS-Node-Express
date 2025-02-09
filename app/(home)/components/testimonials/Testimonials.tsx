"use client";

import { Navigation, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/swiper-bundle.css";
import SectionLayout from "@/components/layouts/section/SectionLayout";
import Testimonial from "./Testimonial";
import testimonialItems from "./testimonialItems";
import { sectionMetadata } from "@/assets/data/metaDatas";
import {Metadata} from "next"
const { title, description } = sectionMetadata.testimonials;

export const metadata: Metadata = {
  title,
  description
}

const Testimonials = () => {
  return (
    <>

      <SectionLayout
        sectionName="Testimonials"
        sectionDescription="Who has seen my work"
        sectionNumber="03"
        sectionId="testimonials"
      >
        <div className="max-w-7xl w-full">
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
    </>
  );
};
export default Testimonials;
