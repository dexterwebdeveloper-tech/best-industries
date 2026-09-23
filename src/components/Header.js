


// import React, { useState } from 'react';
// import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

// const Header = () => {
//   const [isNavOpen, setIsNavOpen] = useState(false);

//   const toggleNav = () => {
//     setIsNavOpen(!isNavOpen);
//   };

//   return (
//     <header className="header">

//       {/* ================= TOP HEADER ================= */}
//       <div className="header-top bgg-darkk pt-md-2">
//         <div className="container">
//           <div className="row justify-content-center justify-content-xl-between align-items-center">

//             <div className="col-auto">
//               <div className="header-top-contact">
//                 <ul className="anchor d-md-flex align-items-center">

//                   {/* Phone 1 */}
//                   <li className="px-md-5 fw-bold">
//                     <a className="text-white" href="tel:+917299605040">
//                       <i className="fas fa-phone-volume text-white"></i>
//                       &nbsp;+91 7299605040
//                     </a>
//                   </li>

//                   {/* Phone 2 */}
//                   {/* <li className="px-md-5 fw-bold">
//                     <a className="text-white" href="tel:+917358705040">
//                       <i className="fas fa-phone-volume text-white"></i>
//                       &nbsp;+91 7358705040
//                     </a>
//                   </li> */}

//  <li className="px-md-5 fw-bold">
//                     <a className="text-white" href="tel:+919566088070">
//                       <i className="fas fa-phone-volume text-white"></i>
//                       &nbsp;+91 9566088070
//                     </a>
//                   </li>

//                   {/* Email */}
//                   <li className="px-md-5">
//                     <a
//                       className="text-white"
//                       href="mailto:bestindustries@yahoo.com"
//                     >
//                       <i className="far fa-envelope text-white"></i>
//                       <span className="text-white fw-bold">
//                         &nbsp;bestindustries@yahoo.com
//                       </span>
//                     </a>
//                   </li>

//                   {/* Social Media */}
//                   {/* <li className="d-flex gap-3">

//                     <a
//                       href="https://www.instagram.com/"
//                       target="_blank"
//                       rel="noreferrer"
//                     >
//                       <i className="fab fa-instagram text-white"></i>
//                     </a>

//                     <a
//                       href="https://www.facebook.com/"
//                       target="_blank"
//                       rel="noreferrer"
//                     >
//                       <i className="fab fa-facebook-f text-white"></i>
//                     </a>

//                     <a
//                       href="https://x.com/"
//                       target="_blank"
//                       rel="noreferrer"
//                     >
//                       <i className="fab fa-twitter text-white"></i>
//                     </a>

//                     <a
//                       href="https://in.pinterest.com/"
//                       target="_blank"
//                       rel="noreferrer"
//                     >
//                       <i className="fab fa-pinterest-p text-white"></i>
//                     </a>

//                   </li> */}

//                 </ul>
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>


//       {/* ================= MAIN NAVIGATION ================= */}
//       <div className="main-navigation">

//         <Navbar expand="lg">

//           <Container>

//             {/* Logo */}
//             <Navbar.Brand href="/">
//               <img
//                 src="/images/logo.png"
//                 alt="Best Industries Logo"
//                 className='logoo '
//               /> 
//             </Navbar.Brand>

//             {/* Mobile Toggle */}
//             <Navbar.Toggle
//               aria-controls="main_nav"
//               onClick={toggleNav}
//             >
//               <i className="fas fa-bars darkcolorr"></i>
//             </Navbar.Toggle>


//             {/* Navigation Menu */}
//             <Navbar.Collapse
//               id="main_nav"
//               className={isNavOpen ? "show" : ""}
//             >

//               <Nav className="mr-auto">

//                 {/* 1. HOME */}
//                 <Nav.Link
//                   href="/"
//                   className="fw-bold nav-item"
//                 >
//                   Home
//                 </Nav.Link>

 

//                 {/* 2. ABOUT US */}
//                               <NavDropdown title="About" id="about-dropdown" className='fw-bold'>
//   <NavDropdown.Item href="/about-us">About Us</NavDropdown.Item>
//   <NavDropdown.Item href="/term-condition">Terms & Condition</NavDropdown.Item>
//   <NavDropdown.Item href="/privacy-policy">Privacy Policy</NavDropdown.Item>
// </NavDropdown>

