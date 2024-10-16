import React from "react";
import { Link } from "react-router-dom";
import { bannerDetailsData } from "../../Data/Data";

const BannerDetails = ({ reverse, img }) => {
  const { title, description, features, button } = bannerDetailsData;

  return (
    <section>
      <main className="mb-10 bg-slate-100 dark:bg-slate-900 dark:text-white">
        <section className="container flex flex-col items-center justify-center py-10 md:h-[500px]">
          <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-2">
            <div
              data-aos="fade-left"
              data-aos-duration="400"
              data-aos-once="true"
              className={`${reverse ? "order-1 md:order-2" : "order-2"} w-full`}
            >
              <img
                src={img}
                alt="No image"
                className="mx-auto w-full transition-all duration-500 hover:drop-shadow-[0_0_20px_rgba(255,215,0,0.8)]"
              />
            </div>
            <div
              data-aos="fade-right"
              data-aos-duration="400"
              data-aos-once="true"
              className={`flex flex-col items-start gap-4 text-left md:items-start md:p-8 md:text-left ${
                reverse ? "order-2 md:order-1" : "order-1"
              }`}
            >
              <h1 className="text-2xl md:text-4xl">{title}</h1>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {description}
              </p>
              <div>
                <ul className="flex list-inside list-disc flex-col gap-2 md:gap-4">
                  {features.map((feature, index) => (
                    <li key={index} className="font-medium">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-x-4">
                <Link to={button.link}>
                  <button className={button.classes}>{button.label}</button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </section>
  );
};

export default BannerDetails;
