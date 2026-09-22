import React from "react";
import "./Careers.css";

const jobs = [
  {
    id: "01",
    title: "Production Engineer",
    department: "Production",
    location: "Chennai, Tamil Nadu",
    experience: "2–4 Years",
    type: "Full Time",
  },
  {
    id: "02",
    title: "Design Engineer",
    department: "Engineering",
    location: "Chennai, Tamil Nadu",
    experience: "1–3 Years",
    type: "Full Time",
  },
  {
    id: "03",
    title: "CNC Machine Operator",
    department: "Manufacturing",
    location: "Chennai, Tamil Nadu",
    experience: "2–5 Years",
    type: "Full Time",
  },
];

const Careers = () => {
  const scrollToApplication = () => {
    document
      .getElementById("career-application")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="careers-section">

      {/* ================= HERO ================= */}
      <div className="career-hero">
        <div className="career-grid"></div>

        <div className="container">
          <div className="row align-items-center">

            <div className="col-lg-7">
              <div className="career-hero-content">

                <span className="career-label">
                  CAREERS AT BEST INDUSTRIES
                </span>

                <h1>
                  Build Your Future
                  <br />
                  <span>With Us.</span>
                </h1>

                <p>
                  Join a team where engineering, innovation and
                  craftsmanship come together to create better
                  industrial solutions.
                </p>

                <button
                  className="career-main-btn"
                  onClick={scrollToApplication}
                >
                  Explore Opportunities
                  <span>↗</span>
                </button>

              </div>
            </div>

            <div className="col-lg-5">
              <div className="career-visual">

                <div className="visual-circle"></div>

                <div className="visual-card visual-card-one">
                  <strong>BUILD</strong>
                  <span>WITH PURPOSE</span>
                </div>

                <div className="visual-card visual-card-two">
                  <strong>GROW</strong>
                  <span>WITH US</span>
                </div>

                <div className="visual-number">
                  01
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>


      {/* ================= INTRO ================= */}
      <div className="container">
        <div className="career-intro">

          <div className="intro-left">
            <span>WHY BEST INDUSTRIES?</span>

            <h2>
              More Than Just
              <br />
              <strong>A Job.</strong>
            </h2>
          </div>

          <div className="intro-right">
            <p>
              At Best Industries, we believe great products are
              built by great people. We encourage learning,
              responsibility, teamwork and innovation at every
              level of our organization.
            </p>
          </div>

        </div>


        {/* ================= BENEFITS ================= */}
        <div className="career-benefits row g-4">

          <div className="col-md-4">
            <div className="benefit-card">
              <div className="benefit-number">01</div>

              <div className="benefit-icon">
                ↗
              </div>

              <h3>Grow With Us</h3>

              <p>
                Develop your technical and professional skills
                through real-world industrial projects.
              </p>
            </div>
          </div>


          <div className="col-md-4">
            <div className="benefit-card">
              <div className="benefit-number">02</div>

              <div className="benefit-icon">
                ✦
              </div>

              <h3>Make An Impact</h3>

              <p>
                Work on meaningful projects and contribute to
                solutions used across industrial applications.
              </p>
            </div>
          </div>


          <div className="col-md-4">
            <div className="benefit-card">
              <div className="benefit-number">03</div>

              <div className="benefit-icon">
                +
              </div>

              <h3>Work Together</h3>

              <p>
                Be part of a collaborative team that values
                ideas, accountability and craftsmanship.
              </p>
            </div>
          </div>

        </div>


        {/* ================= JOBS ================= */}
        {/* <div className="jobs-section">

          <div className="jobs-heading">

            <div>
              <span>JOIN OUR TEAM</span>

              <h2>
                Current <strong>Openings</strong>
              </h2>
            </div>

            <p>
              Find an opportunity that matches
              your skills and experience.
            </p>

          </div>


          <div className="jobs-list">

            {jobs.map((job) => (
              <div className="job-card" key={job.id}>

                <div className="job-number">
                  {job.id}
                </div>

                <div className="job-main">
                  <span>{job.department}</span>

                  <h3>{job.title}</h3>

                  <div className="job-details">

                    <span>
                      <i>⌖</i>
                      {job.location}
                    </span>

                    <span>
                      <i>◷</i>
                      {job.experience}
                    </span>

                    <span>
                      <i>◉</i>
                      {job.type}
                    </span>

                  </div>
                </div>

                <button
                  className="job-apply"
                  onClick={scrollToApplication}
                >
                  Apply Now
                  <span>↗</span>
                </button>

              </div>
            ))}

          </div>

        </div> */}


        {/* ================= APPLICATION CTA ================= */}
        <div
          className="career-application"
          id="career-application"
        >

          <div className="application-pattern"></div>

          <div className="application-content">

            <span>DON'T SEE YOUR ROLE?</span>

            <h2>
              Send Us Your
              <strong> Resume.</strong>
            </h2>

            <p>
              We are always interested in meeting talented
              people. Send your profile and we’ll keep you in
              mind for future opportunities.
            </p>

            <a
              href="mailto:booking@bestindustries.in?subject=Career%20Application"
              className="application-btn"
            >
              Send Your Resume
              <span>↗</span>
            </a>

          </div>

          <div className="application-big-text">
            CAREERS
          </div>

        </div>

      </div>

    </section>
  );
};

export default Careers;
