import React, { useState } from "react";
import { Link } from "react-router-dom";

const faqData = [
  {
    question: "01. What services does Best Industries provide?",
    answer:
      "Best Industries provides a wide range of industrial solutions including general fabrication, sheet metal fabrication, structural fabrication, heavy fabrication, automobile spares, industrial spares, SPM machines and spares, jigs and fixtures, laser cutting and folding, and conveyor systems.",
  },
  {
    question: "02. Do you provide customized industrial solutions?",
    answer:
      "Yes. We develop and manufacture solutions according to specific customer requirements, drawings, dimensions, and applications. Our capabilities include custom fabrication, jigs and fixtures, SPM machines, industrial components, and material handling solutions.",
  },
  {
    question: "03. What sheet metal products do you manufacture?",
    answer:
      "We manufacture a variety of sheet metal products including kiosks, machine guards and enclosures, panel and PCB enclosures, industrial racks, mobile lockers, and ducts.",
  },
  {
    question: "04. What types of jigs and fixtures do you manufacture?",
    answer:
      "Our jig and fixture capabilities include BIW fixtures, VMC and CNC fixtures, drilling fixtures, welding fixtures, brackets, clamps, flanges, couplings, and shim couplings.",
  },
  {
    question: "05. What fabrication and manufacturing facilities do you have?",
    answer:
      "Our facilities include TRUMPF laser cutting, 3-meter folding with 150-ton capacity, MIG, ARC and TIG welding, drilling machines, tapping machines, and milling machines to support a wide range of fabrication and engineering requirements.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="our-faqs">
      <div className="container">

        {/* Title */}
        <div className="row section-row">
          <div className="col-lg-12">
            <div className="section-title section-title-center">

              <span className="section-sub-title wow fadeInUp">
                Frequently Asked Questions
              </span>

              <h2
                className="text-anime-style-3"
                data-cursor="-opaque"
              >
                Everything you need to know about Best Industries
              </h2>

              <p
                className="wow fadeInUp"
                data-wow-delay="0.2s"
              >
                Find answers to common questions about our fabrication
                services, industrial products, custom engineering solutions,
                manufacturing capabilities, and quality-focused approach.
              </p>

            </div>
          </div>
        </div>

        <div className="row">

          {/* Left Content */}
          <div className="col-xl-6">

            <div className="faq-content wow fadeInUp">

              <div className="faq-info-item">

                <div className="icon-box">
                  <i className="fa-solid fa-circle-question"></i>
                </div>

                <div className="faq-info-content">
                  <h3>Have Questions?</h3>

                  <p>
                    Whether you need fabrication, laser cutting, industrial
                    spares, jigs and fixtures, SPM machines, or conveyors,
                    our team can help you find the right solution for your
                    requirement.
                  </p>
                </div>

              </div>

              <div className="faq-info-body-box">

                <div className="faq-info-content">
                  <h3>Talk to Best Industries</h3>

                  <p>
                    Have a specific industrial requirement? Get in touch with
                    our team to discuss your project, product requirements,
                    drawings, or customized fabrication needs.
                  </p>
                </div>

                <div className="faq-contact-list">

                  {/* Phone */}
                  <div className="faq-contact-item">

                    <div className="icon-box">
                      <i className="fa-solid fa-phone"></i>
                    </div>

                    <div className="faq-contact-item-content">
                      <h3>Phone Number</h3>

                      <p>
                        <a href="tel:+917299605040">
                          +91 72996 05040
                        </a>
                      </p>
                    </div>

                  </div>

                  {/* Location */}
                  <div className="faq-contact-item">

                    <div className="icon-box">
                      <i className="fa-solid fa-location-dot"></i>
                    </div>

                    <div className="faq-contact-item-content">
                      <h3>Our Location</h3>

                      <p>
                        India
                      </p>
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* Accordion */}
          <div className="col-xl-6">

            <div className="faq-contant-box">

              <div className="faq-accordion">

                {faqData.map((faq, index) => (

                  <div
                    className="accordion-item wow fadeInUp"
                    key={index}
                  >

                    <h2 className="accordion-header">

                      <button
                        className={`accordion-button ${
                          activeIndex === index
                            ? ""
                            : "collapsed"
                        }`}
                        type="button"
                        onClick={() =>
                          setActiveIndex(
                            activeIndex === index
                              ? null
                              : index
                          )
                        }
                      >
                        {faq.question}
                      </button>

                    </h2>

                    <div
                      className={`accordion-collapse collapse ${
                        activeIndex === index
                          ? "show"
                          : ""
                      }`}
                    >

                      <div className="accordion-body">
                        <p>
                          {faq.answer}
                        </p>
                      </div>

                    </div>

                  </div>

                ))}

              </div>

            </div>

          </div>

          {/* Footer */}
          <div className="col-lg-12">

            <div
              className="section-footer-text section-satisfy-img wow fadeInUp"
              data-wow-delay="0.2s"
            >

           
            
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default FAQ;
