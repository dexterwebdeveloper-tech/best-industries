import React, { useState } from "react";
import "./Products.css";

// const products = [
//   {
//     id: 1,
//     category: "Fabrication",
//     title: "General Fabrication",
//     short: "Precision-built metal structures for industrial applications.",
//     description:
//       "Custom fabricated metal structures manufactured according to project requirements, dimensions and application needs.",
//     image: "/images/products/general-fabrication.png",
//     tags: ["Custom Build", "Metal Work", "Industrial"],
//   },
//   {
//     id: 2,
//     category: "Fabrication",
//     title: "Sheet Metal Components",
//     short: "Accurate sheet metal parts with clean and consistent finishing.",
//     description:
//       "Sheet metal components produced through cutting, forming, bending and joining processes for a wide range of industrial requirements.",
//     image: "/images/products/sheet-metal.png",
//     tags: ["Sheet Metal", "Bending", "Cutting"],
//   },
//   {
//     id: 3,
//     category: "Structural",
//     title: "Structural Fabrication",
//     short: "Strong and reliable fabricated structures for demanding environments.",
//     description:
//       "Structural fabrication solutions involving cutting, drilling, bending, welding and assembly of steel components.",
//     image: "/images/products/structural-fabrication.png",
//     tags: ["Structural", "Steel", "Welding"],
//   },
//   {
//     id: 4,
//     category: "Heavy Fabrication",
//     title: "Heavy Fabrication",
//     short: "Engineered heavy-duty metal fabrication for complex applications.",
//     description:
//       "Heavy fabrication involving cutting, drilling, punching, bending, rolling, welding and finishing of large components.",
//     image: "/images/products/heavy-fabrication.png",
//     tags: ["Heavy Duty", "Welding", "Engineering"],
//   },
//   {
//     id: 5,
//     category: "Automobile",
//     title: "Automobile Spares",
//     short: "Industrial and automobile replacement components.",
//     description:
//       "Interchangeable automobile spare components manufactured for repair, replacement and industrial applications.",
//     image: "/images/products/automobile-spares.png",
//     tags: ["Automobile", "Spare Parts", "Components"],
//   },
//   {
//     id: 6,
//     category: "Industrial",
//     title: "Industrial Spares",
//     short: "Replacement components designed for industrial machinery.",
//     description:
//       "Industrial spare parts manufactured to replace damaged, worn or lost machine components.",
//     image: "/images/products/industrial-spares.png",
//     tags: ["Industrial", "Replacement", "Machinery"],
//   },
//   {
//     id: 7,
//     category: "Machines",
//     title: "SPM Machines",
//     short: "Special Purpose Machines developed around specific requirements.",
//     description:
//       "Special Purpose Machines designed and manufactured according to customer-specific production and application requirements.",
//     image: "/images/products/spm-machines.png",
//     tags: ["SPM", "Custom Machine", "Automation"],
//   },
//   {
//     id: 8,
//     category: "Jigs & Fixtures",
//     title: "Jigs & Fixtures",
//     short: "Accurate work-holding and repeatability solutions.",
//     description:
//       "Jigs and fixtures designed to improve accuracy, repeatability, interchangeability and efficiency during manufacturing operations.",
//     image: "/images/products/jigs-fixtures.png",
//     tags: ["Jigs", "Fixtures", "Accuracy"],
//   },
//   {
//     id: 9,
//     category: "Laser",
//     title: "Laser Cutting & Folding",
//     short: "Precise cutting and forming for industrial sheet applications.",
//     description:
//       "Precision laser cutting and folding solutions for producing accurate and clean components from sheet and plate materials.",
//     image: "/images/products/laser-cutting.png",
//     tags: ["Laser", "Precision", "Folding"],
//   },
//   {
//     id: 10,
//     category: "Material Handling",
//     title: "Conveyors",
//     short: "Material movement solutions for industrial environments.",
//     description:
//       "Conveyor systems designed to transport materials and components efficiently between different locations within industrial operations.",
//     image: "/images/products/conveyors.png",
//     tags: ["Conveyor", "Material Handling", "Industrial"],
//   },
// ];



