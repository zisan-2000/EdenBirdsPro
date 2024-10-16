// Navbar2.js
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import CallButton from "./CallButton";
import Logo from "./Logo";
import MenuButton from "./MenuButton";
import NavLinks from "./NavLinks";
import ResponsiveMenu from "./ResponsiveMenu";
import ThemeToggle from "./ThemeToggle";

const Navbar2 = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [showMenu, setShowMenu] = useState(false);
  const element = document.documentElement;

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <header
      data-aos="fade"
      data-aos-duration="300"
      className=" sticky top-0 z-[99] border-b-[1px] border-primary/50 bg-gradient-to-l from-blue-900 via-blue-800 to-blue-900 text-white shadow-lg"
    >
      <nav className="container mx-auto flex h-[70px] items-center justify-between px-4 py-2">
        <div className="flex items-center">
          <Logo theme={theme} />
          <div className="ml-3 text-lg sm:text-xl md:text-2xl">
            <NavLink
              to="/"
              className="flex items-center font-serif tracking-wide text-white transition duration-300 ease-in-out hover:text-primary"
            >
              <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                EDEN
              </span>
              <span className="ml-1 inline-block font-bold text-primary drop-shadow-lg">
                BIRDS
              </span>
            </NavLink>
          </div>
        </div>
        <div className="hidden items-center gap-4 md:flex">
          <NavLinks />
          <CallButton />
          <ThemeToggle theme={theme} setTheme={setTheme} />
        </div>
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle theme={theme} setTheme={setTheme} />
          <MenuButton showMenu={showMenu} toggleMenu={toggleMenu} />
        </div>
      </nav>
      <ResponsiveMenu showMenu={showMenu} />
    </header>
  );
};

export default Navbar2;
