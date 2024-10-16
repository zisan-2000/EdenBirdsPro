// MenuButton.js
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";

const MenuButton = ({ showMenu, toggleMenu }) => {
  return showMenu ? (
    <HiMenuAlt1
      onClick={toggleMenu}
      className="cursor-pointer transition-all"
      size={30}
    />
  ) : (
    <HiMenuAlt3
      onClick={toggleMenu}
      className="cursor-pointer transition-all"
      size={30}
    />
  );
};

export default MenuButton;
