// import React from "react";
// import { Link } from "react-router-dom";

// const quickLinks = [
//   { name: "Home", path: "/" },
//   { name: "About Us", path: "/about-us" },
//   { name: "Our Services", path: "/services" },
//   { name: "Our Products", path: "/products" },
//   { name: "Our Gallery", path: "/photo-gallery" },
//   { name: "Contact Us", path: "/contact-us" },
// ];

// // const services = [
// //   "General Fabrication",
// //   "Sheet Metal Fabrication",
// //   "Structural Fabrication",
// //   "Heavy Fabrication",
// //   "Jigs & Fixtures",
// //   "Laser Cutting & Folding",
// //   "SPM Machines & Spares",
// //   "Conveyors",
// // ];

// const Footer = () => {
//   return (
//     <footer className="main-footer dark-section">

//       <div className="container">

//         <div className="row">

//           {/* About Footer */}
//           <div className="col-xl-4">

//             <div className="about-footer">

//               <div className="footer-header">
//  <div className="footer-logo">

//                 <Link to="/">
//                   <img
//                     src="/images/logo.png"
//                     alt="Best Industries"
//                   />
//                 </Link>
//   <div className="footer-factory-address">

              
//             </div>
//               </div>
//                 <div className="section-title">
//                   <h2>
//                     Best Solutions for Industries
//                   </h2>
//                 </div>


// <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2959.9390525491244!2d80.1725812!3d13.107503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a527d98bbb14033%3A0xb1cfa37fef34e52!2sBEST%20INDUSTRIES!5e1!3m2!1sen!2sin!4v1790142557044!5m2!1sen!2sin" width="100%" height="250"  allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>

//                 <div className="footer-social-links">

//                   <ul>

//                     {/* Replace # with actual social media URLs when available */}

//                     <li>
//                       <a href="#" aria-label="Facebook">
//                         <i className="fa-brands fa-facebook-f"></i>
//                       </a>
//                     </li>

//                     <li>
//                       <a href="#" aria-label="Instagram">
//                         <i className="fa-brands fa-instagram"></i>
//                       </a>
//                     </li>

//                     <li>
//                       <a href="#" aria-label="LinkedIn">
//                         <i className="fa-brands fa-linkedin-in"></i>
//                       </a>
//                     </li>

//                   </ul>

//                 </div>

//               </div>

//               {/* <div className="footer-logo">

//                 <Link to="/">
//                   <img
//                     src="/images/logo.png"
//                     alt="Best Industries"
//                   />
//                 </Link>
//   <div className="footer-factory-address">

              
//             </div>
//               </div> */}
// <p className="text-white">
//                 <strong>Factory Address:</strong>{" "}
//                 No 431, 7th Street (North Phase), SECTOR-1, Ambattur Industrial Estate, Sidco Industrial Estate, Ambattur, Chennai, Tamil Nadu 600098
//               </p>

//             </div>



//           </div>

//           {/* Footer Content */}
//           <div className="col-xl-8">

//             <div className="footer-content-box">

//               {/* Newsletter */}
//               {/* <div className="footer-newsletter-box">

//                 <div className="footer-newsletter-box-title">

//                   <h2>
//                     Get In Touch With Best Industries
//                   </h2>

//                 </div>

//                 <div className="footer-newsletter-form">

//                   <form>

//                     <div className="form-group">

//                       <input
//                         type="email"
//                         className="form-control"
//                         placeholder="Enter Email Address*"
//                         required
//                       />

//                       <button
//                         type="submit"
//                         className="newsletter-btn"
//                         aria-label="Subscribe"
//                       >

//                         <img
//                           src="/images/arrow-white.svg"
//                           alt="Submit"
//                         />

//                       </button>

//                     </div>

//                   </form>

//                 </div>

//               </div> */}

//               {/* Footer Links */}
//               <div className="footer-links-box">

//                 {/* Quick Links */}
//                 <div className="footer-links footer-quick-links">

//                   <h2>
//                     Quick Links
//                   </h2>

//                   <ul>

//                     {quickLinks.map((item, index) => (

//                       <li key={index}>

//                         <Link to={item.path}>
//                           {item.name}
//                         </Link>

//                       </li>

//                     ))}

