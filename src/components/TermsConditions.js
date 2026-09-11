import React from "react";
import { Helmet } from "react-helmet";
import "../css/TermsConditions.css";

const TermsConditions = () => {
  return (
    <div>


      <Helmet>
        <title>Trustline Travels | Terms & Conditions</title>
        <meta
          name="description"
          content="Terms & Conditions for Trustline Travels services including local rides, airport transfers, outstation trips, rentals, and corporate travel."
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
              <h2 className="wt-title">Terms & Conditions</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
      {/* Terms Section */}
      <section className="terms-section">
        <div className="container">
          <div className="row g-0">

            <img src="/images/term.jpg" alt="Terms Trustline Travels" />

            <div className="col-md-12">
              <div className="terms-content">

                <p>
                  <b className="highlight">1. Booking Confirmation:</b>
                  <br />
                  All bookings made with Trustline Travels are subject to vehicle availability.
                  Your booking will be considered confirmed only after receiving confirmation
                  from our booking team or system.
                </p>

                <p>
                  <b className="highlight">2. Cab Service Usage:</b>
                  <br />
                  Trustline Travels provides safe and reliable passenger transportation services.
                  Carrying illegal, dangerous, or restricted items inside the vehicle is strictly prohibited.
                </p>

                <p>
                  <b className="highlight">3. Payment Terms:</b>
                  <br />
                  Payments can be completed through cash, UPI, cards, online payment,
                  or other available payment methods. Advance payment may be required
                  for selected bookings.
                </p>

                <p>
                  <b className="highlight">4. Cancellation Policy:</b>
                  <br />
                  Customers should cancel bookings as early as possible.
                  Cancellation charges may apply depending on the booking type and cancellation timing.
                </p>

                <p>
                  <b className="highlight">5. Customer Information:</b>
                  <br />
                  Customers are responsible for providing accurate pickup location,
                  destination details, and contact information.
                </p>

                <p>
                  <b className="highlight">6. Passenger & Luggage Policy:</b>
                  <br />
                  Passengers must follow vehicle seating capacity limits.
                  Additional luggage requirements should be informed during booking.
                </p>

                <p>
                  <b className="highlight">7. Driver & Travel Regulations:</b>
                  <br />
                  Drivers follow applicable transport rules and safety regulations.
                  Additional charges may apply for extended travel duration.
                </p>

                <p>
                  <b className="highlight">8. Safety Rules:</b>
                  <br />
                  Passengers must follow safety instructions and maintain proper behavior
                  during the journey.
                </p>

                <p>
                  <b className="highlight">9. Service Refusal:</b>
                  <br />
                  Trustline Travels reserves the right to refuse service in situations involving
                  unsafe conditions, abusive behavior, or violation of laws.
                </p>

                <p>
                  <b className="highlight">10. Fare Changes:</b>
                  <br />
                  Final fare may vary due to toll charges, parking fees, waiting time,
                  route changes, or additional travel requirements.
                </p>

                <p>
                  <b className="highlight">11. Legal Jurisdiction:</b>
                  <br />
                  Any disputes related to Trustline Travels services will be handled according
                  to applicable laws and jurisdiction.
                </p>

                <h3>Rental Policy</h3>

                <p>
                  <b className="highlight">Services Available:</b>
                  <br />
                  Trustline Travels offers local transportation, airport transfers,
                  outstation trips, corporate travel, rental services, and customized travel solutions.
                </p>

                <p>
                  <b className="highlight">Vehicle Availability:</b>
                  <br />
                  Vehicle allocation depends on availability. Trustline Travels may provide
                  an equivalent or upgraded vehicle when required.
                </p>

                <p>
                  <b className="highlight">Toll, Parking & Additional Charges:</b>
                  <br />
                  Toll fees, parking charges, state taxes, and other applicable charges
                  will be payable by the customer unless included in the package.
                </p>

                <p>
                  <b className="highlight">Night Travel Charges:</b>
                  <br />
                  Additional charges may apply for trips scheduled during late-night hours.
                </p>

                <h3>Refund Policy</h3>

                <p>
                  <b className="highlight">Refund Eligibility:</b>
                  <br />
                  Refund requests will be reviewed based on cancellation timing,
                  booking category, and applicable policies.
                </p>

                <p>
                  <b className="highlight">Refund Processing:</b>
                  <br />
                  Approved refunds will be processed within 5–7 working days.
                </p>

                <p>
                  <b className="highlight">Non-Refundable Amounts:</b>
                  <br />
                  Certain service charges, convenience fees, or promotional offers
                  may not be eligible for refunds.
                </p>

                <p>
                  <b className="highlight">No-Show Policy:</b>
                  <br />
                  Customers who fail to appear at the pickup location may not be eligible
                  for a refund.
                </p>

              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="contact-info">
            <h2>Contact Trustline Travels</h2>

            <p>
              For booking assistance or customer support, contact Trustline Travels:
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

export default TermsConditions;