const products = [
  {
    id: 1,
    category: "Fabrication",
    title: "Kiosk",
    short: "Precision-built metal structures for industrial applications.",
    description:
      "Custom fabricated metal structures manufactured according to project requirements, dimensions and application needs.",
    image: "/images/services/1-kiosk.png",
    tags: ["Custom Build", "Metal Work", "Industrial"],
  },
  {
    id: 2,
    category: "Fabrication",
    title: "Sheet Metal Components",
    short: "Accurate sheet metal parts with clean and consistent finishing.",
    description:
      "Sheet metal components produced through cutting, forming, bending and joining processes for a wide range of industrial requirements.",
    image: "/images/services/2-encloser.png",
    tags: ["Sheet Metal", "Bending", "Cutting"],
  },
  {
    id: 3,
    category: "Structural",
    title: "Encloser",
    short: "Strong and reliable fabricated structures for demanding environments.",
    description:
      "Structural fabrication solutions involving cutting, drilling, bending, welding and assembly of steel components.",
    image: "/images/services/3-PANEL & PCB ENCLOSURE.png",
    tags: ["Structural", "Steel", "Welding"],
  },
  {
    id: 4,
    category: "Heavy Fabrication",
    title: "Pallet",
    short: "Engineered heavy-duty metal fabrication for complex applications.",
    description:
      "Heavy fabrication involving cutting, drilling, punching, bending, rolling, welding and finishing of large components.",
    image: "/images/services/4-INDUSTRIAL RACK.png",
    tags: ["Heavy Duty", "Welding", "Engineering"],
  },
  {
    id: 5,
    category: "Automobile",
    title: "Automobile Spares",
    short: "Industrial and automobile replacement components.",
    description:
      "Interchangeable automobile spare components manufactured for repair, replacement and industrial applications.",
    image: "/images/services/shim-coupling.png",
    tags: ["Automobile", "Spare Parts", "Components"],
  },
  {
    id: 6,
    category: "Industrial",
    title: "Industrial Spares",
    short: "Replacement components designed for industrial machinery.",
    description:
      "Industrial spare parts manufactured to replace damaged, worn or lost machine components.",
    image: "/images/services/metalconveyors.png",
    tags: ["Industrial", "Replacement", "Machinery"],
  },
  {
    id: 7,
    category: "Machines",
    title: "SPM Machines",
    short: "Special Purpose Machines developed around specific requirements.",
    description:
      "Special Purpose Machines designed and manufactured according to customer-specific production and application requirements.",
    image: "/images/services/drilling fixture.png",
    tags: ["SPM", "Custom Machine", "Automation"],
  },
  {
    id: 8,
    category: "Jigs & Fixtures",
    title: "Jigs & Fixtures",
    short: "Accurate work-holding and repeatability solutions.",
    description:
      "Jigs and fixtures designed to improve accuracy, repeatability, interchangeability and efficiency during manufacturing operations.",
    image: "/images/services/WELDING TABLE.png",
    tags: ["Jigs", "Fixtures", "Accuracy"],
  },
  {
    id: 9,
    category: "Laser",
    title: "Laser Cutting & Folding",
    short: "Precise cutting and forming for industrial sheet applications.",
    description:
      "Precision laser cutting and folding solutions for producing accurate and clean components from sheet and plate materials.",
    image: "/images/services/gas-cutting-table.png",
    tags: ["Laser", "Precision", "Folding"],
  },
  {
    id: 10,
    category: "Material Handling",
    title: "Conveyors",
    short: "Material movement solutions for industrial environments.",
    description:
      "Conveyor systems designed to transport materials and components efficiently between different locations within industrial operations.",
    image: "/images/services/bucketconveyor.png",
    tags: ["Conveyor", "Material Handling", "Industrial"],
  },
];

