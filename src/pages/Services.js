import React from "react";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const services = [
  {
    id: 1,
    title: "Kiosk",
    image: "/images/services/1-kiosk.png",
    description:
      "Industrial kiosk solutions designed for reliable control, monitoring, and operator interface applications.",
  },
  {
    id: 2,
    title: "Enclosure",
    image: "/images/services/2-encloser.png",
    description:
      "Durable industrial enclosures engineered to protect electrical and automation components.",
  },
  {
    id: 3,
    title: "Panel & PCB Enclosure",
    image: "/images/services/3-PANEL & PCB ENCLOSURE.png",
    description:
      "Precision-built panel and PCB enclosures for secure and efficient industrial electrical installations.",
  },
  {
    id: 4,
    title: "Industrial Rack",
    image: "/images/services/4-INDUSTRIAL RACK.png",
    description:
      "Heavy-duty industrial racks manufactured for organized material storage and handling applications.",
  },
  {
    id: 5,
    title: "Mobile Locker",
    image: "/images/services/5-mobile locker.png",
    description:
      "Strong and practical mobile locker systems designed for industrial storage and workplace requirements.",
  },
  {
    id: 6,
    title: "Bucket Conveyor",
    image: "/images/services/bucketconveyor.png",
    description:
      "Efficient bucket conveyor systems for controlled vertical handling of bulk industrial materials.",
  },
  {
    id: 7,
    title: "Chain Conveyors",
    image: "/images/services/chainconveyors.png",
    description:
      "Robust chain conveyor solutions designed for reliable movement of heavy industrial materials.",
  },
  {
    id: 8,
    title: "Drilling Fixture",
    image: "/images/services/drilling fixture.png",
    description:
      "Precision drilling fixtures manufactured for accurate positioning, repeatability, and efficient production.",
  },
  {
    id: 9,
    title: "Dust Collector",
    image: "/images/services/dustcollector.png",
    description:
      "Industrial dust collection systems designed to maintain cleaner and safer manufacturing environments.",
  },
  {
    id: 10,
    title: "Gas Cutting Table",
    image: "/images/services/gas-cutting-table.png",
    description:
      "Heavy-duty gas cutting tables engineered for accurate and efficient metal cutting operations.",
  },
  {
    id: 11,
    title: "Industrial Trolley",
    image: "/images/services/INDUSTRIAL-TROLLEY.png",
    description:
      "Industrial trolleys designed for convenient, safe, and efficient material movement within facilities.",
  },
  {
    id: 12,
    title: "Metal Conveyors",
    image: "/images/services/metalconveyors.png",
    description:
      "Custom metal conveyor systems engineered for dependable material handling across industrial applications.",
  },
  {
    id: 13,
    title: "Screw Conveyors",
    image: "/images/services/screwconveyors.png",
    description:
      "Efficient screw conveyor systems for continuous movement and controlled handling of bulk materials.",
  },
  {
    id: 14,
    title: "Shim Coupling",
    image: "/images/services/shim-coupling.png",
    description:
      "Precision shim coupling solutions manufactured for dependable power transmission and industrial machinery.",
  },
  {
    id: 15,
    title: "Shot Blasting",
    image: "/images/services/shotblasting.png",
    description:
      "Industrial shot blasting solutions for effective surface preparation, cleaning, and finishing applications.",
  },
  {
    id: 16,
    title: "Welding Booth",
    image: "/images/services/welding-booth.png",
    description:
      "Professional welding booths designed to provide organized and efficient industrial welding workspaces.",
  },
  {
    id: 17,
    title: "Welding Table",
    image: "/images/services/WELDING TABLE.png",
    description:
      "Heavy-duty welding tables engineered for accurate fabrication, assembly, and welding operations.",
  },
  {
    id: 18,
    title: "Workbench",
    image: "/images/services/workbench.png",
    description:
      "Durable industrial workbenches designed for fabrication, assembly, maintenance, and production environments.",
  },
];

const Services = () => {
  return (
    <section className="our-services light-section">
      <div className="container">
        <div className="row section-row">
          <div className="col-lg-12">
            <div className="section-title section-title-center">
              <span className="section-sub-title wow fadeInUp">
                Our Services
              </span>

              <h2
                className="text-anime-style-3"
                data-cursor="-opaque"
              >
                Expert engineering & precision manufacturing services
              </h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={30}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
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
              {services.map((service) => (
                <SwiperSlide key={service.id}>
                  <div className="service-item">
                    <div className="service-item-image">
                      <Link to="/service-single">
                        <figure className="image-anime">
                          <img
                            src={service.image}
                            alt={service.title}
                          />
                        </figure>
                      </Link>
                    </div>

                    <div className="service-item-body">
                      <div className="service-item-content">
                        <h2>
                          <Link to="/service-single">
                            {service.title}
                          </Link>
                        </h2>

                        <p>{service.description}</p>
                      </div>

                      {/* <div className="service-item-btn">
                        <Link
                          to="/service-single"
                          className="readmore-btn"
                        >
                          Learn More
                        </Link>
                      </div> */}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="col-lg-12">
            <div
              className="section-footer-text wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <p>
                <span>Free</span> Let's make something great work together.{" "}
                <Link to="/services">
                  View all services
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;