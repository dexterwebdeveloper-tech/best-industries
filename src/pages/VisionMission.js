import React from "react";
import "./VisionMission.css";

const VisionMission = () => {
  return (
    <section className="bi-vm-section">
      <div className="bi-vm-wrap">

        {/* Header */}
        <div className="bi-vm-heading">
          <div>
            <span className="bi-vm-kicker">BEST INDUSTRIES / OUR PURPOSE</span>

            <h2>
              Vision <em>&</em> Mission
            </h2>
          </div>

          <p>
            We understand complex industrial requirements and work towards
            creating practical, innovative and reliable solutions.
          </p>
        </div>


        {/* Vision / Mission */}
        <div className="bi-vm-grid">

          {/* ================= VISION ================= */}
          <div className="bi-vm-card bi-vm-vision">

            <div className="bi-vm-card-number">01</div>

            <div className="bi-vm-card-top">
              <span>OUR VISION</span>
              <div className="bi-vm-arrow">↗</div>
            </div>

            <h3>
              Creating solutions
              <strong> beyond limits.</strong>
            </h3>

            <p className="bi-vm-description">
              We believe in making good products and continuously focusing
              on innovation. Our vision is to solve the complex needs of
              our clients by creating new, practical and effective solutions.
            </p>

            <div className="bi-vm-line"></div>

            <div className="bi-vm-list">

              <div>
                <span>01</span>
                <p>
                  Solve complex industrial requirements through innovation.
                </p>
              </div>

              <div>
                <span>02</span>
                <p>
                  Create quick service with outstanding quality.
                </p>
              </div>

              <div>
                <span>03</span>
                <p>
                  Provide customer-friendly and cost-effective solutions.
                </p>
              </div>

              <div>
                <span>04</span>
                <p>
                  Develop eco-friendly products and responsible practices.
                </p>
              </div>

              <div>
                <span>05</span>
                <p>
                  Become a trusted company for industries across the world.
                </p>
              </div>

            </div>

            <div className="bi-vm-bottom-text">
              <span>THINK BIG</span>
              <b>THINK BEST INDUSTRIES</b>
            </div>

          </div>


          {/* ================= MISSION ================= */}
          <div className="bi-vm-card bi-vm-mission">

            <div className="bi-vm-card-number">02</div>

            <div className="bi-vm-card-top">
              <span>OUR MISSION</span>
              <div className="bi-vm-arrow">↗</div>
            </div>

            <h3>
              Service built on
              <strong> trust & quality.</strong>
            </h3>

            <p className="bi-vm-description">
              Our mission is to create and promote qualified, reliable and
              trustworthy services. We work closely with our clients to
              understand their requirements and solve their challenging needs.
            </p>

            <div className="bi-vm-line"></div>

            <div className="bi-vm-list">

              <div>
                <span>01</span>
                <p>
                  Understand the real needs and expectations of our clients.
                </p>
              </div>

              <div>
                <span>02</span>
                <p>
                  Deliver qualified services with consistent quality.
                </p>
              </div>

              <div>
                <span>03</span>
                <p>
                  Solve tangled and challenging industrial requirements.
                </p>
              </div>

              <div>
                <span>04</span>
                <p>
                  Collaborate with industries to create better solutions.
                </p>
              </div>

              <div>
                <span>05</span>
                <p>
                  Build a trusted and respected name through our work.
                </p>
              </div>

            </div>

            <div className="bi-vm-bottom-text">
              <span>SERVE BETTER</span>
              <b>BUILD TRUST</b>
            </div>

          </div>

        </div>


        {/* Bottom statement */}
        <div className="bi-vm-footer">

          <span>OUR COMMITMENT</span>

          <h4>
            You imagine the impossible.
            <strong> Best Industries makes it possible.</strong>
          </h4>

        </div>

      </div>
    </section>
  );
};

export default VisionMission;
