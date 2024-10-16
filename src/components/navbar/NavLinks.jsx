// NavLinks.js
import { FaCaretDown } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <ul className="flex items-center gap-3">
      <li className="group relative cursor-pointer">
        <NavLink to="" className="flex items-center gap-2">
          Hover Here{" "}
          <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
        </NavLink>
        <div className="absolute left-0 z-[9999] hidden w-[150px] rounded-md bg-white p-4 text-black group-hover:block">
          <ul className="space-y-3">
            <NavLinkItem path="/" label="Home" />
            <NavLinkItem path="/about" label="About Us" />
            <NavLinkItem path="/team" label="Meet Our Executive Team" />
            <NavLinkItem path="/Cloud" label="Services" />
            <NavLinkItem path="/contact" label="Contact" />
            <NavLinkItem path="/blogs" label="Blogs" />
            <NavLinkItem path="/privacy" label="Privacy Policy" />
          </ul>
        </div>
      </li>
      <li className="group relative cursor-pointer">
        <NavLink to="services" className="flex items-center gap-2">
          Services{" "}
          <FaCaretDown className="transform transition-transform duration-200 group-hover:rotate-180" />
        </NavLink>
        <div className="absolute left-0 z-10 hidden w-96 rounded-lg bg-white text-gray-800 shadow-lg group-hover:block">
          <div className="flex gap-4 p-4">
            <div className="w-36 overflow-hidden">
              <img
                className="rounded-lg"
                src="https://picsum.photos/200"
                alt="Service"
              />
            </div>
            <div>
              <div className="mb-4">
                <h1 className="text-lg font-semibold">Best Selling</h1>
                <p className="text-sm text-gray-600">
                  Explore our top-rated services tailored to meet your needs.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h2 className="text-md mb-2 font-semibold">Development</h2>
                  <ul className="flex flex-col gap-1">
                    <NavLinkItem path="/Cloud" label="Big Data Analysis" />
                    <NavLinkItem path="/services" label="Regular Services" />
                    <NavLinkItem path="/Web" label="Web Development" />
                  </ul>
                </div>
                <div>
                  <h2 className="text-md mb-2 font-semibold">Other Services</h2>
                  <ul className="flex flex-col gap-1">
                    <NavLinkItem path="/IOS" label="iOS App Development" />
                    <NavLinkItem
                      path="/Mobile"
                      label="Mobile App Development"
                    />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li className="group relative cursor-pointer">
        <NavLink
          to="/technologies/frontend"
          className="flex items-center gap-2"
        >
          Technologies{" "}
          <FaCaretDown className="transform transition-transform duration-200 group-hover:rotate-180" />
        </NavLink>
        <div className="absolute left-0 z-10 hidden w-96 rounded-lg bg-white text-gray-800 shadow-lg group-hover:block">
          <div className="flex gap-4 p-4">
            <div className="w-36 overflow-hidden">
              <img
                className="rounded-lg"
                src="https://picsum.photos/200"
                alt="Service"
              />
            </div>
            <div>
              <div className="mb-4">
                <h1 className="text-lg font-semibold">Our Technologies</h1>
                <p className="text-sm text-gray-600">
                  Explore our top-rated services tailored to meet your needs.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <NavLinkItem
                    path="/technologies/frontend"
                    label="Frontend Technology"
                  />
                </div>
                <div>
                  <NavLinkItem
                    path="/technologies/backend"
                    label="Backend Technology"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li className="group relative cursor-pointer">
        <NavLink to="/products/govt" className="flex items-center gap-2">
          Our Products{" "}
          <FaCaretDown className="transform transition-transform duration-200 group-hover:rotate-180" />
        </NavLink>
        <div className="absolute left-0 z-10 hidden w-96 rounded-lg bg-white text-gray-800 shadow-lg group-hover:block">
          <div className="flex gap-4 p-4">
            <div className="w-36 overflow-hidden">
              <img
                className="rounded-lg"
                src="https://picsum.photos/200"
                alt="Service"
              />
            </div>
            <div>
              <h1 className="text-lg font-semibold">Our Products</h1>
              <p className="text-sm text-gray-600">
                Explore our top-rated services tailored to meet your needs.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <NavLinkItem path="/products/govt" label="Govt" />
                  <NavLinkItem path="/products/seo" label="SEO Agencies" />
                  <NavLinkItem path="/products/financial" label="Financial" />
                </div>
                <div>
                  <NavLinkItem path="/products/corporate" label="Corporate" />
                  <NavLinkItem path="/products/ecommerce" label="Ecommerce" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li>
        <NavLink to="/contact" className="flex items-center gap-2">
          Contact
        </NavLink>
      </li>
    </ul>
  );
};

const NavLinkItem = ({ path, label }) => (
  <li className="mb-2 cursor-pointer hover:text-primary">
    <NavLink
      to={path}
      className={({ isActive }) => (isActive ? "text-red-500" : "")}
    >
      {label}
    </NavLink>
  </li>
);

export default NavLinks;
