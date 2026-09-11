import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="container">
        <div className="row">

          {/* =========================================
              LEFT SIDE
          ========================================= */}
          <div className="col-xl-6">
            <div className="about-us-image-box wow fadeInUp">

              {/* About Image */}
              <div className="about-us-image">
                <figure className="image-anime">
                  <img
                    src="/images/about/3.jpeg"
                    alt="Best Industries manufacturing facility"
                  />
                </figure>
              </div>

              {/* Company Highlight Box */}
              <div className="about-us-review-box">

                <div className="about-us-review-box-header">
                  <h2>
                    <span className="counter">2015</span>
                  </h2>

                  <span className="google-rating-star">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </span>
                </div>

                <div className="about-us-review-box-body">

                  {/* <div className="satisfy-client-images">

                    <div className="satisfy-client-image">
                      <figure className="image-anime">
                        <img
                          src="/images/author-1.jpg"
                          alt="Best Industries team"
                        />
                      </figure>
                    </div>

                    <div className="satisfy-client-image">
                      <figure className="image-anime">
                        <img
                          src="/images/author-2.jpg"
                          alt="Best Industries team"
                        />
                      </figure>
                    </div>

                    <div className="satisfy-client-image">
                      <figure className="image-anime">
                        <img
                          src="/images/author-3.jpg"
                          alt="Best Industries team"
                        />
                      </figure>
                    </div>

                    <div className="satisfy-client-image add-more">
                      <h2>
                        <span className="counter">20</span>
                      </h2>
                    </div>

                  </div> */}

                  <div className="satisfy-client-content">
                    <p>
                      Team Members Working Together
                    </p>
                  </div>

                </div>
              </div>

            </div>
          </div>


          {/* =========================================
              RIGHT SIDE
          ========================================= */}
          <div className="col-xl-6">

            <div className="about-us-content">

              {/* Section Title */}
              <div className="section-title">

                <span className="section-sub-title wow fadeInUp">
                  About Best Industries
                </span>

                <h2
                  className="text-anime-style-3"
                  data-cursor="-opaque"
                >
                  Turning Complex Industrial Needs Into Practical Solutions
                </h2>

                <p
                  className="wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  Welcome to Best Industries. We are committed to providing
                  quality industrial products and services by understanding
                  the requirements of our clients and developing practical
                  solutions for their complex needs.
                </p>

                <p
                  className="wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  Established in 2015 under the leadership of our CEO,
                  Mr. Shanmugam Subrayalu, Best Industries focuses on
                  fabrication, industrial spares, automobile spares,
                  special purpose machines, jigs and fixtures, laser
                  cutting, folding and conveyor solutions.
                </p>

              </div>


              {/* =========================================
                  BODY
              ========================================= */}
              <div
                className="about-us-body wow fadeInUp"
                data-wow-delay="0.4s"
              >

                <div className="about-us-body-content">

                  <div className="about-us-body-list">

                    <h3>
                      Understanding Your Need. Building Your Solution.
                    </h3>

                    <ul>
                      <li>
                        Customer-focused industrial solutions
                      </li>

                      <li>
                        General, sheet, structural and heavy fabrication
                      </li>

                      <li>
                        Special purpose machines and industrial spares
                      </li>

                      <li>
                        Precision laser cutting and folding
                      </li>

                      <li>
                        Jigs, fixtures and conveyor solutions
                      </li>
                    </ul>

                  </div>


                  {/* Button */}
                  <div className="about-us-btn">
                    <Link
                      to="/about"
                      className="btn-default"
                    >
                      Discover Best Industries
                    </Link>
                  </div>

                </div>


                {/* =========================================
                    COMPANY INFORMATION
                ========================================= */}
                <div className="about-experience-box">

                  <div className="about-experience-content">

                    <h2>
                      <span className="counter">11</span>+
                    </h2>

                    <p>
                      Years Of Building Industrial Solutions
                    </p>

                  </div>


                  {/* Team Images */}
                  {/* <div className="satisfy-client-images">

                    <div className="satisfy-client-image">
                      <figure className="image-anime">
                        <img
                          src="/images/author-1.jpg"
                          alt="Best Industries team member"
                        />
                      </figure>
                    </div>

                    <div className="satisfy-client-image">
                      <figure className="image-anime">
                        <img
                          src="/images/author-2.jpg"
                          alt="Best Industries team member"
                        />
                      </figure>
                    </div>

                    <div className="satisfy-client-image">
                      <figure className="image-anime">
                        <img
                          src="/images/author-3.jpg"
                          alt="Best Industries team member"
                        />
                      </figure>
                    </div>

                    <div className="satisfy-client-image add-more">
                      <h2>
                        <span className="counter">20</span>
                      </h2>
                    </div>

                  </div> */}

                </div>
                {/* Experience End */}

              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutUs;
