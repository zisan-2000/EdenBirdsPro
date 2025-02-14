import React, { useEffect, useState } from "react";
import { BiMoon, BiSun } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { footerData } from "../../Data/Data";

const Footer = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "system");

  useEffect(() => {
    const element = document.documentElement;
    if (theme === "dark") {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <footer className="bg-violet-900 text-white">
      <div className="container flex flex-col items-center justify-between py-12 md:flex-row">
        <div className="md:w-1/3">
          <div className="mb-4 flex items-center justify-center md:mb-0">
            <div className="relative h-20 w-20 overflow-hidden rounded-full border-4 border-white shadow-md transition duration-300 hover:shadow-lg md:h-24 md:w-24">
              <img
                src={footerData.company.logo}
                alt="logo"
                className="h-full w-full transform object-cover duration-500 hover:scale-105"
                style={{ filter: theme === "dark" ? "invert(1)" : "invert(0)" }}
              />
            </div>
          </div>
          <h1 className="text-center font-serif text-2xl font-bold tracking-wider sm:text-4xl">
            <a
              href="/#home"
              className="flex items-center justify-center transition duration-300 ease-in-out hover:text-primary"
            >
              <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                {footerData.company.name.split(" ")[0]}
              </span>
              <span className="ml-2 inline-block text-primary drop-shadow-lg">
                {footerData.company.name.split(" ")[1]}
              </span>
            </a>
          </h1>
          <p className="mt-2 text-center">{footerData.company.description}</p>
        </div>

        <div className="mt-8 md:mt-0 md:w-2/3">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
            <div>
              <h2 className="mb-4 text-xl font-semibold">Important Links</h2>
              <ul className="flex flex-col gap-2">
                {footerData.importantLinks.map((link, index) => (
                  <li
                    key={index}
                    className="cursor-pointer transition duration-300 hover:text-primary"
                  >
                    <NavLink to={link.path}>{link.label}</NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="mb-4 text-xl font-semibold">Links</h2>
              <ul className="flex flex-col gap-2">
                {footerData.additionalLinks.map((link, index) => (
                  <li
                    key={index}
                    className="cursor-pointer transition duration-300 hover:text-primary"
                  >
                    <NavLink to={link.path}>{link.label}</NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="mb-4 text-xl font-semibold">Social Links</h2>
              <div className="flex flex-col gap-2">
                <h3>Subscribe to our newsletter</h3>
                <input
                  className="rounded-full px-3 py-1 text-black focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  type="text"
                  placeholder="Email"
                />
                <div className="flex gap-2">
                  {footerData.socialLinks.map((social, index) => (
                    <NavLink key={index} to={social.path}>
                      {social.icon}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-300 pb-4 pt-8 text-center">
        <p>© {footerData.copyright}</p>
        <button
          onClick={toggleTheme}
          className="mt-4 rounded-md border border-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white"
        >
          {theme === "dark" ? (
            <BiSun className="text-xl text-white" />
          ) : (
            <BiMoon className="text-xl text-white" />
          )}
        </button>
      </div>
    </footer>
  );
};

export default Footer;
