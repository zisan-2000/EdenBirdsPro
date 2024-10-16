import React from "react";
import { Link } from "react-router-dom";
import { bannerData } from "../../Data/Data";

const Banner = () => {
  const { title, description, videoUrl, button } = bannerData;

  return (
    <main className="bg-gradient-to-r from-violet-950 to-violet-900">
      <section data-aos="fade-up" className="container py-8 md:py-12">
        <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-3 md:gap-8">
          <div className="order-2 flex flex-col items-center gap-4 text-center text-white md:col-span-2 md:items-start md:text-left">
            <h1 className="text-4xl font-bold">{title}</h1>
            <p className="text-lg">{description}</p>
            <Link to={button.link}>
              <button className={button.classes}>{button.label}</button>
            </Link>
          </div>
          <div className="order-1">
            <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:z-10 hover:scale-105">
              <iframe
                className="aspect-video w-full rounded-lg"
                src={videoUrl}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Banner;
