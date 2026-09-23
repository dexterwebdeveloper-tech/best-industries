import React from "react";
import { Link } from "react-router-dom";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about-us" },
  { name: "Our Services", path: "/services" },
  { name: "Our Products", path: "/products" },
  { name: "Our Gallery", path: "/photo-gallery" },
  { name: "Contact Us", path: "/contact-us" },
];

// const services = [
//   "General Fabrication",
//   "Sheet Metal Fabrication",
//   "Structural Fabrication",
//   "Heavy Fabrication",
//   "Jigs & Fixtures",
//   "Laser Cutting & Folding",
//   "SPM Machines & Spares",
//   "Conveyors",
// ];

const Footer = () => {
  return (
    <footer className="main-footer dark-section">

      <div className="container">

        <div className="row">

          {/* About Footer */}
          <div className="col-xl-4">

            <div className="about-footer">

              <div className="footer-header">
 <div className="footer-logo">

                <Link to="/">
                  <img
                    src="/images/logo.png"
                    alt="Best Industries"
                  />
                </Link>
  <div className="footer-factory-address">

              
            </div>
              </div>
                <div className="section-title">
                  <h2>
                    Best Solutions for Industries
                  </h2>
                </div>

                <div className="footer-social-links">

                  <ul>

                    {/* Replace # with actual social media URLs when available */}

                    <li>
                      <a href="#" aria-label="Facebook">
                        <i className="fa-brands fa-facebook-f"></i>
                      </a>
                    </li>

                    <li>
                      <a href="#" aria-label="Instagram">
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                    </li>

                    <li>
                      <a href="#" aria-label="LinkedIn">
                        <i className="fa-brands fa-linkedin-in"></i>
                      </a>
                    </li>

                  </ul>

                </div>

              </div>

              {/* <div className="footer-logo">

                <Link to="/">
                  <img
                    src="/images/logo.png"
                    alt="Best Industries"
                  />
                </Link>
  <div className="footer-factory-address">

              
            </div>
              </div> */}
<p className="text-white">
                <strong>Factory Address:</strong>{" "}
                No 431, 7th Street (North Phase), SECTOR-1, Ambattur Industrial Estate, Sidco Industrial Estate, Ambattur, Chennai, Tamil Nadu 600098
              </p>

            </div>

          </div>

          {/* Footer Content */}
          <div className="col-xl-8">

            <div className="footer-content-box">

              {/* Newsletter */}
              {/* <div className="footer-newsletter-box">

                <div className="footer-newsletter-box-title">

                  <h2>
                    Get In Touch With Best Industries
                  </h2>

                </div>

                <div className="footer-newsletter-form">

                  <form>

                    <div className="form-group">

                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter Email Address*"
                        required
                      />

                      <button
                        type="submit"
                        className="newsletter-btn"
                        aria-label="Subscribe"
                      >

                        <img
                          src="/images/arrow-white.svg"
                          alt="Submit"
                        />

                      </button>

                    </div>

                  </form>

                </div>

              </div> */}

              {/* Footer Links */}
              <div className="footer-links-box">

                {/* Quick Links */}
                <div className="footer-links footer-quick-links">

                  <h2>
                    Quick Links
                  </h2>

                  <ul>

                    {quickLinks.map((item, index) => (

                      <li key={index}>

                        <Link to={item.path}>
                          {item.name}
                        </Link>

                      </li>

                    ))}

                  </ul>

                </div>

                {/* Services */}
                {/* <div className="footer-links footer-service-links">

                  <h2>
                    Our Services
                  </h2>

                  <ul>

                    {services.map((service, index) => (

                      <li key={index}>

                        <Link to="/services">
                          {service}
                        </Link>

                      </li>

                    ))}

                  </ul>

                </div> */}

                {/* Contact */}
                <div className="footer-links footer-contact-links">

                  <h2>
                    Contact Info
                  </h2>

                  <ul>

                    {/* Phone */}
                    <li>
                      <span>
                        Phone:
                      </span>

                      <a href="tel:+914448554050">
                        044-48554050
                      </a>
                    </li>

                    {/* Mobile */}
                    <li>
                      <span>
                        Mobile:
                      </span>

                      <a href="tel:+917299605040">
                        +91 72996 05040
                      </a>
                    </li>

                    {/* Email */}
                    <li>
                      <span>
                        E-mail:
                      </span>

                      <a href="mailto:bestindustries@yahoo.com">
                        bestindustries@yahoo.com
                      </a>
                    </li>
 <span className="text-white">
                        Office:
                      </span>
                      
                    {/* Address */}
                    <h6 className="text-white">Best Industries</h6>
                    <li>
                     

No 431, 7th Street (North Phase), SECTOR-1, Ambattur Industrial Estate, Sidco Industrial Estate, Ambattur, Chennai, Tamil Nadu 600098                    </li>

                  </ul>

                </div>

              </div>

            </div>

          </div>

          {/* Factory Address */}
          <div className="col-xl-12">

          

          </div>

          {/* Copyright */}
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

        </div>

      </div>

    </footer>
  );
};

export default Footer;
