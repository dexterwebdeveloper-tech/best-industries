import React from "react";
import { Link } from "react-router-dom";

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
      <div className="container">
        {/* Section Header */}
        <div className="row section-row align-items-center">
          <div className="col-xl-6">
            <div className="section-title">
              <span className="section-sub-title wow fadeInUp">
                Why Choose Best Industries
              </span>

              <h2
                className="text-anime-style-3"
                data-cursor="-opaque"
              >
                Reliable fabrication and engineering solutions for complex needs
              </h2>
            </div>
          </div>

          <div className="col-xl-6">
            <div className="section-content-btn">
              <div
                className="section-title-content wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <p>
                  At Best Industries, we understand that every industrial
                  requirement is different. From general and heavy fabrication
                  to sheet metal work, laser cutting, SPM machines, jigs,
                  fixtures, spares, and conveyors, we deliver practical
                  solutions with a focus on quality, precision, and customer
                  satisfaction.
                </p>
              </div>

              <div
                className="section-btn wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <Link to="/contact" className="btn-default">
                  Get In Touch
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="row">
          {/* Left Side */}
          <div className="col-xl-4">
            <div className="why-choose-item-list">
              <div className="why-choose-item wow fadeInUp">
                <div className="why-choose-item-content">
                  <h2>Complete Industrial Solutions</h2>

                  <p>
                    From fabrication and sheet metal components to industrial
                    spares, SPM machines, jigs, fixtures, and conveyors, we
                    provide solutions for a wide range of industrial
                    requirements.
                  </p>
                </div>

                <div className="why-choose-item-image">
                  <figure>
                    <img
                      src="/images/why-choose-image-1.jpg"
                      alt="Best Industries Industrial Solutions"
                    />
                  </figure>
                </div>
              </div>

              <div
                className="why-choose-item wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <div className="why-choose-item-content">
                  <h2>Precision, Quality & Reliability</h2>

                  <p>
                    We focus on accurate fabrication, dependable components,
                    quality workmanship, and reliable solutions designed around
                    the specific requirements of every customer.
                  </p>
                </div>

                <div className="why-choose-item-image">
                  <figure>
                    <img
                      src="/images/why-choose-image-2.jpg"
                      alt="Best Industries Quality Fabrication"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="col-xl-8">
            <div
              className="why-choose-video-counter-box wow fadeInUp"
              data-wow-delay="0.4s"
            >
              {/* Video */}
              <div className="why-choose-video-box">
               

                <div className="why-choose-video-image">
                  <figure className="image-anime">
                    <img
                      src="/images/why-choose-video-image.jpg"
                      alt="Best Industries Fabrication and Manufacturing"
                    />
                  </figure>
                </div>
              </div>

              {/* Counters */}
              <div className="why-choose-counter-item-list">
                <div className="why-choose-counter-item">
                  <h2>
                    <span className="counter">10</span>+
                  </h2>

                  <p>Industrial Solutions</p>
                </div>

                <div className="why-choose-counter-item">
                  <h2>
                    <span className="counter">100</span>%
                  </h2>

                  <p>Focus on Quality & Customer Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Row */}
      </div>
    </section>
  );
};

export default WhyChooseUs;
