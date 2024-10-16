import React from "react";
import { Link } from "react-router-dom";
import { heroData } from "../../Data/Data";

const Hero = () => {
  return (
    <main className="relative">
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={heroData.videoSrc} type="video/mp4" />
      </video>

      {/* Content */}
      <section className="container relative z-10 flex h-[950px] flex-col items-center justify-center md:h-[800px] ">
        <div className="grid grid-cols-1 items-center gap-8 text-white md:grid-cols-2">
          <div
            data-aos="fade-right"
            data-aos-duration="400"
            data-aos-once="true"
            className="flex flex-col items-center gap-4 text-center md:items-start md:text-left"
          >
            <h1 className="mb-3 scale-100 transform animate-bounce text-4xl transition-transform duration-500 hover:scale-105">
              <span className="scale-100 transform rounded text-4xl text-primary transition-transform duration-500 hover:scale-105">
                {heroData.title}
              </span>{" "}
              {heroData.subtitle}
            </h1>
            <p className="scale-100 transform transition-transform duration-500 hover:scale-105">
              {heroData.description}
            </p>

            <div className="space-x-4">
              {heroData.buttons.map((button, index) => (
                <Link to={button.link} key={index}>
                  <button className={button.classes}>{button.label}</button>
                </Link>
              ))}
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="400"
            data-aos-once="true"
            className="mx-auto max-w-xs p-4"
          >
            <img
              src={heroData.bannerSrc}
              alt="No image"
              className="hover:drop-shadow-md"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