const categories = [
  "All",
  "Fabrication",
  "Structural",
  "Heavy Fabrication",
  "Automobile",
  "Industrial",
  "Machines",
  "Jigs & Fixtures",
  "Laser",
  "Material Handling",
];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter(
          (product) => product.category === activeCategory
        );

  return (
    <section className="bi-products">

      {/* =========================================
          HERO
      ========================================= */}

      <div className="bi-products-hero">

        <div className="bi-products-hero-grid"></div>

        <div className="bi-products-container">

          <div className="bi-products-hero-left">

            <div className="bi-products-eyebrow">
              <span></span>
              BEST INDUSTRIES / PRODUCTS
            </div>

            <h1>
              Built for
              <strong> Industry.</strong>
            </h1>

            <p>
              Engineered products, fabricated components and
              industrial solutions built around your requirements.
            </p>

            <div className="bi-products-hero-actions">
              {/* <a href="#product-list" className="bi-products-main-btn">
                Explore Products
                <span>↗</span>
              </a> */}

              <a href="/Enquiry" className="bi-products-outline-btn">
                Enquire Now
              </a>
            </div>

          </div>

          <div className="bi-products-hero-right">

            <div className="bi-products-hero-box">

              <div className="bi-products-hero-box-top">
                <span>01</span>
                <small>ENGINEERED SOLUTIONS</small>
              </div>

              <div className="bi-products-gear">
                ⚙
              </div>

              <div className="bi-products-hero-box-bottom">
                <strong>PRECISION</strong>
                <span>FABRICATION</span>
              </div>

            </div>

          </div>

        </div>

      </div>


      {/* =========================================
          INTRO
      ========================================= */}

      <div className="bi-products-container">

        <div className="bi-products-intro">

          <div className="bi-products-intro-number">
            10+
            <span>PRODUCT CATEGORIES</span>
          </div>

          <div className="bi-products-intro-text">

            <span className="bi-products-section-label">
              WHAT WE BUILD
            </span>

            <h2>
              From complex requirements
              <span> to practical solutions.</span>
            </h2>

            <p>
              Best Industries provides a range of fabricated
              products, industrial components, special purpose
              machines and material handling solutions. Our
              products can be developed according to specific
              customer requirements and applications.
            </p>

          </div>

        </div>


        {/* =========================================
            CATEGORY FILTER
        ========================================= */}

        <div className="bi-products-filter-wrap">

          <div className="bi-products-filter-title">
            <span>FILTER</span>
            PRODUCT RANGE
          </div>

          <div className="bi-products-filters">

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

        </div>


        {/* =========================================
            PRODUCTS
        ========================================= */}

        <div
          id="product-list"
          className="bi-products-grid"
        >

          {filteredProducts.map((product, index) => (

            <article
              className="bi-product-card"
              key={product.id}
              onClick={() => setSelectedProduct(product)}
            >

              <div className="bi-product-image">

                <img
                  src={product.image}
                  alt={product.title}
                />

                <div className="bi-product-image-overlay">
                  <span>VIEW</span>
                  <b>↗</b>
                </div>

                <div className="bi-product-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

              </div>


              <div className="bi-product-content">

                <div className="bi-product-category">
                  {product.category}
                </div>

                <h3>
                  {product.title}
                </h3>

                <p>
                  {product.short}
                </p>

                <div className="bi-product-tags">

                  {product.tags.map((tag) => (
                    <span key={tag}>
                      {tag}
                    </span>
                  ))}

                </div>

                <button className="bi-product-more">
                  Product Details
                  <span>→</span>
                </button>

              </div>

            </article>

          ))}

        </div>


        {/* =========================================
            CUSTOM REQUIREMENT
        ========================================= */}

        <div className="bi-products-custom">

          <div className="bi-products-custom-pattern"></div>

          <div className="bi-products-custom-content">

            <span className="bi-products-section-label">
              HAVE A COMPLEX REQUIREMENT?
            </span>

            <h2>
              You imagine it.
              <strong>We build it.</strong>
            </h2>

            <p>
              Tell us what you need. Our team can work with your
              specifications and develop a suitable fabrication,
              component or industrial solution.
            </p>

            <a href="/contact" className="bi-products-custom-btn">
              Discuss Your Requirement
              <span>↗</span>
            </a>

          </div>

          <div className="bi-products-custom-mark">
            <span>BEST</span>
            <strong>INDUSTRIES</strong>
            <small>ENGINEERED SOLUTIONS</small>
          </div>

        </div>

      </div>


      {/* =========================================
          PRODUCT MODAL
      ========================================= */}

      {selectedProduct && (

        <div
          className="bi-product-modal"
          onClick={() => setSelectedProduct(null)}
        >

          <div
            className="bi-product-modal-inner"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="bi-product-modal-close"
              onClick={() => setSelectedProduct(null)}
            >
              ×
            </button>

            <div className="bi-product-modal-image">

              <img
                src={selectedProduct.image}
                alt={selectedProduct.title}
              />

            </div>

            <div className="bi-product-modal-content">

              <span>
                {selectedProduct.category}
              </span>

              <h2>
                {selectedProduct.title}
              </h2>

              <p>
                {selectedProduct.description}
              </p>

              <div className="bi-product-modal-tags">

                {selectedProduct.tags.map((tag) => (
                  <span key={tag}>
                    {tag}
                  </span>
                ))}

              </div>

              <a
                href="/contact"
                className="bi-product-modal-btn"
              >
                Enquire About This Product
                <b>↗</b>
              </a>

            </div>

          </div>

        </div>

      )}

    </section>
  );
};

export default Products;
