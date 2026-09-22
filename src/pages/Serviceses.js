import React from "react";
import "./Services.css";

const services = [
  {
    number: "01",
    title: "Kiosk",
    description:
      "Complete metal fabrication solutions including cutting, drilling, bending, fitting and welding for customized industrial requirements.",
    image: "/images/services/1-kiosk.png",
  },
  {
    number: "02",
    title: "Sheet Metal Fabrication",
    description:
      "Precision sheet metal fabrication for industrial structures, components, enclosures and customized products.",
    image: "/images/services/2-encloser.png",
  },
  {
    number: "03",
    title: "Pallet",
    description:
      "Fabrication of structural steel components using advanced cutting, drilling, bending and welding processes.",
    image: "/images/services/4-INDUSTRIAL RACK.png",
  },
  {
    number: "04",
    title: "Heavy Fabrication",
    description:
      "Heavy-duty fabrication for large and complex industrial structures with controlled cutting, forming and welding.",
    image: "/images/services/shotblasting.png",
  },
  {
    number: "05",
    title: "Automobile Spares",
    description:
      "Manufacturing and supply of automobile spare components for repair, replacement and industrial applications.",
    image: "/images/services/shim-coupling.png",
  },
  {
    number: "06",
    title: "Work Bench",
    description:
      "Special Purpose Machines and customized machine components developed according to specific customer requirements.",
    image: "/images/services/workbench.png",
  },
  {
    number: "07",
    title: "Encloser",
    description:
      "Reliable replacement components for industrial machinery, maintenance requirements and machine restoration.",
    image: "/images/services/3-PANEL & PCB ENCLOSURE.png",
  },
  {
    number: "08",
    title: "Jigs & Fixtures",
    description:
      "Accurate jigs and fixtures designed to improve repeatability, accuracy and efficiency in industrial production.",
    image: "/images/services/drilling fixture.png",
  },
  {
    number: "09",
    title: "Laser Cutting & Folding",
    description:
      "High-precision laser cutting and folding services for clean, accurate and consistent sheet metal components.",
    image: "/images/services/gas-cutting-table.png",
  },
  {
    number: "10",
    title: "Conveyors",
    description:
      "Industrial conveyor systems designed for efficient transportation and handling of materials across production areas.",
    image: "/images/services/metalconveyors.png",
  },
];

const Services = () => {
  return (
    <section className="bi-services">

      <div className="bi-services-container">

        {/* Header */}
        <div className="bi-services-heading">

          <div className="bi-services-title">

            <span className="bi-small-label">
              OUR SERVICES
            </span>

            <h2>
              Engineering
              <br />
              <span>That Makes Things Easy.</span>
            </h2>

          </div>

          <div className="bi-services-intro">

            <div className="bi-intro-number">
              10
            </div>

            <p>
              From fabrication and precision cutting to
              industrial spares and material handling,
              Best Industries provides practical solutions
              for complex industrial requirements.
            </p>

          </div>

        </div>


        {/* Orange line */}
        <div className="bi-services-line">
          <span></span>
        </div>


        {/* Services */}
        <div className="bi-services-grid">

          {services.map((service, index) => (

            <article
              className={`bi-service-card ${
                index === 0 ? "bi-service-featured" : ""
              }`}
              key={service.number}
            >

              {/* Image */}
              <div className="bi-service-image">

                <img
                  src={service.image}
                  alt={service.title}
                />

                <div className="bi-image-overlay"></div>

                <span className="bi-service-number">
                  {service.number}
                </span>

              </div>


              {/* Content */}
              <div className="bi-service-content">

                <div className="bi-service-top">

                  <span className="bi-service-label">
                    BEST INDUSTRIES
                  </span>

                  <span className="bi-service-icon">
                    ↗
                  </span>

                </div>

                <h3>
                  {service.title}
                </h3>

                <p>
                  {service.description}
                </p>

                <div className="bi-service-bottom">

                  <span>
                    EXPLORE SERVICE
                  </span>

                  <div className="bi-service-arrow">
                    →
                  </div>

                </div>

              </div>

            </article>

          ))}

        </div>


        {/* Bottom statement */}
        <div className="bi-services-footer">

          <div className="bi-footer-heading">
            <span>OUR APPROACH</span>

            <h3>
              Complex requirement.
              <strong> Practical solution.</strong>
            </h3>
          </div>

          <p>
            We understand your requirement, study the
            application and deliver a solution focused on
            quality, functionality and reliability.
          </p>

          <a href="#enquiry">
            SEND YOUR REQUIREMENT
            <span>↗</span>
          </a>

        </div>

      </div>

    </section>
  );
};

export default Services;
