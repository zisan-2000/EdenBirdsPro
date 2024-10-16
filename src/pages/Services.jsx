import { motion } from "framer-motion";
import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar2 from "../components/navbar/Navbar2";
import { servicesData } from "../Data/Data";

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-100 dark:bg-slate-800"
    >
      <Navbar2 />
      <div className="container mx-auto min-h-screen py-12">
        <h1 className="heading">Our Services</h1>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="rounded-lg bg-white p-6 shadow-md dark:bg-slate-800"
            >
              <img
                src={service.image}
                alt={service.title}
                className="mb-4 h-40 w-full rounded object-cover"
              />
              <h2 className="mb-4 text-xl font-semibold text-gray-800 dark:text-white">
                {service.title}
              </h2>
              <p className="text-gray-600 dark:text-white">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </motion.div>
  );
};

export default Services;
