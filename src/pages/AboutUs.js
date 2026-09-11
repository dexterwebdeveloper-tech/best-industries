import React from "react";
import "./AboutUs.css";
import VisionMission from "./VisionMission";

const coreValues = [
  "Discipline",
  "Perseverance",
  "Integrity",
  "Hope",
  "Faith",
  "Good Service",
  "Honor",
  "Trust",
  "Honesty",
];

const AboutUs = () => {
  return (
   <>
    <section className="bi-about">

      {/* Background */}
      <div className="bi-about-bg-text">
        ABOUT
      </div>

      <div className="bi-about-shape"></div>


      <div className="bi-about-container">

        {/* =====================================
            INTRO
        ===================================== */}

        <div className="bi-about-intro">

          <div className="bi-about-intro-left">

            <span className="bi-about-label">
              ABOUT BEST INDUSTRIES
            </span>

            <h2>
              Understanding
              <br />
              <span>is the best solution.</span>
            </h2>

          </div>


          <div className="bi-about-intro-right">

            <span className="bi-about-big-number">
              2015
            </span>

            <p>
              Welcome to Best Industries. We are committed
              to providing better services and practical
              engineering solutions for complex industrial
              requirements.
            </p>

          </div>

        </div>


        {/* =====================================
            COMPANY STORY
        ===================================== */}

        <div className="bi-about-story">

          <div className="bi-about-story-image">

            {/* Add your image here */}
            <img
              src="/images/about/1.jpeg"
              alt="Best Industries"
            />

            <div className="bi-about-image-overlay"></div>

            <div className="bi-about-image-caption">
              <span>BEST INDUSTRIES</span>
              <strong>CHENNAI · INDIA</strong>
            </div>

          </div>


          <div className="bi-about-story-content">

            <span className="bi-section-number">
              01 / OUR STORY
            </span>

            <h3>
              Built with a purpose.
              <br />
              <span>Growing with experience.</span>
            </h3>

            <p>
              Best Industries has come a long way since its
              beginning. Established in 2015, the company
              focuses on understanding customer requirements
              and providing practical solutions for complex
              industrial needs.
            </p>

            <p>
              Our approach is built around quality service,
              customer satisfaction, teamwork and continuous
              improvement. We believe that understanding the
              requirement is the first step towards creating
              the right solution.
            </p>


            <div className="bi-founder">

              <div className="bi-founder-line"></div>

              <div>
                <span>FOUNDER & CEO</span>

                <h4>
                  MR. SHANMUGAM SUBRAYALU
                </h4>

                <p>
                  Leading Best Industries with commitment,
                  experience and a vision to turn challenging
                  requirements into practical solutions.
                </p>
              </div>

            </div>

          </div>

        </div>


        {/* =====================================
            COMPANY NUMBERS
        ===================================== */}

        <div className="bi-about-numbers">

          <div className="bi-number-card">

            <strong>2500</strong>

            <span>SQFT FACTORY</span>

            <p>
              Dedicated manufacturing and fabrication space.
            </p>

          </div>


          <div className="bi-number-card">

            <strong>5000</strong>

            <span>SQFT OPEN SPACE</span>

            <p>
              Additional open space supporting operations.
            </p>

          </div>


          <div className="bi-number-card">

            <strong>20</strong>

            <span>TEAM MEMBERS</span>

            <p>
              A coordinated and committed workforce.
            </p>

          </div>


          <div className="bi-number-card">

            <strong>10+</strong>

            <span>CORE SERVICES</span>

            <p>
              Industrial services for diverse requirements.
            </p>

          </div>

        </div>


        {/* =====================================
            TEAM
        ===================================== */}

        <div className="bi-team-section">

          <div className="bi-team-heading">

            <span className="bi-section-number">
              02 / OUR TEAM
            </span>

            <h3>
              People behind
              <br />
              <span>the work.</span>
            </h3>

          </div>


          <div className="bi-team-content">

            <p>
              A good team is the foundation of success and
              growth. At Best Industries, our employees work
              together, communicate openly and share their
              knowledge, ideas and experience.
            </p>

            <p>
              Our team members are sincere, responsible,
              innovative and committed to their work. They
              approach challenging requirements with
              confidence and support each other to achieve
              the desired result.
            </p>

            <p>
              We believe that teamwork multiplies the strength
              of an organization. Collaboration helps us
              overcome obstacles, improve ideas and complete
              tasks effectively.
            </p>


            <div className="bi-team-tags">

              <span>TEAMWORK</span>
              <span>INNOVATION</span>
              <span>DISCIPLINE</span>
              <span>RESPONSIBILITY</span>
              <span>COLLABORATION</span>

            </div>

          </div>

        </div>


        {/* =====================================
            WORK CULTURE
        ===================================== */}

        <div className="bi-culture">

          <div className="bi-culture-image">

            {/* Add your image */}
            <img
              src="/images/about/2.jpeg"
              alt="Best Industries Team"
            />

            <div className="bi-culture-number">
              03
            </div>

          </div>


          <div className="bi-culture-content">

            <span className="bi-section-number">
              OUR WORK CULTURE
            </span>

            <h3>
              A workplace built
              <br />
              around <span>people.</span>
            </h3>

            <p>
              We maintain a clean and organized workplace to
              provide a healthier environment for our employees.
              Cleanliness and hygiene are given importance in
              both indoor and outdoor areas.
            </p>

            <p>
              Our office environment encourages employees to
              engage with their work in a comfortable and
              friendly atmosphere. We encourage creativity,
              communication and cooperation throughout the
              organization.
            </p>


            <div className="bi-culture-points">

              <div>
                <span>01</span>
                <b>Clean Workspace</b>
              </div>

              <div>
                <span>02</span>
                <b>Friendly Environment</b>
              </div>

              <div>
                <span>03</span>
                <b>Open Communication</b>
              </div>

              <div>
                <span>04</span>
                <b>Team Support</b>
              </div>

            </div>

          </div>

        </div>


        {/* =====================================
            MISSION VISION
        ===================================== */}

        <div className="bi-purpose">

          <div className="bi-purpose-header">

            <span className="bi-section-number">
              04 / OUR PURPOSE
            </span>

            <h3>
              What drives
              <span> us.</span>
            </h3>

          </div>


          <div className="bi-purpose-grid">

            <div className="bi-purpose-card">

              <div className="bi-purpose-top">
                <span>01</span>
                <i>MISSION</i>
              </div>

              <h4>
                Solving the complex
                needs of our customers.
              </h4>

              <p>
                We understand our clients' requirements and
                work towards providing practical solutions that
                help them achieve their goals.
              </p>

            </div>


            <div className="bi-purpose-card bi-purpose-main">

              <div className="bi-purpose-top">
                <span>02</span>
                <i>VISION</i>
              </div>

              <h4>
                Doing the infeasible
                into feasible.
              </h4>

              <p>
                Our vision is to transform challenging and
                seemingly impossible requirements into
                achievable engineering solutions through
                knowledge, creativity and teamwork.
              </p>

            </div>


            <div className="bi-purpose-card">

              <div className="bi-purpose-top">
                <span>03</span>
                <i>QUALITY POLICY</i>
              </div>

              <h4>
                Where quality
                matters.
              </h4>

              <p>
                We focus on dependable service, quality
                workmanship, customer satisfaction and
                continuous improvement.
              </p>

            </div>

          </div>

        </div>


        {/* =====================================
            CORE VALUES
        ===================================== */}

        <div className="bi-values">

          <div className="bi-values-left">

            <span className="bi-section-number">
              05 / CORE VALUES
            </span>

            <h3>
              Values that
              <br />
              <span>guide us.</span>
            </h3>

            <p>
              Our core values reflect what Best Industries and
              its people stand for. They guide our decisions,
              workplace culture and relationship with customers.
            </p>

          </div>


          <div className="bi-values-right">

            {coreValues.map((value, index) => (

              <div
                className="bi-value"
                key={value}
              >

                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <strong>
                  {value}
                </strong>

                <i>+</i>

              </div>

            ))}

          </div>

        </div>


        {/* =====================================
            FINAL STATEMENT
        ===================================== */}

        <div className="bi-about-final">

          <span>
            BEST INDUSTRIES
          </span>

          <h3>
            You imagine impossible.
            <br />
            <strong>We make it possible.</strong>
          </h3>

          <p>
            Think big. Think Best Industries.
          </p>

        </div>

      </div>

    </section>
    <VisionMission/>
   
   </>
  );
};

export default AboutUs;
