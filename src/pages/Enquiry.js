import React, { useState } from "react";
import "./Enquiry.css";
import { Link } from "react-router-dom";

const Enquiry = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus({
      loading: true,
      success: false,
      error: "",
    });

    try {
      const response = await fetch(
        "https://YOUR-WORDPRESS-SITE.COM/wp-json/best-industries/v1/enquiry",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong.");
      }

      setStatus({
        loading: false,
        success: true,
        error: "",
      });

      setFormData({
        name: "",
        phone: "",
        email: "",
        company: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setStatus({
        loading: false,
        success: false,
        error: error.message || "Unable to submit enquiry.",
      });
    }
  };

  return (

<>



     <section className="contact-breadcrumb">
        <div className="container">
          <div className="breadcrumb-content">
            <span className="breadcrumb-subtitle">GET IN TOUCH</span>

            <h1>Enquiry</h1>

            <div className="breadcrumb-nav">
              <Link to="/">Home</Link>
              <span>/</span>
              <span>Enquiry</span>
            </div>
          </div>
        </div>
      </section>
    <section className="enquiry-section">
      <div className="container">

        <div className="enquiry-wrapper">

          {/* Left Content */}
          <div className="enquiry-info">

            <span className="enquiry-eyebrow">
              HAVE AN ENQUIRY?
            </span>

            <h2>
              Let’s Discuss Your
              <span> Requirement.</span>
            </h2>

            <p>
              Tell us about your requirement and our team at
              <strong> BEST INDUSTRIES </strong>
              will get back to you shortly.
            </p>

            <div className="enquiry-points">

              <div className="enquiry-point">
                <div className="point-icon">✓</div>
                <div>
                  <h4>Quick Response</h4>
                  <p>Our team will respond to your enquiry promptly.</p>
                </div>
              </div>

              <div className="enquiry-point">
                <div className="point-icon">✓</div>
                <div>
                  <h4>Industrial Solutions</h4>
                  <p>Discuss your requirements with our experts.</p>
                </div>
              </div>

              <div className="enquiry-point">
                <div className="point-icon">✓</div>
                <div>
                  <h4>Direct Contact</h4>
                  <p>Call us directly at +91 72996 05040.</p>
                </div>
              </div>

            </div>

          </div>


          {/* Form */}
          <div className="enquiry-form-wrapper">

            <div className="form-top">
              <div>
                <span>ENQUIRY FORM</span>
                <h3>Send Us A Message</h3>
              </div>

              <div className="form-number">
                01
              </div>
            </div>

            {status.success && (
              <div className="form-success">
                ✓ Thank you! Your enquiry has been submitted successfully.
              </div>
            )}

            {status.error && (
              <div className="form-error">
                {status.error}
              </div>
            )}

            <form onSubmit={handleSubmit}>

              <div className="row g-3">

                {/* Name */}
                <div className="col-md-6">
                  <div className="input-group-custom">
                    <label>
                      Your Name <span>*</span>
                    </label>

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                </div>


                {/* Phone */}
                <div className="col-md-6">
                  <div className="input-group-custom">
                    <label>
                      Phone Number <span>*</span>
                    </label>

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      required
                    />
                  </div>
                </div>


                {/* Email */}
                <div className="col-md-6">
                  <div className="input-group-custom">
                    <label>Email Address</label>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>


                {/* Company */}
                <div className="col-md-6">
                  <div className="input-group-custom">
                    <label>Company Name</label>

                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company"
                    />
                  </div>
                </div>


                {/* Subject */}
                <div className="col-12">
                  <div className="input-group-custom">
                    <label>Subject</label>

                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What can we help you with?"
                    />
                  </div>
                </div>


                {/* Message */}
                <div className="col-12">
                  <div className="input-group-custom">
                    <label>
                      Your Requirement <span>*</span>
                    </label>

                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your requirement..."
                      rows="5"
                      required
                    />
                  </div>
                </div>


                {/* Submit */}
                <div className="col-12">

                  <button
                    type="submit"
                    className="enquiry-submit"
                    disabled={status.loading}
                  >
                    {status.loading ? (
                      <>
                        <span className="submit-loader"></span>
                        Sending...
                      </>
                    ) : (
                      <>
                        Submit Enquiry
                        <span>↗</span>
                      </>
                    )}
                  </button>

                </div>

              </div>

            </form>

          </div>

        </div>

      </div>
    </section>
</>
  );
};

export default Enquiry;
