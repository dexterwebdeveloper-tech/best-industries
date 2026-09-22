import React from "react";
import "./Facility.css";

// const facilities = [
//   {
//     id: "01",
//     title: "Fabrication Facility",
//     shortTitle: "FABRICATION",
//     description:
//       "A dedicated fabrication environment for manufacturing industrial structures, components and customized engineering solutions.",
//     details: [
//       "General Fabrication",
//       "Structural Fabrication",
//       "Heavy Fabrication",
//       "Sheet Metal Work",
//     ],
//   },
//   {
//     id: "02",
//     title: "Laser Cutting & Folding",
//     shortTitle: "LASER & FOLDING",
//     description:
//       "Precision cutting and forming capabilities for producing accurate sheet metal components and fabricated parts.",
//     details: [
//       "Laser Cutting",
//       "Sheet Cutting",
//       "Precision Folding",
//       "Plate Processing",
//     ],
//   },
//   {
//     id: "03",
//     title: "Welding Facility",
//     shortTitle: "WELDING",
//     description:
//       "Professional welding facilities supporting structural, industrial and customized fabrication requirements.",
//     details: [
//       "Industrial Welding",
//       "Structural Welding",
//       "Welding Booths",
//       "Welding Tables",
//     ],
//   },
//   {
//     id: "04",
//     title: "Machine Shop",
//     shortTitle: "MACHINE SHOP",
//     description:
//       "Machining capabilities supporting industrial spares, fixtures, machine components and special-purpose requirements.",
//     details: [
//       "Drilling",
//       "Machining",
//       "Jigs & Fixtures",
//       "Machine Components",
//     ],
//   },
//   {
//     id: "05",
//     title: "Material Handling",
//     shortTitle: "MATERIAL HANDLING",
//     description:
//       "Solutions and facilities for developing equipment used to move, transport and handle industrial materials.",
//     details: [
//       "Roller Conveyors",
//       "Chain Conveyors",
//       "Screw Conveyors",
//       "Bucket Conveyors",
//     ],
//   },
//   {
//     id: "06",
//     title: "Surface Treatment",
//     shortTitle: "SURFACE TREATMENT",
//     description:
//       "Surface preparation and finishing capabilities designed to improve durability, appearance and readiness for further coating.",
//     details: [
//       "Shot Blasting",
//       "Surface Preparation",
//       "Cleaning",
//       "Finishing",
//     ],
//   },
// ];


const facilities = [
  {
    id: "01",
    title: "Laser Cutting Machine",
    shortTitle: "LASER CUTTING",
    description:
      "High-precision laser cutting equipment for producing accurate components, profiles and sheet metal parts.",
    details: [
      "LASER CUTTING MACHINE",
      "Precision Sheet Cutting",
      "Profile Cutting",
      "Component Manufacturing",
    ],
  },
  {
    id: "02",
    title: "Tube Laser Cutting Machine",
    shortTitle: "TUBE LASER",
    description:
      "Advanced tube laser cutting capability for precise processing of pipes, tubes and structural sections.",
    details: [
      "TUBE LASER CUTTING MACHINE",
      "Tube Processing",
      "Pipe Cutting",
      "Profile Cutting",
    ],
  },
  {
    id: "03",
    title: "Laser Welding Machine",
    shortTitle: "LASER WELDING",
    description:
      "Precision laser welding technology for clean, accurate and reliable welding of industrial components.",
    details: [
      "LASER WELDING MACHINE",
      "Precision Welding",
      "Component Welding",
      "Fine Weld Applications",
    ],
  },
  {
    id: "04",
    title: "MIG Welding Machine",
    shortTitle: "MIG WELDING",
    description:
      "MIG welding equipment for efficient and consistent welding across industrial fabrication applications.",
    details: [
      "MIG WELDING MACHINE",
      "Industrial Welding",
      "Structural Welding",
      "Fabrication Welding",
    ],
  },
  {
    id: "05",
    title: "Spot Welding Machine",
    shortTitle: "SPOT WELDING",
    description:
      "Spot welding equipment for producing consistent and reliable joints in sheet metal and fabricated components.",
    details: [
      "SPOT WELDING MACHINE",
      "Sheet Metal Welding",
      "Resistance Welding",
      "Component Assembly",
    ],
  },
  {
    id: "06",
    title: "TIG Welding Machine",
    shortTitle: "TIG WELDING",
    description:
      "TIG welding capability for high-quality, precise and controlled welding applications.",
    details: [
      "TIG WELDING MACHINE",
      "Precision Welding",
      "Stainless Steel Welding",
      "Controlled Welding",
    ],
  },
];

