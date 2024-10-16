// ThemeToggle.js
import { BiSolidMoon, BiSolidSun } from "react-icons/bi";

const ThemeToggle = ({ theme, setTheme }) => {
  return theme === "dark" ? (
    <BiSolidSun
      onClick={() => setTheme("light")}
      className="cursor-pointer text-2xl"
    />
  ) : (
    <BiSolidMoon
      onClick={() => setTheme("dark")}
      className="cursor-pointer text-2xl"
    />
  );
};

export default ThemeToggle;
