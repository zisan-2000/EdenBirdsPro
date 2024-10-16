// CallButton.js
import { BiPhoneCall } from "react-icons/bi";

const CallButton = () => {
  return (
    <div className="flex items-center gap-4 rounded-lg bg-gradient-to-r from-violet-500 to-indigo-500 p-2 shadow-lg">
      <li className="list-none">
        <BiPhoneCall className="h-[40px] w-[40px] transform rounded-full bg-primary p-2 text-2xl text-white transition duration-300 ease-in-out hover:scale-110 hover:bg-primary/90" />
      </li>
      <li className="list-none">
        <div>
          <p className="text-sm text-white">Call us on</p>
          <p className="text-lg font-semibold text-white">
            <a href="tel:01842781978" className="hover:underline">
              01842781978
            </a>
          </p>
        </div>
      </li>
    </div>
  );
};

export default CallButton;
