import React from 'react';
import Hero from './Hero';
import AboutUs from './AboutSection';
import Services from '../pages/Services';
import WhyChooseUs from '../pages/WhyChooseUs ';
import Features from '../pages/Features';
import Expertise from '../pages/Expertise';
import FAQ from '../pages/faqData';
import Testimonials from '../pages/Testimonials';
import Blog from '../pages/Blog';





const HeroSection = () => {
  
  return (

    <div className="th-hero-wrapper hero-1" id="hero">
              {/* <Carousel/> */}
            <Hero/>
            <AboutUs/>
            <Services/>
            <WhyChooseUs/>
            <Features/>
            <Expertise/>
            <FAQ/>
            <Testimonials/>
            <Blog/>
    </div>
  );
};

export default HeroSection;
