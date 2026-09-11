import React from "react";
import { Link } from "react-router-dom";

const skills = [
  {
    title: "Precision Fabrication",
    percentage: 95,
  },
  {
    title: "Quality & Workmanship",
    percentage: 98,
  },
];

const Expertise = () => {
  return (
    <section className="our-expertise">
      <div className="container">
        <div className="row">

          {/* Left Content */}
          <div className="col-xl-6">
            <div className="expertise-content">

              {/* Section Title */}
              <div className="section-title">
                <span className="section-sub-title wow fadeInUp">
                  Our Expertise
                </span>

                <h2
                  className="text-anime-style-3"
                  data-cursor="-opaque"
                >
                  Precision engineering and fabrication for every industrial requirement
                </h2>

                <p
                  className="wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  Best Industries delivers dependable fabrication and
                  engineering solutions designed around the specific needs of
                  our customers. From sheet metal and structural fabrication
                  to heavy fabrication, laser cutting, SPM machines, jigs,
                  fixtures, spares, and conveyors, we combine practical
                  expertise with quality-focused workmanship.
                </p>
              </div>

              {/* Skill Bars */}
              <div className="expertise-skillbar-list">
                {skills.map((skill, index) => (
                  <div
                    className="skills-progress-bar"
                    key={index}
                  >
                    <div
                      className="skillbar"
                      data-percent={`${skill.percentage}%`}
                    >
                      <div className="skill-data">
                        <div className="skill-title">
                          {skill.title}
                        </div>

                        <div className="skill-no">
                          {skill.percentage}%
                        </div>
                      </div>

                      <div className="skill-progress">
                        <div
                          className="count-bar"
                          style={{
                            width: `${skill.percentage}%`,
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div
                className="expertise-footer wow fadeInUp"
                data-wow-delay="0.4s"
              >

                {/* Button */}
                <div className="expertise-btn">
                  <Link
                    to="/contact"
                    className="btn-default"
                  >
                    Discuss Your Requirement
                  </Link>
                </div>

                {/* Contact Box */}
                <div className="about-us-contact-box">

                  {/* Phone Icon */}
                  <div className="icon-box">
                    <i className="fa-solid fa-phone"></i>
                  </div>

                  <div className="about-us-conatct-content">
                    <p>Call Us For Industrial Support</p>

                    <h3>
                      <a href="tel:+917299605040">
                        +91 72996 05040
                      </a>
                    </h3>
                  </div>

                </div>

              </div>

            </div>
          </div>

          {/* Right Image */}
          <div className="col-xl-6">

            <div
              className="expertise-image-box wow fadeInUp"
              data-wow-delay="0.2s"
            >

              <div className="expertise-image">
                <figure>
                  <img
                    src="/images/expertise-image.jpg"
                    alt="Best Industries Fabrication and Engineering"
                  />
                </figure>
              </div>

              <div className="expertise-image-content">
                <ul>
                  <li>
                    Skilled Fabrication Team
                  </li>

                  <li>
                    Custom Industrial Solutions
                  </li>
                </ul>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Expertise;
