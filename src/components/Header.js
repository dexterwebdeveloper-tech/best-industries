


import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="header">

      {/* ================= TOP HEADER ================= */}
      <div className="header-top bgg-darkk pt-md-2">
        <div className="container">
          <div className="row justify-content-center justify-content-xl-between align-items-center">

            <div className="col-auto">
              <div className="header-top-contact">
                <ul className="anchor d-md-flex align-items-center">

                  {/* Phone 1 */}
                  <li className="px-md-5 fw-bold">
                    <a className="text-white" href="tel:+917299605040">
                      <i className="fas fa-phone-volume text-white"></i>
                      &nbsp;+91 7299605040
                    </a>
                  </li>

                  {/* Phone 2 */}
                  <li className="px-md-5 fw-bold">
                    <a className="text-white" href="tel:+917358705040">
                      <i className="fas fa-phone-volume text-white"></i>
                      &nbsp;+91 7358705040
                    </a>
                  </li>

 <li className="px-md-5 fw-bold">
                    <a className="text-white" href="tel:+919566088070">
                      <i className="fas fa-phone-volume text-white"></i>
                      &nbsp;+91 9566088070
                    </a>
                  </li>

                  {/* Email */}
                  <li className="px-md-5">
                    <a
                      className="text-white"
                      href="mailto:info@bestindustries.in"
                    >
                      <i className="far fa-envelope text-white"></i>
                      <span className="text-white fw-bold">
                        &nbsp;info@bestindustries.in
                      </span>
                    </a>
                  </li>

                  {/* Social Media */}
                  {/* <li className="d-flex gap-3">

                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-instagram text-white"></i>
                    </a>

                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-facebook-f text-white"></i>
                    </a>

                    <a
                      href="https://x.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-twitter text-white"></i>
                    </a>

                    <a
                      href="https://in.pinterest.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-pinterest-p text-white"></i>
                    </a>

                  </li> */}

                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>


      {/* ================= MAIN NAVIGATION ================= */}
      <div className="main-navigation">

        <Navbar expand="lg">

          <Container>

            {/* Logo */}
            <Navbar.Brand href="/">
              <img
                src="/images/logo.png"
                alt="Best Industries Logo"
              />
            </Navbar.Brand>

            {/* Mobile Toggle */}
            <Navbar.Toggle
              aria-controls="main_nav"
              onClick={toggleNav}
            >
              <i className="fas fa-bars darkcolorr"></i>
            </Navbar.Toggle>


            {/* Navigation Menu */}
            <Navbar.Collapse
              id="main_nav"
              className={isNavOpen ? "show" : ""}
            >

              <Nav className="mr-auto">

                {/* 1. HOME */}
                <Nav.Link
                  href="/"
                  className="fw-bold nav-item"
                >
                  Home
                </Nav.Link>

 

                {/* 2. ABOUT US */}
                              <NavDropdown title="About" id="about-dropdown" className='fw-bold'>
  <NavDropdown.Item href="/about-us">About Us</NavDropdown.Item>
  <NavDropdown.Item href="/term-condition">Terms & Condition</NavDropdown.Item>
  <NavDropdown.Item href="/privacy-policy">Privacy Policy</NavDropdown.Item>
</NavDropdown>

                {/* 3. PRODUCTS */}
                <Nav.Link
                  href="/products"
                  className="fw-bold nav-item"
                >
                  Products
                </Nav.Link>


                {/* 4. SERVICES */}
                <Nav.Link
                  href="/services"
                  className="fw-bold nav-item"
                >
                  Services
                </Nav.Link>


                {/* 5. FACILITY */}
                <Nav.Link
                  href="/facility"
                  className="fw-bold nav-item"
                >
                  Facility
                </Nav.Link>


                {/* 6. PHOTO GALLERY */}
                <Nav.Link
                  href="/photo-gallery"
                  className="fw-bold nav-item"
                >
                  Gallery
                </Nav.Link>


                {/* 7. OUR CLIENTS */}
                {/* <Nav.Link
                  href="/our-clients"
                  className="fw-bold nav-item"
                >
                  Clients
                </Nav.Link> */}


                {/* 8. QUALITY & SAFETY */}
                <Nav.Link
                  href="/quality-safety"
                  className="fw-bold nav-item"
                >
                  Quality & Safety
                </Nav.Link>


                {/* 9. CATALOG */}
                <Nav.Link
                  href="/catalog"
                  className="fw-bold nav-item"
                >
                  Catalog
                </Nav.Link>


                {/* 10. CAREER */}
                <Nav.Link
                  href="/career"
                  className="fw-bold nav-item"
                >
                  Career
                </Nav.Link>


               


                             <NavDropdown title="Contact" id="contact-dropdown" className='fw-bold'>
                  <NavDropdown.Item href="/contact-us" className='fw-bold nav-item'>Contact</NavDropdown.Item>
                  <NavDropdown.Item href="/Enquiry" className='fw-bold '>Enquiry</NavDropdown.Item>
                </NavDropdown>

              </Nav>

            </Navbar.Collapse>

          </Container>

        </Navbar>

      </div>

    </header>
  );
};

export default Header;
