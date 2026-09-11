// // import React from "react";
// // import { Link } from "react-router-dom";

// // const Hero = () => {
// //   return (
// //     <div className="hero dark-section parallaxie">

// //       <div className="container">

// //         <div className="row">

// //           <div className="col-xl-7">

// //             {/* Hero Content Start */}
// //             <div className="hero-content">

// //               {/* Section Title Start */}
// //               <div className="section-title">

// //                 <span className="section-sub-title wow fadeInUp">
// //                   Best Solutions for Industries
// //                 </span>

// //                 <h1
// //                   className="text-anime-style-3"
// //                   data-cursor="-opaque"
// //                 >
// //                   Reliable Industrial Fabrication & Engineering Solutions
// //                 </h1>

// //                 <p
// //                   className="wow fadeInUp"
// //                   data-wow-delay="0.2s"
// //                 >
// //                   Best Industries delivers dependable fabrication and
// //                   engineering solutions for diverse industrial requirements.
// //                   From general and sheet metal fabrication to structural and
// //                   heavy fabrication, we provide quality workmanship,
// //                   precision, and customized solutions for every project.
// //                 </p>

// //               </div>
// //               {/* Section Title End */}


// //               {/* Hero Content Body Start */}
// //               <div
// //                 className="hero-content-body wow fadeInUp"
// //                 data-wow-delay="0.4s"
// //               >

// //                 {/* Hero Item 1 */}
// //                 <div className="hero-body-item">

// //                   <div className="icon-box">
// //                     <i className="fa-solid fa-industry"></i>
// //                   </div>

// //                   <div className="hero-body-item-content">

// //                     <h2>
// //                       Precision Fabrication
// //                     </h2>

// //                   </div>

// //                 </div>


// //                 {/* Hero Item 2 */}
// //                 <div className="hero-body-item">

// //                   <div className="icon-box">
// //                     <i className="fa-solid fa-gears"></i>
// //                   </div>

// //                   <div className="hero-body-item-content">

// //                     <h2>
// //                       Customized Industrial Solutions
// //                     </h2>

// //                   </div>

// //                 </div>

// //               </div>
// //               {/* Hero Content Body End */}


// //               {/* Hero Content Footer Start */}
// //               <div
// //                 className="hero-content-footer wow fadeInUp"
// //                 data-wow-delay="0.6s"
// //               >

// //                 {/* Get Quote Button */}
// //                 <div className="hero-btn">

// //                   <Link
// //                     to="/contact"
// //                     className="btn-default btn-highlighted"
// //                   >
// //                     Contact Us
// //                   </Link>

// //                 </div>


// //                 {/* Phone */}
// //                 <div
// //                   className="video-play-button"
// //                   data-cursor-text="Call"
// //                 >

// //                   <a href="tel:+917299605040">

// //                     <span className="bg-effect">

// //                       <i className="fa-solid fa-phone"></i>

// //                     </span>

// //                     <p>
// //                       +91 72996 05040
// //                     </p>

// //                   </a>

// //                 </div>

// //               </div>
// //               {/* Hero Content Footer End */}

// //             </div>
// //             {/* Hero Content End */}

// //           </div>

// //         </div>

// //       </div>

// //     </div>
// //   );
// // };

// // export default Hero;










// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// const Hero = () => {
//   const images = [
//     "/assets/images/hero-bg-1.jpg",
//     "/assets/images/hero-bg-2.jpg",
//     "/assets/images/hero-bg-3.jpg",
//   ];

//   const [currentImage, setCurrentImage] = useState(0);

//   // Automatic slider
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImage((prev) => (prev + 1) % images.length);
//     }, 4000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div
//       className="hero dark-section parallaxie"
//       style={{
//         backgroundImage: `url(${images[currentImage]})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         transition: "background-image 1s ease-in-out",
//       }}
//     >
//       <div className="container">
//         <div className="row">
//           <div className="col-xl-7">

//             {/* Hero Content Start */}
//             <div className="hero-content">

//               {/* Section Title Start */}
//               <div className="section-title">

//                 <span className="section-sub-title wow fadeInUp">
//                   Best Solutions for Industries
//                 </span>

//                 <h1
//                   className="text-anime-style-3"
//                   data-cursor="-opaque"
//                 >
//                   Reliable Industrial Fabrication & Engineering Solutions
//                 </h1>

//                 <p
//                   className="wow fadeInUp"
//                   data-wow-delay="0.2s"
//                 >
//                   Best Industries delivers dependable fabrication and
//                   engineering solutions for diverse industrial requirements.
//                   From general and sheet metal fabrication to structural and
//                   heavy fabrication, we provide quality workmanship,
//                   precision, and customized solutions for every project.
//                 </p>

