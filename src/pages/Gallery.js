import React, { useEffect, useState } from "react";
import "./Gallery.css";

const galleryImages = [
  {
    id: 1,
    title: "Kiosk",
    category: "Fabrication",
    image: "/images/services/1-kiosk.png",
  },
  {
    id: 2,
    title: "Electrical Enclosure",
    category: "Fabrication",
    image: "/images/services/2-encloser.png",
  },
  {
    id: 3,
    title: "Encloser",
    category: "Fabrication",
    image: "/images/services/3-PANEL & PCB ENCLOSURE.png",
  },
  {
    id: 4,
    title: "Pallet",
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
    title: "Chain Conveyor",
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
    title: "Metal Conveyor",
    category: "Conveyors",
    image: "/images/services/metalconveyors.png",
  },
  {
    id: 13,
    title: "Screw Conveyor",
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
    title: "Work Bench",
    category: "Industrial",
    image: "/images/services/workbench.png",
  },
];

const categories = [
  "All",
  "Fabrication",
  "Industrial",
  "Conveyors",
  "Jigs & Fixtures",
  "Industrial Spares",
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedIndex, setSelectedIndex] = useState(null);

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter(
          (item) => item.category === activeCategory
        );

  /* =========================
     OPEN IMAGE
  ========================= */

  const openLightbox = (index) => {
    setSelectedIndex(index);
    document.body.style.overflow = "hidden";
  };

  /* =========================
     CLOSE
  ========================= */

  const closeLightbox = () => {
    setSelectedIndex(null);
    document.body.style.overflow = "";
  };

  /* =========================
     NEXT
  ========================= */

  const nextImage = () => {
    setSelectedIndex((current) =>
      current === filteredImages.length - 1
        ? 0
        : current + 1
    );
  };

  /* =========================
     PREVIOUS
  ========================= */

  const previousImage = () => {
    setSelectedIndex((current) =>
      current === 0
        ? filteredImages.length - 1
        : current - 1
    );
  };

  /* =========================
     KEYBOARD
  ========================= */

  useEffect(() => {
    const handleKeyboard = (event) => {
      if (selectedIndex === null) return;

      if (event.key === "Escape") {
        closeLightbox();
      }

      if (event.key === "ArrowRight") {
        nextImage();
      }

      if (event.key === "ArrowLeft") {
        previousImage();
      }
    };

    window.addEventListener("keydown", handleKeyboard);

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyboard
      );

      document.body.style.overflow = "";
    };
  }, [selectedIndex, filteredImages.length]);

  return (
    <section className="gallery-section">

      {/* Background text */}
      <div className="gallery-bg-text">
        PROJECTS
      </div>

      <div className="container">

        {/* =========================
            HEADER
        ========================= */}

        <div className="gallery-header">

          <div>
            <span className="gallery-eyebrow">
              OUR WORK
            </span>

            <h2>
              From Ideas
              <br />
              <strong>To Reality.</strong>
            </h2>
          </div>

          <div className="gallery-description">

            <div className="gallery-line"></div>

            <p>
              Take a look at some of the industrial solutions,
              fabricated components, material handling systems
              and engineering work delivered by Best Industries.
            </p>

          </div>

        </div>


        {/* =========================
            FILTER
        ========================= */}

        <div className="gallery-filter">

          {categories.map((category) => (

            <button
              key={category}
              className={
                activeCategory === category
                  ? "active"
                  : ""
              }
              onClick={() => {
                setActiveCategory(category);
                setSelectedIndex(null);
              }}
            >
              {category}
            </button>

          ))}

        </div>


        {/* =========================
            GALLERY GRID
        ========================= */}

        <div className="gallery-grid">

          {filteredImages.map((item, index) => (

            <div
              className={`gallery-item gallery-item-${index % 5}`}
              key={item.id}
              onClick={() => openLightbox(index)}
            >

              <div className="gallery-image-wrapper">

                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                />

                <div className="gallery-image-overlay"></div>

                <div className="gallery-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="gallery-zoom">
                  +
                </div>

                <div className="gallery-item-info">

                  <span>
                    {item.category}
                  </span>

                  <h3>
                    {item.title}
                  </h3>

                </div>

              </div>

            </div>

          ))}

        </div>


        {/* =========================
            BOTTOM
        ========================= */}

        <div className="gallery-bottom">

          <span>
            BEST INDUSTRIES
          </span>

          <p>
            Engineering solutions built around
            your requirements.
          </p>

          <div className="gallery-bottom-line"></div>

        </div>

      </div>


      {/* ==================================================
          LIGHTBOX / SLIDER
      ================================================== */}

      {selectedIndex !== null && (

        <div
          className="gallery-lightbox"
          onClick={closeLightbox}
        >

          {/* Close */}

          <button
            className="lightbox-close"
            onClick={closeLightbox}
            aria-label="Close gallery"
          >
            ×
          </button>


          {/* Previous */}

          <button
            className="lightbox-arrow lightbox-prev"
            onClick={(event) => {
              event.stopPropagation();
              previousImage();
            }}
            aria-label="Previous image"
          >
            ‹
          </button>


          {/* Image */}

          <div
            className="lightbox-content"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <div className="lightbox-image">

              <img
                src={
                  filteredImages[selectedIndex].image
                }
                alt={
                  filteredImages[selectedIndex].title
                }
              />

            </div>


            <div className="lightbox-info">

              <div>

                <span>
                  {filteredImages[selectedIndex].category}
                </span>

                <h3>
                  {filteredImages[selectedIndex].title}
                </h3>

              </div>

              <div className="lightbox-counter">
                {String(selectedIndex + 1).padStart(2, "0")}
                {" / "}
                {String(filteredImages.length).padStart(2, "0")}
              </div>

            </div>

          </div>


          {/* Next */}

          <button
            className="lightbox-arrow lightbox-next"
            onClick={(event) => {
              event.stopPropagation();
              nextImage();
            }}
            aria-label="Next image"
          >
            ›
          </button>

        </div>

      )}

    </section>
  );
};

export default Gallery;
