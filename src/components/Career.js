// import React from "react";
// import { FaCar, FaUserTie, FaHandshake, FaHeadset } from "react-icons/fa";

// const Career = () => {
//   return (
//     <>
//       {/* Breadcrumb */}
//       <section className="gauto-breadcromb-area section_70">
//         <div className="container">
//           <h3 className="text-center text-white">Career</h3>
//         </div>
//       </section>

//       {/* Career Section */}
//       <section className="career-section">
//         <div className="career-container">

//           {/* Header */}
//           <div className="career-header">
//             <h2>
//               Career at <span>Shambhu Cabs</span>
//             </h2>
//             <p>
//               Join Shambhu Cabs as a Partner, Driver, Agent, or Back Office
//               professional and grow with a trusted cab service brand.
//             </p>
//           </div>

//           {/* Cards */}
//           <div className="career-grid">

//             {/* Partner */}
//             <div className="career-card">
//               <div className="career-icon">
//                 <FaHandshake />
//               </div>
//               <h4>Business Partner</h4>
//               <p>
//                 Partner with Shambhu Cabs and expand your transport business
//                 with guaranteed support and growth opportunities.
//               </p>
//               <ul>
//                 <li>Fleet Partnership</li>
//                 <li>Long-Term Association</li>
//                 <li>High Revenue Potential</li>
//               </ul>
//             </div>

//             {/* Driver */}
//             <div className="career-card">
//               <div className="career-icon">
//                 <FaCar />
//               </div>
//               <h4>Driver Partner</h4>
//               <p>
//                 Drive with Shambhu Cabs and earn a stable income with flexible
//                 working hours.
//               </p>
//               <ul>
//                 <li>Valid Driving License</li>
//                 <li>Commercial Vehicle</li>
//                 <li>Daily / Monthly Earnings</li>
//               </ul>
//             </div>

//             {/* Agent */}
//             <div className="career-card">
//               <div className="career-icon">
//                 <FaUserTie />
//               </div>
//               <h4>Booking Agent</h4>
//               <p>
//                 Work as a booking agent and manage customer inquiries,
//                 reservations, and coordination.
//               </p>
//               <ul>
//                 <li>Attractive Commission</li>
//                 <li>Booking Management</li>
//                 <li>Work from Office / Remote</li>
//               </ul>
//             </div>

//             {/* Back Office */}
//             <div className="career-card">
//               <div className="career-icon">
//                 <FaHeadset />
//               </div>
//               <h4>Back Office Executive</h4>
//               <p>
//                 Handle backend operations including bookings, billing, and
//                 customer support.
//               </p>
//               <ul>
//                 <li>Office-Based Job</li>
//                 <li>Day / Night Shifts</li>
//                 <li>Career Growth</li>
//               </ul>
//             </div>

//           </div>

//         </div>
//       </section>
//     </>
//   );
// };

// export default Career;



import React from "react";
import { FaCar, FaUserTie, FaHandshake, FaHeadset, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Career = () => {
  return (
    <>
      {/* Breadcrumb */}
      <section className="gauto-breadcromb-area section_70">
        <div className="container">
          <h3 className="text-center text-white">Career</h3>
        </div>
      </section>

      {/* Career Section */}
      <section className="career-section">
        <div className="career-container">

          {/* Header */}
          <div className="career-header">
            <h2>
              Career at <span>Shambhu Cabs</span>
            </h2>
            <p>
              Join Shambhu Cabs as a Partner, Driver, Agent, or Back Office
              professional and grow with a trusted cab service brand.
            </p>
          </div>

          {/* Cards */}
          <div className="career-grid">

            {/* Partner */}
            <div className="career-card">
              <div className="career-icon">
                <FaHandshake />
              </div>
              <h4>Business Partner</h4>
              <p>
                Partner with Shambhu Cabs and expand your transport business
                with guaranteed support and growth opportunities.
              </p>
              <ul>
                <li>Fleet Partnership</li>
                <li>Long-Term Association</li>
                <li>High Revenue Potential</li>
              </ul>
            </div>

            {/* Driver */}
            <div className="career-card">
              <div className="career-icon">
                <FaCar />
              </div>
              <h4>Driver Partner</h4>
              <p>
                Drive with Shambhu Cabs and earn a stable income with flexible
                working hours.
              </p>
              <ul>
                <li>Valid Driving License</li>
                <li>Commercial Vehicle</li>
                <li>Daily / Monthly Earnings</li>
              </ul>
            </div>

            {/* Agent */}
            <div className="career-card">
              <div className="career-icon">
                <FaUserTie />
              </div>
              <h4>Booking Agent</h4>
              <p>
                Work as a booking agent and manage customer inquiries,
                reservations, and coordination.
              </p>
              <ul>
                <li>Attractive Commission</li>
                <li>Booking Management</li>
                <li>Work from Office / Remote</li>
              </ul>
            </div>

            {/* Back Office */}
            <div className="career-card">
              <div className="career-icon">
                <FaHeadset />
              </div>
              <h4>Back Office Executive</h4>
              <p>
                Handle backend operations including bookings, billing, and
                customer support.
              </p>
              <ul>
                <li>Office-Based Job</li>
                <li>Day / Night Shifts</li>
                <li>Career Growth</li>
              </ul>
            </div>

          </div>

          {/* Contact Section */}
          <div className="career-contact">
            <h3>Contact for Career Opportunities</h3>
            <p>
              <FaPhoneAlt />{" "}
              <a href="tel:+919819399797">+91 9819399797</a>
            </p>
            <p>
              <FaEnvelope />{" "}
              <a href="mailto:booking@shambhucab.com">
                booking@shambhucab.com
              </a>
            </p>
          </div>

        </div>
      </section>
    </>
  );
};

export default Career;