//               </div>
//               {/* Section Title End */}

//               {/* Hero Content Body Start */}
//               <div
//                 className="hero-content-body wow fadeInUp"
//                 data-wow-delay="0.4s"
//               >

//                 {/* Hero Item 1 */}
//                 <div className="hero-body-item">
//                   <div className="icon-box">
//                     <i className="fa-solid fa-industry"></i>
//                   </div>

//                   <div className="hero-body-item-content">
//                     <h2>Precision Fabrication</h2>
//                   </div>
//                 </div>

//                 {/* Hero Item 2 */}
//                 <div className="hero-body-item">
//                   <div className="icon-box">
//                     <i className="fa-solid fa-gears"></i>
//                   </div>

//                   <div className="hero-body-item-content">
//                     <h2>Customized Industrial Solutions</h2>
//                   </div>
//                 </div>

//               </div>
//               {/* Hero Content Body End */}

//               {/* Hero Content Footer Start */}
//               <div
//                 className="hero-content-footer wow fadeInUp"
//                 data-wow-delay="0.6s"
//               >

//                 {/* Contact Button */}
//                 <div className="hero-btn">
//                   <Link
//                     to="/contact"
//                     className="btn-default btn-highlighted"
//                   >
//                     Contact Us
//                   </Link>
//                 </div>

//                 {/* Phone */}
//                 <div
//                   className="video-play-button"
//                   data-cursor-text="Call"
//                 >
//                   <a href="tel:+917299605040">
//                     <span className="bg-effect">
//                       <i className="fa-solid fa-phone"></i>
//                     </span>

//                     <p>+91 72996 05040</p>
//                   </a>
//                 </div>

//               </div>
//               {/* Hero Content Footer End */}

//             </div>
//             {/* Hero Content End */}

//           </div>
//         </div>
//       </div>

//       {/* Slider Dots */}
//       <div className="hero-slider-dots">
//         {images.map((_, index) => (
//           <button
//             key={index}
//             className={currentImage === index ? "active" : ""}
//             onClick={() => setCurrentImage(index)}
//             aria-label={`Go to slide ${index + 1}`}
//           />
//         ))}
//       </div>

//     </div>
//   );
// };

// export default Hero;


// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// const Hero = () => {
//   const slides = [
//     {
//       image: "/assets/images/hero-bg-1.jpg",
//       subtitle: "Best Solutions for Industries",
//       title: "Reliable Industrial Fabrication & Engineering Solutions",
//       description:
//         "Best Industries delivers dependable fabrication and engineering solutions for diverse industrial requirements. From general and sheet metal fabrication to structural and heavy fabrication, we provide quality workmanship, precision, and customized solutions for every project.",
//     },
//     {
//       image: "/assets/images/hero-bg-2.jpg",
//       subtitle: "Precision Engineering Solutions",
//       title: "Advanced Fabrication Built for Industrial Performance",
//       description:
//         "We provide high-quality fabrication and engineering services designed to meet demanding industrial requirements with precision, reliability, and professional workmanship.",
//     },
//     {
//       image: "/assets/images/hero-bg-3.jpg",
//       subtitle: "Quality. Precision. Reliability.",
//       title: "Customized Industrial Fabrication Solutions",
//       description:
//         "From structural fabrication to sheet metal and heavy fabrication, our experienced team delivers customized solutions that meet your project requirements.",
//     },
//   ];

//   const [currentSlide, setCurrentSlide] = useState(0);

//   // Automatic slider
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => {
//         if (prev === slides.length - 1) {
//           return 0;
//         }

//         return prev + 1;
//       });
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [slides.length]);

//   // Previous slide
//   const previousSlide = () => {
//     setCurrentSlide((prev) => {
//       if (prev === 0) {
//         return slides.length - 1;
//       }

//       return prev - 1;
//     });
//   };

//   // Next slide
//   const nextSlide = () => {
//     setCurrentSlide((prev) => {
//       if (prev === slides.length - 1) {
//         return 0;
//       }

//       return prev + 1;
//     });
//   };

//   return (
//     <div className="hero dark-section">

//       {/* =========================================
//           SLIDES
//       ========================================= */}
//       <div className="hero-slider">

//         {slides.map((slide, index) => (
//           <div
//             key={index}
//             className={`hero-slide ${
//               currentSlide === index ? "active" : ""
//             }`}
//           >

//             {/* Background Image */}
//             <img
//               src={slide.image}
//               alt={slide.title}
//               className="hero-slide-image"
//             />

