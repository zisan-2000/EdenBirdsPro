import React from "react";
import CountUp from "react-countup";
import { serviceData } from "../../Data/Data";

const Service = () => {
  return (
    <section className="container h-12 md:h-32">
      <div className="mx-auto my-4 grid w-full -translate-y-10 grid-cols-4 divide-x divide-slate-700 bg-white p-2 shadow-lg ring-blue-400 ring-opacity-75 ring-offset-2 ring-offset-slate-700 transition-all duration-300 hover:ring-4 dark:bg-gray-800 dark:text-white/70 md:max-w-[800px] md:-translate-y-16 md:p-8">
        {serviceData.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center"
          >
            <h1 className="text-sm font-bold text-black/80 dark:text-white sm:text-lg md:text-3xl">
              <CountUp
                start={service.start || 0}
                end={service.end}
                duration={service.duration}
                suffix={service.suffix}
                separator={service.separator}
              />
            </h1>
            <h1 className="sm:text-md text-xs md:text-lg">{service.title}</h1>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