//                 {/* 3. PRODUCTS */}
//                 <Nav.Link
//                   href="/products"
//                   className="fw-bold nav-item"
//                 >
//                   Products
//                 </Nav.Link>


//                 {/* 4. SERVICES */}
//                 {/* <Nav.Link
//                   href="/services"
//                   className="fw-bold nav-item"
//                 >
//                   Services
//                 </Nav.Link> */}


//                 {/* 5. FACILITY */}
//                 <Nav.Link
//                   href="/facility"
//                   className="fw-bold nav-item"
//                 >
//                   Facility
//                 </Nav.Link>


//                 {/* 6. PHOTO GALLERY */}
//                 <Nav.Link
//                   href="/photo-gallery"
//                   className="fw-bold nav-item"
//                 >
//                   Gallery
//                 </Nav.Link>


//                 {/* 7. OUR CLIENTS */}
//                 {/* <Nav.Link
//                   href="/our-clients"
//                   className="fw-bold nav-item"
//                 >
//                   Clients
//                 </Nav.Link> */}


//                 {/* 8. QUALITY & SAFETY */}
//                 {/* <Nav.Link
//                   href="/quality-safety"
//                   className="fw-bold nav-item"
//                 >
//                   Quality & Safety
//                 </Nav.Link> */}


//                 {/* 9. CATALOG */}
//                 <Nav.Link
//                   href="/catalog"
//                   className="fw-bold nav-item"
//                 >
//                   Catalog
//                 </Nav.Link>


//                 {/* 10. CAREER */}
//                 <Nav.Link
//                   href="/career"
//                   className="fw-bold nav-item"
//                 >
//                   Career
//                 </Nav.Link>

//  <Nav.Link
//                   href="/Enquiry"
//                   className="fw-bold nav-item"
//                 >
//                   Enquiry
//                 </Nav.Link>

               
//  <Nav.Link
//                   href="/contact-us"
//                   className="fw-bold nav-item"
//                 >
//                   Contact
//                 </Nav.Link>

//                              {/* <NavDropdown title="Contact" id="contact-dropdown" className='fw-bold'>
//                   <NavDropdown.Item href="/contact-us" className='fw-bold nav-item'>Contact</NavDropdown.Item>
//                   <NavDropdown.Item href="/Enquiry" className='fw-bold '>Enquiry</NavDropdown.Item>
//                 </NavDropdown> */}

//               </Nav>

//             </Navbar.Collapse>

//           </Container>

//         </Navbar>

//       </div>

//     </header>
//   );
// };

// export default Header;



import React, { useState } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
} from "react-bootstrap";

