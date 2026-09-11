import React from "react";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const testimonials = [
  {
    name: "Saint-Gobain India Private Limited",
    role: "Industrial Client",
    image: "/images/author-1.jpg",
    review:
      "Best Industries supports industrial requirements with a focus on reliable fabrication, quality workmanship, and solutions tailored to project specifications.",
  },
  {
    name: "Berkal Industries Pvt. Ltd.",
    role: "Industrial Client",
    image: "/images/author-2.jpg",
    review:
      "From fabrication and industrial components to customized requirements, Best Industries focuses on delivering practical and dependable engineering solutions.",
  },
  {
    name: "Supreme Petrochem Limited",
    role: "Industrial Client",
    image: "/images/author-3.jpg",
    review:
      "Best Industries provides fabrication and engineering capabilities suited to demanding industrial applications, with an emphasis on precision and consistent workmanship.",
  },
  {
    name: "PMI Engineering Exports Pvt. Ltd.",
    role: "Engineering Client",
    image: "/images/author-4.jpg",
    review:
      "Best Industries combines fabrication expertise, manufacturing capabilities, and customer-focused execution to address diverse industrial requirements.",
  },
];

const Testimonials = () => {
  return (
    <section className="our-testimonials dark-section">

      <div className="container">

        {/* Heading */}
        <div className="row section-row">
          <div className="col-lg-12">

            <div className="section-title section-title-center">

              <span className="section-sub-title wow fadeInUp">
                Our Clients
              </span>

              <h2
                className="text-anime-style-3"
                data-cursor="-opaque"
              >
                Trusted by businesses for reliable industrial solutions
              </h2>

              <p
                className="wow fadeInUp"
                data-wow-delay="0.2s"
              >
                We work with businesses across engineering, manufacturing,
                industrial, automotive, and related sectors. Our focus is on
                understanding each requirement and delivering dependable
                fabrication and engineering solutions.
              </p>

            </div>

          </div>
        </div>

        <div className="row">

          <div className="col-lg-12">

            <div className="testimonial-slider wow fadeInUp">

              <Swiper
                modules={[Autoplay]}
                loop={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                spaceBetween={30}
                speed={800}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  1200: {
                    slidesPerView: 3,
                  },
                }}
              >

                {testimonials.map((item, index) => (

                  <SwiperSlide key={index}>

                    <div className="testimonial-item">

                      <div className="testimonial-item-header">

                        <div className="testimonial-item-rating">

                          <p>
                            Our Client
                          </p>

                          <span className="testimonial-item-rating-star">
                            <i className="fa-solid fa-industry"></i>
                          </span>

                        </div>

                        <div className="testimonial-item-content">

                          <p>
                            {item.review}
                          </p>

                        </div>

                      </div>

                      <div className="testimonial-author-box">

                        {/* <div className="testimonial-author-image">

                          <figure className="image-anime">

                            <img
                              src={item.image}
                              alt={item.name}
                            />

                          </figure>

                        </div> */}

                        <div className="testimonial-author-content">

                          <h2>
                            {item.name}
                          </h2>

                          <p>
                            {item.role}
                          </p>

                        </div>

                      </div>

                    </div>

                  </SwiperSlide>

                ))}

              </Swiper>

            </div>

          </div>

          {/* Footer */}
          <div className="col-lg-12">

            <div
              className="section-footer-text section-satisfy-img wow fadeInUp"
              data-wow-delay="0.2s"
            >

              {/* <div className="satisfy-client-images">

                <div className="satisfy-client-image">

                  <figure className="image-anime">

                    <img
                      src="/images/author-1.jpg"
                      alt="Best Industries Client"
                    />

                  </figure>

                </div>

                <div className="satisfy-client-image add-more">

                  <a href="tel:+917299605040">
                    <i className="fa-solid fa-phone"></i>
                  </a>

                </div>

              </div> */}

              <p>
                Looking for a reliable fabrication and engineering partner?{" "}
                <Link to="/contact-us">
                  Discuss Your Requirement.
                </Link>
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Testimonials;
