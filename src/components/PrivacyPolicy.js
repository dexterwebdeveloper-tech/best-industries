import React from "react";
import { Helmet } from "react-helmet";
import "../css/privacy-policy.css";

const PrivacyPolicy = () => {
  return (
    <div>
      <Helmet>
        <title>Privacy Policy | Trustline Travels</title>

        <meta
          name="description"
          content="Privacy Policy for Trustline Travels. Learn how we collect, use, and protect your personal information while using our cab booking, airport transfer, local and outstation travel services."
        />

        <meta
          name="keywords"
          content="Trustline Travels, Cab Service, Taxi Booking, Airport Transfer, Outstation Travel, Privacy Policy"
        />
      </Helmet>

      {/* Breadcrumb */}
  


<div
  className="wt-bnr-inr site-bg-dark twm-primary-overlay-wrap"
  style={{
    backgroundImage:
      "linear-gradient(90deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.75) 50%, rgba(0,0,0,0.75) 100%), url('/images/banner-10.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
      <div className="twm-primary-overlay"></div>

      <div className="container">
        <div className="wt-bnr-inr-entry">
          <div className="banner-title-ouer">
            <div className="banner-title-name">
              <h2 className="wt-title">Privacy Policy</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
      {/* Privacy Policy Section */}
      <section className="privacy-policy">
        <div className="container px-0">

          <div className="row g-0">
            <img src="/images/privacy.png" alt="Privacy Trustline Travels" />

            <div className="col-12 col-md-12">
              <h3 className="title">Privacy Policy – Trustline Travels</h3>

              <p>
                At <b>Trustline Travels</b>, we value your privacy and are committed
                to protecting your personal information. This Privacy Policy explains
                how we collect, use, store, and protect your data when you use our
                cab booking and transportation services.
              </p>

              {/* Information We Collect */}
              <div className="section">
                <p className="highlight darkcolor">Information We Collect:</p>

                <p className="highlight darkcolor">1. Personal Information:</p>
                <p>
                  We collect details such as your name, mobile number, email address,
                  pickup and drop locations, travel details, and payment information
                  required for booking services.
                </p>

                <p className="highlight darkcolor">2. Booking Information:</p>
                <p>
                  We collect ride-related details including booking time, route details,
                  vehicle preference, passenger information, and destination details
                  to provide reliable transportation.
                </p>

                <p className="highlight darkcolor">3. Device & Usage Information:</p>
                <p>
                  We may collect technical information such as device details, browser
                  information, IP address, and website usage data to improve our services.
                </p>
              </div>

              {/* How We Use Information */}
              <div className="section">
                <p className="highlight darkcolor">How We Use Your Information:</p>

                <p className="highlight darkcolor">1. Booking & Service Management:</p>
                <p>
                  Your information is used to confirm bookings, allocate vehicles,
                  coordinate with drivers, and complete your journey smoothly.
                </p>

                <p className="highlight darkcolor">2. Customer Support:</p>
                <p>
                  We use your information to provide booking confirmations, ride updates,
                  invoices, and customer assistance.
                </p>

                <p className="highlight darkcolor">3. Service Improvement:</p>
                <p>
                  We analyze customer feedback and usage patterns to improve our services,
                  safety, and customer experience.
                </p>

                <p className="highlight darkcolor">4. Promotions & Updates:</p>
                <p>
                  With your permission, we may send service updates, offers, and promotional
                  communications. You can opt out at any time.
                </p>
              </div>

              {/* Information Sharing */}
              <div className="section">
                <p className="highlight darkcolor">Information Sharing:</p>

                <p className="highlight darkcolor">1. Drivers:</p>
                <p>
                  Required booking information may be shared with assigned drivers
                  to complete your ride safely.
                </p>

                <p className="highlight darkcolor">2. Payment & Service Partners:</p>
                <p>
                  Limited information may be shared with trusted payment providers
                  and service partners for operational purposes.
                </p>

                <p className="highlight darkcolor">3. Legal Requirements:</p>
                <p>
                  We may disclose information when required by law, government authorities,
                  or legal processes.
                </p>
              </div>

              {/* Security */}
              <div className="section">
                <p className="highlight darkcolor">Data Security:</p>
                <p>
                  Trustline Travels follows reasonable security practices to protect your
                  personal information from unauthorized access or misuse.
                </p>

                <p className="highlight darkcolor">Data Retention:</p>
                <p>
                  We retain your information only for the period necessary to provide
                  services and meet legal requirements.
                </p>

                <p className="highlight darkcolor">Your Rights:</p>
                <p>
                  You may request access, correction, or deletion of your personal
                  information where applicable.
                </p>

                <p className="highlight darkcolor">Cookies:</p>
                <p>
                  Our website may use cookies to enhance user experience and analyze
                  website performance.
                </p>

                <p className="highlight darkcolor">Third-Party Links:</p>
                <p>
                  Trustline Travels is not responsible for the privacy practices of external
                  websites linked through our platform.
                </p>

                <p className="highlight darkcolor">Policy Updates:</p>
                <p>
                  This Privacy Policy may be updated periodically to reflect changes
                  in our services or legal requirements.
                </p>
              </div>

            </div>
          </div>

          {/* Contact Info */}
          <div className="contact-info">
            <h2>Contact Trustline Travels</h2>

            <p>
              For privacy-related questions or concerns, contact us:
            </p>

            <ul>
              <li>
                <b>Phone:</b>{" "}
                <a href="tel:+917299605040">+91 7299605040</a>
              </li>

              <li>
                <b>Email:</b>{" "}
                <a href="mailto:info@bestindustries.in">
                  info@bestindustries.in
                </a>
              </li>

              <li>
                <b>Address:</b>
                <br />
               <h6> Trustline Travels </h6>
                
                Office  No 3, Shive Pride, Lane No 14,<br/>
Swami Samarth Nagar, Sathe Nagar,<br/>
Lohegaon, Pune, Maharashtra -411047
              </li>
            </ul>
          </div>

        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;