import "./Header.css";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const closeMenu = () => {
    setIsNavOpen(false);
  };

  return (
    <header className="bi-header">

      {/* =====================================================
          TOP CONTACT BAR
      ===================================================== */}
      <div className="bi-header-top">

        <Container>

          <div className="bi-header-top-inner">

            {/* Left */}
            <div className="bi-header-top-left">

              <span className="bi-header-top-label">
                <i className="fa-solid fa-industry"></i>
                Industrial Solutions
              </span>

              <span className="bi-header-top-divider"></span>

              <span className="bi-header-top-location">
                <i className="fa-solid fa-location-dot"></i>
                Ambattur Industrial Estate, Chennai
              </span>

            </div>


            {/* Right */}
            <div className="bi-header-top-right">

              {/* Phone 1 */}
              <a
                href="tel:+917299605040"
                className="bi-header-contact-link fw-bold"
              >
                <i className="fa-solid fa-phone"></i>

                <span>
                  +91 72996 05040
                </span>
              </a>


              <span className="bi-header-top-divider"></span>


              {/* Phone 2 */}
              <a
                href="tel:+919566088070"
                className="bi-header-contact-link fw-bold"
              >
                <i className="fa-solid fa-mobile-screen-button"></i>

                <span>
                  +91 95660 88070
                </span>
              </a>


              <span className="bi-header-top-divider"></span>


              {/* Email */}
              <a
                href="mailto:bestindustries@yahoo.com"
                className="bi-header-contact-link bi-header-email fw-bold"
              >
                <i className="fa-regular fa-envelope"></i>

                <span>
                  bestindustries@yahoo.com
                </span>
              </a>

            </div>

          </div>

        </Container>

      </div>


      {/* =====================================================
          MAIN NAVIGATION
      ===================================================== */}
      <div className="bi-header-main">

        <Navbar
          expand="lg"
          expanded={isNavOpen}
          className="bi-header-navbar"
        >

          <Container>

            {/* =================================================
                LOGO
            ================================================= */}
            <Navbar.Brand
              href="/"
              className="bi-header-brand"
              onClick={closeMenu}
            >

              <div className="bi-header-logo-box">

                <img
                  src="/images/logo.png"
                  alt="Best Industries"
                  className="bi-header-logo"
                />

              </div>

            </Navbar.Brand>


            {/* =================================================
                MOBILE TOGGLE
            ================================================= */}
            <Navbar.Toggle
              aria-controls="bi-main-navigation"
              onClick={() => setIsNavOpen(!isNavOpen)}
              className={`bi-header-toggle ${
                isNavOpen ? "bi-header-toggle-active" : ""
              }`}
            >

              <span></span>
              <span></span>
              <span></span>

            </Navbar.Toggle>


            {/* =================================================
                NAVIGATION
            ================================================= */}
            <Navbar.Collapse
              id="bi-main-navigation"
              className="bi-header-collapse"
            >

              <Nav className="bi-header-nav ms-auto fw-bold">

                {/* HOME */}
                <Nav.Link
                  href="/"
                  className="bi-header-nav-link fw-bold"
                  onClick={closeMenu}
                >
                  Home
                </Nav.Link>


                {/* ABOUT */}
                <NavDropdown
                  title="About"
                  id="bi-about-dropdown"
                  className="bi-header-dropdown"
                >

                  <NavDropdown.Item
                    href="/about-us"
                    onClick={closeMenu}
                  >
                    About Us
                  </NavDropdown.Item>

                  <NavDropdown.Item
                    href="/term-condition"
                    onClick={closeMenu}
                  >
                    Terms &amp; Condition
                  </NavDropdown.Item>

                  <NavDropdown.Item
                    href="/privacy-policy"
                    onClick={closeMenu}
                  >
                    Privacy Policy
                  </NavDropdown.Item>

                </NavDropdown>


                {/* PRODUCTS */}
                <Nav.Link
                  href="/products"
                  className="bi-header-nav-link"
                  onClick={closeMenu}
                >
                  Products
                </Nav.Link>


                {/* FACILITY */}
                <Nav.Link
                  href="/facility"
                  className="bi-header-nav-link"
                  onClick={closeMenu}
                >
                  Facility
                </Nav.Link>


                {/* GALLERY */}
                <Nav.Link
                  href="/photo-gallery"
                  className="bi-header-nav-link"
                  onClick={closeMenu}
                >
                  Gallery
                </Nav.Link>


                {/* CATALOG */}
                <Nav.Link
                  href="/catalog"
                  className="bi-header-nav-link"
                  onClick={closeMenu}
                >
                  Catalog
                </Nav.Link>


                {/* CAREER */}
                <Nav.Link
                  href="/career"
                  className="bi-header-nav-link"
                  onClick={closeMenu}
                >
                  Career
                </Nav.Link>


                {/* ENQUIRY */}
                <Nav.Link
                  href="/Enquiry"
                  className="bi-header-nav-link"
                  onClick={closeMenu}
                >
                  Enquiry
                </Nav.Link>


                {/* CONTACT BUTTON */}
                <Nav.Link
                  href="/contact-us"
                  className="bi-header-contact-btn"
                  onClick={closeMenu}
                >
                  <span>Contact Us</span>

                  <i className="fa-solid fa-arrow-right"></i>
                </Nav.Link>

              </Nav>

            </Navbar.Collapse>

          </Container>

        </Navbar>

      </div>

    </header>
  );
};

export default Header;