import React from "react";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import {
  CircularProgressbar,
  buildStyles,
} from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";

/* =====================================================
   BEST INDUSTRIES - CAPABILITIES
===================================================== */

const features = [
  {
    title: "Quality Fabrication",
    percentage: 95,
    description:
      "We focus on accurate fabrication and dependable workmanship across general, sheet metal, structural, and heavy fabrication projects.",
  },
  {
    title: "Precision Engineering",
    percentage: 92,
    description:
      "Our engineering solutions are developed with attention to precision, functionality, and the specific requirements of every industrial application.",
  },
  {
    title: "Custom Industrial Solutions",
    percentage: 94,
    description:
      "From SPM machines and industrial spares to jigs, fixtures, and conveyors, we provide solutions tailored to customer requirements.",
  },
  {
    title: "Customer Satisfaction",
    percentage: 98,
    description:
      "We understand customer requirements carefully and strive to deliver reliable products, consistent quality, and practical solutions.",
  },
];

/* =====================================================
   BEST INDUSTRIES - CLIENT LOGOS
   Folder: public/images/client/
===================================================== */

const logos = [
  {
    name: "Saint-Gobain",
    image: "/images/client/SAINT.webp",
  },
  {
    name: "Berkal",
    image: "/images/client/BERKAL.png",
  },
  {
    name: "Supreme",
    image: "/images/client/SUPREME.png",
  },
  {
    name: "Microtrend",
    image: "/images/client/MICROTREND.png",
  },
  {
    name: "Microleaf",
    image: "/images/client/MICROLEAF.png",
  },
  {
    name: "PMI",
    image: "/images/client/PMI.png",
  },
  {
    name: "SGS",
    image: "/images/client/SGS.png",
  },
  {
    name: "Alstrut",
    image: "/images/client/ALSTRUT.png",
  },
  {
    name: "APT",
    image: "/images/client/APT.png",
  },
  {
    name: "Masafi",
    image: "/images/client/MASAFI.png",
  },
  {
    name: "Servo",
    image: "/images/client/SERVO.webp",
  },
];

/* =====================================================
   COMPONENT
===================================================== */

const Features = () => {
  return (
    <section className="our-features dark-section parallaxie">
      <div className="container">
        <div className="row align-items-center">

          {/* ================= LEFT SIDE ================= */}

          <div className="col-xl-6">
            <div className="features-content">

              <div className="section-title">
                <span className="section-sub-title wow fadeInUp">
                  Our Capabilities
                </span>

                <h2
                  className="text-anime-style-3"
                  data-cursor="-opaque"
                >
                  Engineering and fabrication solutions built around your needs
                </h2>

                <p
                  className="wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  Best Industries provides a wide range of industrial
                  fabrication and engineering solutions. Our capabilities
                  include general fabrication, sheet metal fabrication,
                  structural and heavy fabrication, laser cutting and
                  folding, automobile and industrial spares, SPM machines,
                  jigs and fixtures, and conveyor systems.
                </p>
              </div>

              <div
                className="features-btn wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <Link
                  to="/contact"
                  className="btn-default btn-highlighted"
                >
                  Discuss Your Requirement
                </Link>
              </div>

            </div>
          </div>

          {/* ================= RIGHT SIDE ================= */}

          <div className="col-xl-6">
            <div className="features-item-list">

              {features.map((item, index) => (
                <div
                  className="features-item"
                  key={index}
                >

                  <div
                    className="features-counter-circle"
                    style={{
                      width: 80,
                      height: 80,
                    }}
                  >
                    <CircularProgressbar
                      value={item.percentage}
                      text={`${item.percentage}%`}
                      styles={buildStyles({
                        pathColor: "#ff6b00",
                        textColor: "#ffffff",
                        trailColor: "#2d2d2d",
                        textSize: "20px",
                      })}
                    />
                  </div>

                  <div className="features-item-content">
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                  </div>

                </div>
              ))}

            </div>
          </div>

          {/* ================= CLIENT LOGOS ================= */}

          <div className="col-lg-12">
            <div className="company-slider-box wow fadeInUp">

              <div className="company-slider-title">
                <h3>
                  Trusted by Leading Industrial & Manufacturing Companies
                </h3>
              </div>

              <Swiper
                modules={[Autoplay]}
                loop={true}
                speed={700}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                spaceBetween={25}
                breakpoints={{
                  0: {
                    slidesPerView: 2,
                    spaceBetween: 15,
                  },
                  576: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                  992: {
                    slidesPerView: 4,
                    spaceBetween: 25,
                  },
                  1200: {
                    slidesPerView: 5,
                    spaceBetween: 30,
                  },
                }}
              >

                {logos.map((logo, index) => (
                  <SwiperSlide key={index}>

                    <div className="company-supports-logo">

                      <img
                        src={logo.image}
                        alt={`${logo.name} - Best Industries Client`}
                        title={logo.name}
                        loading="lazy"
                      />

                    </div>

                  </SwiperSlide>
                ))}

              </Swiper>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;