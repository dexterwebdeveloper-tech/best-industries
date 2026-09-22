import React from "react";
import { Link } from "react-router-dom";

const blogs = [
  {
    image: "/images/services/gas-cutting-table.png",
    date: "Latest",
    title: "Precision Gas Cutting",
  },
  {
    image: "/images/services/welding-booth.png",
    date: "Latest",
    title: "Welding & Fabrication",
  },
  {
    image: "/images/services/INDUSTRIAL-TROLLEY.png",
    date: "Latest",
    title: "Industrial Fabrication",
  },
];



const Blog = () => {
  return (
    <section className="our-blog">

      <div className="container">

        {/* Section Title */}
        <div className="row section-row">

          <div className="col-lg-12">

            <div className="section-title section-title-center">

              <span className="section-sub-title wow fadeInUp">
                Industry Insights
              </span>

              <h2
                className="text-anime-style-3"
                data-cursor="-opaque"
              >
                Insights into fabrication and industrial engineering
              </h2>

              <p
                className="wow fadeInUp"
                data-wow-delay="0.2s"
              >
                Explore useful insights about metal fabrication, laser
                cutting, industrial products, custom engineering solutions,
                and manufacturing processes from Best Industries.
              </p>

            </div>

          </div>

        </div>

        {/* Blog Posts */}
        <div className="row">

          {blogs.map((blog, index) => (

            <div
              className="col-xl-4 col-md-6"
              key={index}
            >

              <div
                className="post-item wow fadeInUp"
                data-wow-delay={`${index * 0.2}s`}
              >

                {/* Featured Image */}
                <div className="post-featured-image">

                  <figure className="image-anime">

                    <img
                      src={blog.image}
                      alt={blog.title}
                    />

                  </figure>

                

                </div>

                {/* Blog Body */}
                <div className="post-item-body">

                  <div className="post-item-meta">

                    <ul>

                      <li>

                        <i className="fa-solid fa-industry"></i>

                        {blog.date}

                      </li>

                    </ul>

                  </div>

                  <div className="post-item-content">

                    <h2>

                      <Link to="/blog-single">

                        {blog.title}

                      </Link>

                    </h2>

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

        {/* Optional Footer CTA */}
        <div className="row">

          <div className="col-lg-12">

            <div
              className="section-footer-text wow fadeInUp"
              data-wow-delay="0.4s"
            >

              <p>
                Have an industrial requirement or looking for a customized
                fabrication solution?{" "}
                <Link to="/contact-us">
                  Talk to Best Industries.
                </Link>
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Blog;
