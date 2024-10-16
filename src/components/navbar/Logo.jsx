// Logo.js
import logo from "../../assets/logo.jpeg";

const Logo = ({ theme }) => {
  return (
    <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-white shadow-md transition duration-300 hover:shadow-xl sm:h-12 sm:w-12 md:h-14 md:w-14">
      <img
        src={logo}
        alt="logo"
        className="h-full w-full object-cover"
        style={{ filter: theme === "dark" ? "invert(1)" : "invert(0)" }}
      />
    </div>
  );
};

export default Logo;