const Facility = () => {
  return (
    <section className="facility-section">

      {/* =====================================
          BACKGROUND ELEMENTS
      ===================================== */}

      <div className="facility-grid-bg"></div>

      <div className="facility-bg-text">
        FACILITY
      </div>

      <div className="facility-orange-bar"></div>


      <div className="container">

        {/* =====================================
            HEADER
        ===================================== */}

        <div className="facility-header">

          <div className="facility-heading">

            <span className="facility-eyebrow">
              OUR FACILITY
            </span>

            <h2>
              Built For
              <br />
              <strong>Industrial Work.</strong>
            </h2>

          </div>


          <div className="facility-intro">

            <div className="facility-intro-line"></div>

            <div>

              <p>
                Our facilities bring together fabrication,
                machining, welding and material handling
                capabilities to support a wide range of
                industrial requirements.
              </p>

              <span className="facility-location">
                BEST INDUSTRIES / CHENNAI
              </span>

            </div>

          </div>

        </div>


        {/* =====================================
            FACILITY STATUS
        ===================================== */}

        <div className="facility-status">

          <div className="facility-status-item">

            <span className="status-dot"></span>

            <span>
              ENGINEERING
            </span>

          </div>

          <div className="facility-status-line"></div>

          <div className="facility-status-item">

            <span className="status-dot"></span>

            <span>
              FABRICATION
            </span>

          </div>

          <div className="facility-status-line"></div>

          <div className="facility-status-item">

            <span className="status-dot"></span>

            <span>
              MACHINING
            </span>

          </div>

          <div className="facility-status-line"></div>

          <div className="facility-status-item">

            <span className="status-dot"></span>

            <span>
              INSPECTION
            </span>

          </div>

        </div>


        {/* =====================================
            FACILITY GRID
        ===================================== */}

        <div className="facility-grid">

          {facilities.map((facility, index) => (

            <div
              className={`facility-card ${
                index === 0
                  ? "facility-card-featured"
                  : ""
              }`}
              key={facility.id}
            >

              {/* Card top */}

              <div className="facility-card-top">

                <span className="facility-number">
                  {facility.id}
                </span>

                <span className="facility-card-code">
                  BI / {facility.id}
                </span>

              </div>


              {/* Technical symbol */}

              <div className="facility-symbol">

                <div className="facility-symbol-circle">
                  <span></span>
                </div>

                <div className="facility-symbol-line"></div>

              </div>


              {/* Content */}

              <div className="facility-card-content">

                <span className="facility-card-category">
                  {facility.shortTitle}
                </span>

                <h3>
                  {facility.title}
                </h3>

                <p>
                  {facility.description}
                </p>

              </div>


              {/* Details */}

              <div className="facility-details">

                {facility.details.map((detail) => (

                  <div
                    className="facility-detail"
                    key={detail}
                  >
                    <span>+</span>
                    {detail}
                  </div>

                ))}

              </div>


              {/* Bottom */}

              <div className="facility-card-bottom">

                <span>
                  VIEW CAPABILITY
                </span>

                <span className="facility-arrow">
                  ↗
                </span>

              </div>

            </div>

          ))}

        </div>


        {/* =====================================
            FACILITY FEATURE STRIP
        ===================================== */}

        <div className="facility-feature">

          <div className="facility-feature-left">

            <div className="facility-feature-number">
              07
            </div>

            <span>
              ENGINEERING CAPABILITY
            </span>

            <h3>
              From Raw
              <br />
              Material To
              <br />
              <strong>Finished Solution.</strong>
            </h3>

          </div>


          <div className="facility-feature-right">

            <p>
              Our facility supports the complete journey from
              material preparation and fabrication to finishing
              and final inspection. This integrated approach
              allows us to respond to customized industrial
              requirements with greater control and consistency.
            </p>


            <div className="facility-process">

              <div className="facility-process-item">
                <span>01</span>
                <b>PLAN</b>
              </div>

              <div className="facility-process-line"></div>

              <div className="facility-process-item">
                <span>02</span>
                <b>FABRICATE</b>
              </div>

              <div className="facility-process-line"></div>

              <div className="facility-process-item">
                <span>03</span>
                <b>INSPECT</b>
              </div>

              <div className="facility-process-line"></div>

              <div className="facility-process-item">
                <span>04</span>
                <b>DELIVER</b>
              </div>

            </div>

          </div>

        </div>


        {/* =====================================
            BOTTOM STATEMENT
        ===================================== */}

        <div className="facility-bottom">

          <div className="facility-bottom-mark">
            BI
          </div>

          <div className="facility-bottom-text">

            <span>
              BEST INDUSTRIES
            </span>

            <p>
              Capability, craftsmanship and practical
              engineering working together.
            </p>

          </div>

          <div className="facility-bottom-line"></div>

          <div className="facility-bottom-code">
            FAC / 2026
          </div>

        </div>

      </div>

    </section>
  );
};

export default Facility;
