// import React from "react";
// import "./ContactUs.css";

// const ContactUs = () => {
//   return (
//     <section className="contact-section p-0 py-3">
//       <div className="container">

//         {/* Heading */}
//         <div className="contact-heading">
//           <span className="contact-eyebrow">GET IN TOUCH</span>

//           <h2>
//             Let’s Build Something
//             <span> Great Together.</span>
//           </h2>

//           <p>
//             Have a requirement or looking for reliable industrial solutions?
//             Get in touch with the Best Industries team.
//           </p>
//         </div>

//         {/* Contact Cards */}
//         <div className="row g-4">

//           {/* Phone */}
//           <div className="col-md-4">
//             <div className="contact-card phone-card">

//               <div className="card-bg-number">01</div>

//               <div className="contact-icon">
//                 <svg
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="1.8"
//                 >
//                   <path
//                     d="M22 16.92v3a2 2 0 0 1-2.18 2
//                     19.79 19.79 0 0 1-8.63-3.07
//                     19.5 19.5 0 0 1-6-6
//                     19.79 19.79 0 0 1-3.07-8.67
//                     A2 2 0 0 1 4.11 2h3
//                     a2 2 0 0 1 2 1.72
//                     12.84 12.84 0 0 0 .7 2.81
//                     2 2 0 0 1-.45 2.11L8.09 9.91
//                     a16 16 0 0 0 6 6l1.27-1.27
//                     a2 2 0 0 1 2.11-.45
//                     12.84 12.84 0 0 0 2.81.7
//                     A2 2 0 0 1 22 16.92z"
//                   />
//                 </svg>
//               </div>

//               <div className="contact-card-content">
//                 <span>CALL US</span>
//                 <h3>Phone Number</h3>

              
//                 <a href="tel:+917299605040">+91 7299605040</a><br />
// <a href="tel:+917358705040">+91 73587 05040</a><br />
// <a href="tel:+919566088070">+91 95660 88070</a>
//               </div>

//               <div className="card-arrow">↗</div>
//             </div>
//           </div>

//           {/* Email */}
//           <div className="col-md-4">
//             <div className="contact-card email-card">

//               <div className="card-bg-number">02</div>

//               <div className="contact-icon">
//                 <svg
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="1.8"
//                 >
//                   <rect x="3" y="5" width="18" height="14" rx="2" />
//                   <path d="m3 7 9 6 9-6" />
//                 </svg>
//               </div>

//               <div className="contact-card-content">
//                 <span>EMAIL US</span>
//                 <h3>Email Address</h3>

               
//                   <a href="mailto:info@bestindustries.in">
//                   info@bestindustries.in
//                 </a>
//  <br/>
//                 <a href="mailto:booking@bestindustries.in">
//                   booking@bestindustries.in
//                 </a>
//               </div>

//               <div className="card-arrow">↗</div>
//             </div>
//           </div>

//           {/* Address */}
//           <div className="col-md-4">
//             <div className="contact-card address-card">

//               <div className="card-bg-number">03</div>

//               <div className="contact-icon">
//                 <svg
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="1.8"
//                 >
//                   <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
//                   <circle cx="12" cy="10" r="2.5" />
//                 </svg>
//               </div>

//               <div className="contact-card-content">
//                 <span>VISIT US</span>
//                 <h3>Our Address</h3>
//               <strong>BEST INDUSTRIES</strong>

//                 <p>
//                   No 270, Railway Station Road,
//                   <br />
//                   Korattur, Chennai: 600 080
//                   <br />
//                   Tamilnadu, India.
//                 </p>
//               </div>

//               <div className="card-arrow">↗</div>
//             </div>
//           </div>

//         </div>

//         {/* Map */}
//         {/* <div className="map-section">

//           <div className="map-header">
//             <div>
//               <span>FIND US</span>
//               <h3>Visit Best Industries</h3>
//             </div>

//             <div className="map-location-icon">
//               <svg
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="1.8"
//               >
//                 <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
//                 <circle cx="12" cy="10" r="2.5" />
//               </svg>
//             </div>
//           </div>

//           <div className="map-container">

//             <iframe
//               title="Best Industries Location"
//               src="https://www.google.com/maps?q=270%20Railway%20Station%20Road%20Korattur%20Chennai%20600080&output=embed"
//               loading="lazy"
//               allowFullScreen
//               referrerPolicy="no-referrer-when-downgrade"
//             />

//             <div className="map-label">
//               <strong>BEST INDUSTRIES</strong>
//               <span>
//                 No 270, Railway Station Road, Korattur
//               </span>
//             </div>

//           </div>
//         </div> */}

//       </div>
//     </section>
//   );
// };

// export default ContactUs;




import React from "react";
import { Link } from "react-router-dom";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <>
      {/* Breadcrumb Banner */}
      <section className="contact-breadcrumb">
        <div className="container">
          <div className="breadcrumb-content">
            <span className="breadcrumb-subtitle">GET IN TOUCH</span>

            <h1>Contact Us</h1>

            <div className="breadcrumb-nav">
              <Link to="/">Home</Link>
              <span>/</span>
              <span>Contact Us</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section p-0 py-3">
        <div className="container">

          {/* Heading */}
          <div className="contact-heading">
            <span className="contact-eyebrow">GET IN TOUCH</span>

            <h2>
              Let’s Build Something
              <span> Great Together.</span>
            </h2>

            <p>
              Have a requirement or looking for reliable industrial solutions?
              Get in touch with the Best Industries team.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="row g-4">

            {/* Phone */}
            <div className="col-md-4">
              <div className="contact-card phone-card">
                <div className="card-bg-number">01</div>

               <div className="contact-icon">
  <i className="bi bi-telephone-fill"></i>
</div>


                <div className="contact-card-content">
                  <span>CALL US</span>
                  <h3>Phone Number</h3>

                  <a href="tel:+917299605040">+91 7299605040</a><br />
                  <a href="tel:+917358705040">+91 73587 05040</a><br />
                  <a href="tel:+919566088070">+91 95660 88070</a>
                </div>

                <div className="card-arrow">↗</div>
              </div>
            </div>

            {/* Email */}
            <div className="col-md-4">
              <div className="contact-card email-card">
                <div className="card-bg-number">02</div>

                <div className="contact-icon">
  <i className="bi bi-envelope-fill"></i>
</div>


                <div className="contact-card-content">
                  <span>EMAIL US</span>
                  <h3>Email Address</h3>

                  <a href="mailto:info@bestindustries.in">
                    info@bestindustries.in
                  </a>
                  <br />
                  <a href="mailto:booking@bestindustries.in">
                    booking@bestindustries.in
                  </a>
                </div>

                <div className="card-arrow">↗</div>
              </div>
            </div>

            {/* Address */}
            <div className="col-md-4">
              <div className="contact-card address-card">
                <div className="card-bg-number">03</div>

              <div className="contact-icon">
  <i className="bi bi-geo-alt-fill"></i>
</div>

                <div className="contact-card-content">
                  <span>VISIT US</span>
                  <h3>Our Address</h3>

                  <strong>BEST INDUSTRIES</strong>

                  <p>
                    No 270, Railway Station Road,
                    <br />
                    Korattur, Chennai: 600 080
                    <br />
                    Tamilnadu, India.
                  </p>
                </div>

                <div className="card-arrow">↗</div>
              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  );
};

export default ContactUs;
