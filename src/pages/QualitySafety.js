import React from "react";
import "./QualitySafety.css";

const qualityPoints = [
  {
    number: "01",
    title: "Quality First",
    text: "Every project begins with understanding the customer's requirement and ends with a solution built around quality, accuracy and reliability.",
    icon: "◈",
  },
  {
    number: "02",
    title: "Precision & Inspection",
    text: "Our fabrication and engineering work focuses on accurate manufacturing, proper inspection and attention to detail at every stage.",
    icon: "⌁",
  },
  {
    number: "03",
    title: "Safety At Work",
    text: "We believe a safe working environment is essential for consistent performance, responsible manufacturing and long-term growth.",
    icon: "◇",
  },
  {
    number: "04",
    title: "Continuous Improvement",
    text: "We continuously improve our methods, knowledge and processes to overcome challenges and deliver better industrial solutions.",
    icon: "↗",
  },
];

const principles = [
  "Understand customer requirements",
  "Maintain consistent quality",
  "Improve processes continuously",
  "Encourage employee development",
  "Promote workplace safety",
  "Build long-term relationships",
];

const QualitySafety = () => {
  return (
    <section className="quality-safety-section">

      {/* =========================================
          BACKGROUND
      ========================================= */}

      <div className="qs-bg-word">QUALITY</div>

      <div className="qs-orange-line"></div>


      <div className="container">

        {/* =========================================
            HEADER
        ========================================= */}

        <div className="qs-header">

          <div className="qs-heading">

            <span className="qs-eyebrow">
              QUALITY &amp; SAFETY
            </span>

            <h2>
              Built With
              <br />
              <strong>Confidence.</strong>
            </h2>

          </div>

          <div className="qs-header-description">

            <div className="qs-small-line"></div>

            <p>
              At Best Industries, quality is more than an
              inspection at the end of a project. It is a
              continuous approach that starts with understanding
              the requirement and continues through planning,
              fabrication, inspection and delivery.
            </p>

          </div>

        </div>


        {/* =========================================
            MAIN FEATURE
        ========================================= */}

        <div className="qs-feature">

          <div className="qs-feature-left">

            <div className="qs-feature-number">
              01
            </div>

            <div className="qs-feature-mark">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="qs-feature-big-text">
              Q
            </div>

          </div>


          <div className="qs-feature-content">

            <span className="qs-feature-label">
              OUR APPROACH
            </span>

            <h3>
              Understanding
              <br />
              <strong>Every Requirement.</strong>
            </h3>

            <p>
              Every industrial requirement is different. We
              believe the first step towards quality is listening
              carefully to the customer and understanding the
              application, expectations and challenges.
            </p>

            <p>
              Our team works collaboratively to identify practical
              solutions, improve processes and deliver products
              that meet the intended purpose.
            </p>

            <div className="qs-feature-tags">

              <span>UNDERSTAND</span>
              <span>PLAN</span>
              <span>BUILD</span>
              <span>IMPROVE</span>

            </div>

          </div>

        </div>


        {/* =========================================
            QUALITY CARDS
        ========================================= */}

        <div className="qs-cards">

          {qualityPoints.map((item) => (

            <div
              className="qs-card"
              key={item.number}
            >

              <div className="qs-card-top">

                <span className="qs-card-number">
                  {item.number}
                </span>

                <span className="qs-card-icon">
                  {item.icon}
                </span>

              </div>

              <h3>
                {item.title}
              </h3>

              <p>
                {item.text}
              </p>

              <div className="qs-card-arrow">
                ↗
              </div>

            </div>

          ))}

        </div>


        {/* =========================================
            SAFETY + QUALITY SPLIT
        ========================================= */}

        <div className="qs-split">

          {/* QUALITY */}

          <div className="qs-split-box qs-quality-box">

            <div className="qs-box-number">
              02
            </div>

            <span className="qs-box-label">
              QUALITY
            </span>

            <h3>
              Consistency
              <br />
              Creates <strong>Trust.</strong>
            </h3>

            <p>
              Quality is built through disciplined processes,
              skilled people, proper planning and attention to
              detail. Our objective is to consistently deliver
              solutions that satisfy customer requirements.
            </p>

            <ul>
              {principles.slice(0, 3).map((item) => (
                <li key={item}>
                  <span>✓</span>
                  {item}
                </li>
              ))}
            </ul>

          </div>


          {/* SAFETY */}

          <div className="qs-split-box qs-safety-box">

            <div className="qs-safety-pattern"></div>

            <div className="qs-box-number">
              03
            </div>

            <span className="qs-box-label">
              SAFETY
            </span>

            <h3>
              People
              <br />
              Before <strong>Everything.</strong>
            </h3>

            <p>
              A strong organization depends on its people. We
              encourage awareness, responsibility, teamwork and
              safe working practices to create a productive
              workplace.
            </p>

            <ul>
              {principles.slice(3).map((item) => (
                <li key={item}>
                  <span>✓</span>
                  {item}
                </li>
              ))}
            </ul>

          </div>

        </div>


        {/* =========================================
            CONTINUOUS IMPROVEMENT
        ========================================= */}

        <div className="qs-improvement">

          <div className="qs-improvement-left">

            <span>
              CONTINUOUS IMPROVEMENT
            </span>

            <h3>
              Better Every
              <br />
              <strong>Day.</strong>
            </h3>

          </div>


          <div className="qs-improvement-right">

            <div className="qs-process">

              <div className="qs-process-item">
                <b>01</b>
                <span>Understand</span>
              </div>

              <div className="qs-process-line"></div>

              <div className="qs-process-item">
                <b>02</b>
                <span>Develop</span>
              </div>

              <div className="qs-process-line"></div>

              <div className="qs-process-item">
                <b>03</b>
                <span>Inspect</span>
              </div>

              <div className="qs-process-line"></div>

              <div className="qs-process-item">
                <b>04</b>
                <span>Improve</span>
              </div>

            </div>

            <p>
              Challenges are part of every business. We believe
              that learning from those challenges helps an
              organization improve its standards, strengthen its
              people and develop better solutions for customers.
            </p>

          </div>

        </div>


        {/* =========================================
            CUSTOMER PROMISE
        ========================================= */}

        <div className="qs-promise">

          <div className="qs-promise-content">

            <span>
              OUR COMMITMENT
            </span>

            <h3>
              Quality That
              <br />
              <strong>Customers Can Trust.</strong>
            </h3>

            <p>
              Customer satisfaction is at the heart of what we do.
              By listening carefully, communicating clearly and
              continuously improving our approach, we aim to
              bridge the gap between complex requirements and
              practical industrial solutions.
            </p>

          </div>

          <div className="qs-promise-symbol">
            <div className="qs-symbol-ring ring-one"></div>
            <div className="qs-symbol-ring ring-two"></div>
            <div className="qs-symbol-core">
              BI
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};

export default QualitySafety;