//                   </ul>

//                 </div>

//                 {/* Services */}
//                 {/* <div className="footer-links footer-service-links">

//                   <h2>
//                     Our Services
//                   </h2>

//                   <ul>

//                     {services.map((service, index) => (

//                       <li key={index}>

//                         <Link to="/services">
//                           {service}
//                         </Link>

//                       </li>

//                     ))}

//                   </ul>

//                 </div> */}

//                 {/* Contact */}
//                 <div className="footer-links footer-contact-links">

//                   <h2>
//                     Contact Info
//                   </h2>

//                   <ul>

//                     {/* Phone */}
//                     <li>
//                       <span>
//                         Phone:
//                       </span>

//                       <a href="tel:+914448554050">
//                         044-48554050
//                       </a>
//                     </li>

//                     {/* Mobile */}
//                     <li>
//                       <span>
//                         Mobile:
//                       </span>

//                       <a href="tel:+917299605040">
//                         +91 72996 05040
//                       </a>
//                     </li>

//                     {/* Email */}
//                     <li>
//                       <span>
//                         E-mail:
//                       </span>

//                       <a href="mailto:bestindustries@yahoo.com">
//                         bestindustries@yahoo.com
//                       </a>
//                     </li>
//  <span className="text-white">
//                         Office:
//                       </span>
                      
//                     {/* Address */}
//                     <h6 className="text-white">Best Industries</h6>
//                     <li>
                     

// No 431, 7th Street (North Phase), SECTOR-1, Ambattur Industrial Estate, Sidco Industrial Estate, Ambattur, Chennai, Tamil Nadu 600098                    </li>

//                   </ul>

//                 </div>

//               </div>

//             </div>

//           </div>

//           {/* Factory Address */}
//           <div className="col-xl-12">

          

//           </div>

//           {/* Copyright */}
  //         <div className="col-xl-12">

  //           <div className="footer-copyright-text">
  // <p className="copyright-text text-white">
  //             All Rights Reserved &copy;  <span className="darkcolorrr">Best Industries</span> <span id="date">{new Date().getFullYear()}</span>{' '}
  //               <span href="#"> Developed By </span> <a href="https://www.dexterintelligence.com/" className='d-inline' target="_blank" rel="noopener noreferrer">
  //               <span className="darkcolorrr">&nbsp;Dexter Intelligence</span>
  //             </a>
              
              
  //             </p>
          
  //           </div>

  //         </div>

//         </div>

//       </div>

//     </footer>
//   );
// };

// export default Footer;