//             {/* Dark Overlay */}
//             <div className="hero-slide-overlay"></div>

//             {/* =================================
//                 CONTENT
//             ================================= */}
//             <div className="container">

//               <div className="row">

//                 <div className="col-xl-7">

//                   <div className="hero-content">

//                     {/* Section Title */}
//                     <div className="section-title">

//                       <span className="section-sub-title">
//                         {slide.subtitle}
//                       </span>

//                       <h1
//                         className="text-anime-style-3"
//                         data-cursor="-opaque"
//                       >
//                         {slide.title}
//                       </h1>

//                       <p>
//                         {slide.description}
//                       </p>

//                     </div>


//                     {/* =================================
//                         HERO BODY
//                     ================================= */}
//                     <div className="hero-content-body">

//                       {/* Item 1 */}
//                       <div className="hero-body-item">

//                         <div className="icon-box">
//                           <i className="fa-solid fa-industry"></i>
//                         </div>

//                         <div className="hero-body-item-content">
//                           <h2>
//                             Precision Fabrication
//                           </h2>
//                         </div>

//                       </div>


//                       {/* Item 2 */}
//                       <div className="hero-body-item">

//                         <div className="icon-box">
//                           <i className="fa-solid fa-gears"></i>
//                         </div>

//                         <div className="hero-body-item-content">
//                           <h2>
//                             Customized Industrial Solutions
//                           </h2>
//                         </div>

//                       </div>

//                     </div>


//                     {/* =================================
//                         HERO FOOTER
//                     ================================= */}
//                     <div className="hero-content-footer">

//                       {/* Contact Button */}
//                       <div className="hero-btn">

//                         <Link
//                           to="/contact"
//                           className="btn-default btn-highlighted"
//                         >
//                           Contact Us
//                         </Link>

//                       </div>


//                       {/* Phone */}
//                       <div
//                         className="video-play-button"
//                         data-cursor-text="Call"
//                       >

//                         <a href="tel:+917299605040">

//                           <span className="bg-effect">
//                             <i className="fa-solid fa-phone"></i>
//                           </span>

//                           <p>
//                             +91 72996 05040
//                           </p>

//                         </a>

//                       </div>

//                     </div>

//                   </div>

//                 </div>

//               </div>

//             </div>

//           </div>
//         ))}

//       </div>


//       {/* =========================================
//           PREVIOUS BUTTON
//       ========================================= */}
//       <button
//         type="button"
//         className="hero-slider-prev"
//         onClick={previousSlide}
//         aria-label="Previous slide"
//       >
//         <i className="fa-solid fa-arrow-left"></i>
//       </button>


//       {/* =========================================
//           NEXT BUTTON
//       ========================================= */}
//       <button
//         type="button"
//         className="hero-slider-next"
//         onClick={nextSlide}
//         aria-label="Next slide"
//       >
//         <i className="fa-solid fa-arrow-right"></i>
//       </button>


//       {/* =========================================
//           SLIDER DOTS
//       ========================================= */}
//       <div className="hero-slider-dots">

//         {slides.map((_, index) => (
//           <button
//             key={index}
//             type="button"
//             className={
//               currentSlide === index ? "active" : ""
//             }
//             onClick={() => setCurrentSlide(index)}
//             aria-label={`Go to slide ${index + 1}`}
//           />
//         ))}

//       </div>

//     </div>
//   );
// };

// export default Hero;










import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import heroImage1 from "../images/hero-bg-image.png";
import heroImage2 from "../images/2.png";
import heroImage3 from "../images/3.png";

