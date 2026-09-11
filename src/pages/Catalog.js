import React, { useState } from "react";
import "./Catalog.css";

const catalogItems = [
  {
    id: 1,
    title: "Kiosk",
    category: "Fabrication",
    image: "/images/services/1-kiosk.png",
  },
  {
    id: 2,
    title: "Encloser",
    category: "Enclosures",
    image: "/images/services/2-encloser.png",
  },
  {
    id: 3,
    title: "Panel & PCB Enclosure",
    category: "Enclosures",
    image: "/images/services/3-PANEL & PCB ENCLOSURE.png",
  },
  {
    id: 4,
    title: "Industrial Rack",
    category: "Industrial",
    image: "/images/services/4-INDUSTRIAL RACK.png",
  },
  {
    id: 5,
    title: "Mobile Locker",
    category: "Industrial",
    image: "/images/services/5-mobile locker.png",
  },
  {
    id: 6,
    title: "Bucket Conveyor",
    category: "Conveyors",
    image: "/images/services/bucketconveyor.png",
  },
  {
    id: 7,
    title: "Chain Conveyors",
    category: "Conveyors",
    image: "/images/services/chainconveyors.png",
  },
  {
    id: 8,
    title: "Drilling Fixture",
    category: "Jigs & Fixtures",
    image: "/images/services/drilling fixture.png",
  },
  {
    id: 9,
    title: "Dust Collector",
    category: "Industrial",
    image: "/images/services/dustcollector.png",
  },
  {
    id: 10,
    title: "Gas Cutting Table",
    category: "Fabrication",
    image: "/images/services/gas-cutting-table.png",
  },
  {
    id: 11,
    title: "Industrial Trolley",
    category: "Industrial",
    image: "/images/services/INDUSTRIAL-TROLLEY.png",
  },
  {
    id: 12,
    title: "Metal Conveyors",
    category: "Conveyors",
    image: "/images/services/metalconveyors.png",
  },
  {
    id: 13,
    title: "Screw Conveyors",
    category: "Conveyors",
    image: "/images/services/screwconveyors.png",
  },
  {
    id: 14,
    title: "Shim Coupling",
    category: "Industrial Spares",
    image: "/images/services/shim-coupling.png",
  },
  {
    id: 15,
    title: "Shot Blasting",
    category: "Fabrication",
    image: "/images/services/shotblasting.png",
  },
  {
    id: 16,
    title: "Welding Booth",
    category: "Fabrication",
    image: "/images/services/welding-booth.png",
  },
  {
    id: 17,
    title: "Welding Table",
    category: "Fabrication",
    image: "/images/services/WELDING TABLE.png",
  },
  {
    id: 18,
    title: "Workbench",
    category: "Industrial",
    image: "/images/services/workbench.png",
  },
];


const categories = [
  "All",
  "Fabrication",
  "Enclosures",
  "Conveyors",
  "Industrial",
  "Jigs & Fixtures",
  "Industrial Spares",
];

const Catalog = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? catalogItems
      : catalogItems.filter(
          (item) => item.category === activeCategory
        );

  return (
    <section className="catalog-section">

      {/* Decorative elements */}
      <div className="catalog-bg-text">INDUSTRY</div>

      <div className="container">

        {/* ================= HEADER ================= */}

        <div className="catalog-header">

          <div className="catalog-title">

            <span className="catalog-eyebrow">
              OUR CATALOG
            </span>

            <h2>
              Built For
              <br />
              <strong>Industry.</strong>
            </h2>

          </div>

          <div className="catalog-intro">

            <div className="catalog-line"></div>

            <p>
              Explore our range of custom fabricated products,
              industrial equipment, material handling solutions
              and precision components engineered around your
              requirements.
            </p>

          </div>

        </div>


        {/* ================= FILTER ================= */}

        <div className="catalog-filter">

          {categories.map((category) => (
            <button
              key={category}
              className={
                activeCategory === category
                  ? "active"
                  : ""
              }
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}

        </div>


        {/* ================= CATALOG GRID ================= */}

        <div className="catalog-grid">

          {filteredItems.map((item, index) => (

            <div
              className="catalog-item"
              key={item.id}
            >

              {/* Image */}

              <div className="catalog-image">

                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                />

                <div className="catalog-overlay"></div>

                <span className="catalog-index">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="catalog-category">
                  {item.category}
                </span>

              </div>


              {/* Content */}

              <div className="catalog-content">

                <h3>{item.title}</h3>

                <p>
                  {item.description}
                </p>

                <button
                  className="catalog-view"
                  onClick={() =>
                    console.log(
                      `Enquiry for ${item.title}`
                    )
                  }
                >
                  <span>View Details</span>
                  <b>↗</b>
                </button>

              </div>

            </div>

          ))}

        </div>


        {/* ================= BOTTOM CTA ================= */}

        <div className="catalog-cta">

          <div className="cta-number">
            18+
          </div>

          <div className="cta-content">

            <span>
              CUSTOM INDUSTRIAL SOLUTIONS
            </span>

            <h3>
              Don't see what
              <strong> you need?</strong>
            </h3>

            <p>
              We specialize in developing products and
              components according to your exact
              specifications.
            </p>

          </div>

          <a
            href="#enquiry"
            className="catalog-cta-button"
          >
            Discuss Your Requirement
            <span>↗</span>
          </a>

        </div>

      </div>
    </section>
  );
};

export default Catalog;