import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about-us" },
  // { name: "Our Services", path: "/services" },
  { name: "Our Products", path: "/products" },
  { name: "Our Gallery", path: "/photo-gallery" },
  { name: "Contact Us", path: "/contact-us" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bi-footer">

      {/* =====================================================
          MAIN FOOTER
      ===================================================== */}
      <div className="bi-footer__main">

        <div className="container bi-footer__container">

          {/* Top Branding */}
          <div className="bi-footer__top">

            <div className="bi-footer__brand">
              <Link
                to="/"
                className="bi-footer__logo-link"
                aria-label="Best Industries Home"
              >
                <img
                  src="/images/logo.png"
                  alt="Best Industries"
                  className="bi-footer__logo"
                />
              </Link>

              <div className="bi-footer__brand-text">
                <span className="bi-footer__eyebrow">
                  BEST INDUSTRIES
                </span>

                <h2>
                  Best Solutions for Industries
                </h2>
              </div>
            </div>

            <div className="bi-footer__top-contact">
              <span>Need assistance?</span>

              <a href="tel:+917299605040">
                <i className="fa-solid fa-phone"></i>
                +91 72996 05040
              </a>
            </div>

          </div>


          {/* =====================================================
              MAIN GRID
          ===================================================== */}
          <div className="bi-footer__grid">

            {/* About */}
            <div className="bi-footer__column bi-footer__about">

              <div className="bi-footer__heading">
                <span></span>
                <h3>About Best Industries</h3>
              </div>

              <p className="bi-footer__description">
                Best Industries provides dependable industrial solutions
                focused on quality workmanship, precision, reliability and
                customer satisfaction.
              </p>

              <div className="bi-footer__address-card">

                <div className="bi-footer__address-icon">
                  <i className="fa-solid fa-location-dot"></i>
                </div>

                <div>
                  <span className="bi-footer__small-title">
                    Factory &amp; Office
                  </span>
                       <span className="bi-footer__eyebrow">
                  BEST INDUSTRIES
                </span>

                  <p>
                    No 431, 7th Street (North Phase), Sector-1,
                    Ambattur Industrial Estate, Sidco Industrial Estate,
                    Ambattur, Chennai, Tamil Nadu 600098
                  </p>
                </div>

              </div>


              {/* Social */}
              {/* <div className="bi-footer__social">

                <a
                  href="#"
                  aria-label="Facebook"
                  className="bi-footer__social-link"
                >
                  <i className="fa-brands fa-facebook-f"></i>
                </a>

                <a
                  href="#"
                  aria-label="Instagram"
                  className="bi-footer__social-link"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>

                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="bi-footer__social-link"
                >
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>

              </div> */}

            </div>


            {/* Quick Links */}
            <div className="bi-footer__column bi-footer__links-column">

              <div className="bi-footer__heading">
                <span></span>
                <h3>Quick Links</h3>
              </div>

              <ul className="bi-footer__links">

                {quickLinks.map((item) => (
                  <li key={item.path}>

                    <Link to={item.path}>

                      <span className="bi-footer__link-arrow">
                        <i className="fa-solid fa-angle-right"></i>
                      </span>

                      {item.name}

                    </Link>

                  </li>
                ))}

              </ul>

            </div>


            {/* Contact */}
            <div className="bi-footer__column bi-footer__contact">

              <div className="bi-footer__heading">
                <span></span>
                <h3>Contact Info</h3>
              </div>


              <a
                href="tel:+914448554050"
                className="bi-footer__contact-item"
              >

                <div className="bi-footer__contact-icon">
                  <i className="fa-solid fa-phone-volume"></i>
                </div>

                <div>
                  <span>Phone</span>
                  <strong>044-48554050</strong>
                </div>

              </a>


              <a
                href="tel:+917299605040"
                className="bi-footer__contact-item"
              >

                <div className="bi-footer__contact-icon">
                  <i className="fa-solid fa-mobile-screen-button"></i>
                </div>

                <div>
                  <span>Mobile</span>
                  <strong>+91 72996 05040</strong>
                </div>

              </a>


              <a
                href="mailto:bestindustries@yahoo.com"
                className="bi-footer__contact-item"
              >

                <div className="bi-footer__contact-icon">
                  <i className="fa-solid fa-envelope"></i>
                </div>

                <div>
                  <span>Email Address</span>
                  <strong>bestindustries@yahoo.com</strong>
                </div>

              </a>

            </div>


            {/* Google Map */}
            <div className="bi-footer__column bi-footer__location">

              <div className="bi-footer__heading">
                <span></span>
                <h3>Our Location</h3>
              </div>

              <div className="bi-footer__map">

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2959.9390525491244!2d80.1725812!3d13.107503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a527d98bbb14033%3A0xb1cfa37fef34e52!2sBEST%20INDUSTRIES!5e1!3m2!1sen!2sin!4v1790142557044!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="Best Industries Location"
                ></iframe>

              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Best+Industries+Ambattur+Chennai"
                target="_blank"
                rel="noopener noreferrer"
                className="bi-footer__map-button"
              >
                <i className="fa-solid fa-location-arrow"></i>
                View on Google Maps
              </a>

            </div>

          </div>

        </div>

      </div>


      {/* =====================================================
          COPYRIGHT
      ===================================================== */}
   


                <div className="col-xl-12">

            <div className="footer-copyright-text">
  <p className="copyright-text text-white">
              All Rights Reserved &copy;  <span className="darkcolorrr">Best Industries</span> <span id="date">{new Date().getFullYear()}</span>{' '}
                <span href="#"> Developed By </span> <a href="https://www.dexterintelligence.com/" className='d-inline' target="_blank" rel="noopener noreferrer">
                <span className="darkcolorrr">&nbsp;Dexter Intelligence</span>
              </a>
              
              
              </p>
          
            </div>

          </div>

    </footer>
  );
};

export default Footer;