const Hero = () => {

  // ==========================================
  // THREE SLIDES
  // EACH SLIDE HAS DIFFERENT CONTENT
  // ==========================================
  const slides = [
    {
      image: heroImage1,

      subtitle: "Best Solutions for Industries",

      title:
        "Reliable Industrial Fabrication & Engineering Solutions",

      description:
        "Best Industries delivers dependable fabrication and engineering solutions for diverse industrial requirements. From general and sheet metal fabrication to structural and heavy fabrication, we provide quality workmanship, precision, and customized solutions for every project.",

      feature1: "Precision Fabrication",

      feature2: "Customized Industrial Solutions",
    },

    {
      image: heroImage2,

      subtitle: "Advanced Fabrication Solutions",

      title:
        "High-Quality Sheet Metal & General Fabrication",

      description:
        "Our skilled team provides accurate and reliable sheet metal and general fabrication services. We focus on precision, durability, and quality workmanship to deliver solutions that meet demanding industrial requirements.",

      feature1: "Sheet Metal Fabrication",

      feature2: "Quality Workmanship",
    },

    {
      image: heroImage3,

      subtitle: "Heavy Industrial Fabrication",

      title:
        "Strong Structural & Heavy Fabrication Solutions",

      description:
        "From structural components to heavy-duty fabrication, we provide robust industrial solutions designed for strength, performance, and long-term reliability. Every project is completed with attention to detail and precision.",

      feature1: "Heavy Fabrication",

      feature2: "Structural Engineering",
    },
  ];


  const [currentSlide, setCurrentSlide] = useState(0);


  // ==========================================
  // AUTOMATIC SLIDER
  // ==========================================
  useEffect(() => {

    const interval = setInterval(() => {

      setCurrentSlide((prev) => {
        return (prev + 1) % slides.length;
      });

    }, 5000);

    return () => clearInterval(interval);

  }, []);


  // ==========================================
  // PREVIOUS SLIDE
  // ==========================================
  const handlePrevious = () => {

    setCurrentSlide((prev) => {

      if (prev === 0) {
        return slides.length - 1;
      }

      return prev - 1;

    });

  };


  // ==========================================
  // NEXT SLIDE
  // ==========================================
  const handleNext = () => {

    setCurrentSlide((prev) => {

      if (prev === slides.length - 1) {
        return 0;
      }

      return prev + 1;

    });

  };


  // Current slide data
  const slide = slides[currentSlide];


  return (

    <div
      className="hero dark-section"
      style={{
        backgroundImage: `url(${slide.image})`,
        transition: "background-image 0.8s ease-in-out",
      }}
    >

      <div className="container">

        <div className="row">

          <div className="col-xl-7">

            {/* ==========================================
                HERO CONTENT
            ========================================== */}

            <div
              className="hero-content"
              key={currentSlide}
            >

              {/* ==========================================
                  SECTION TITLE
              ========================================== */}

              <div className="section-title">

                <span className="section-sub-title wow fadeInUp">
                  {slide.subtitle}
                </span>


                <h1
                  className="text-anime-style-3"
                  data-cursor="-opaque"
                >
                  {slide.title}
                </h1>


                <p
                  className="wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  {slide.description}
                </p>

              </div>


              {/* ==========================================
                  HERO CONTENT BODY
              ========================================== */}

              <div
                className="hero-content-body wow fadeInUp"
                data-wow-delay="0.4s"
              >

                {/* Feature 1 */}
                <div className="hero-body-item">

                  <div className="icon-box">
                    <i className="fa-solid fa-industry"></i>
                  </div>

                  <div className="hero-body-item-content">

                    <h2>
                      {slide.feature1}
                    </h2>

                  </div>

                </div>


                {/* Feature 2 */}
                <div className="hero-body-item">

                  <div className="icon-box">
                    <i className="fa-solid fa-gears"></i>
                  </div>

                  <div className="hero-body-item-content">

                    <h2>
                      {slide.feature2}
                    </h2>

                  </div>

                </div>

              </div>


              {/* ==========================================
                  HERO FOOTER
              ========================================== */}

              <div
                className="hero-content-footer wow fadeInUp"
                data-wow-delay="0.6s"
              >

                {/* Contact Button */}
                <div className="hero-btn">

                  <Link
                    to="/contact"
                    className="btn-default btn-highlighted"
                  >
                    Contact Us
                  </Link>

                </div>


                {/* Phone */}
                <div
                  className="video-play-button"
                  data-cursor-text="Call"
                >

                  <a href="tel:+917299605040">

                    <span className="bg-effect">

                      <i className="fa-solid fa-phone"></i>

                    </span>

                    <p>
                      +91 72996 05040
                    </p>

                  </a>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>


      {/* ==========================================
          LEFT ARROW
      ========================================== */}

      <button
        type="button"
        className="hero-slider-arrow hero-slider-prev"
        onClick={handlePrevious}
        aria-label="Previous slide"
      >

        <i className="fa-solid fa-chevron-left"></i>

      </button>


      {/* ==========================================
          RIGHT ARROW
      ========================================== */}

      <button
        type="button"
        className="hero-slider-arrow hero-slider-next"
        onClick={handleNext}
        aria-label="Next slide"
      >

        <i className="fa-solid fa-chevron-right"></i>

      </button>


      {/* ==========================================
          SLIDER DOTS
      ========================================== */}

      <div className="hero-slider-dots">

        {slides.map((_, index) => (

          <button
            key={index}
            type="button"
            className={
              currentSlide === index
                ? "active"
                : ""
            }
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />

        ))}

      </div>

    </div>

  );
};

export default Hero;
