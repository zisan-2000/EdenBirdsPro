import { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import Navbar2 from "../components/navbar/Navbar2";
import { aboutUsData } from "../Data/Data";

const AboutUs = () => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    setAnimated(true);
  }, []);

  return (
    <div>
      <Navbar2 />

      <div className="container mx-auto px-4 py-8">
        <h1
          className={`mb-8 justify-center rounded-lg border-2 border-double border-green-600 p-4 text-center text-4xl font-bold ${
            animated ? "animate-fadeIn" : ""
          } hover:scale-105 hover:transform hover:border-green-700 hover:duration-300`}
        >
          {aboutUsData.heading}
        </h1>

        <p className={`mb-8 text-lg ${animated ? "animate-fadeIn" : ""}`}>
          {aboutUsData.description}
        </p>

        <h2
          className={`mb-6 text-3xl font-bold ${
            animated ? "animate-fadeIn" : ""
          }`}
        >
          Our Mission
        </h2>
        <p className={`mb-8 text-lg ${animated ? "animate-fadeIn" : ""}`}>
          {aboutUsData.mission}
        </p>

        <h2
          className={`mb-6 text-3xl font-bold ${
            animated ? "animate-fadeIn" : ""
          }`}
        >
          Our Values
        </h2>
        <ul className={`mb-8 text-lg ${animated ? "animate-fadeIn" : ""}`}>
          {aboutUsData.values.map((value, index) => (
            <li key={index} className="mb-4">
              {value}
            </li>
          ))}
        </ul>

        <h2
          className={`mb-6 text-3xl font-bold ${
            animated ? "animate-fadeIn" : ""
          }`}
        >
          Core Members
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {aboutUsData.coreMembers.map((member, index) => (
            <div
              key={index}
              className={`rounded-lg bg-gray-100 p-3 ring-2 ring-purple-600 ${
                animated ? "animate-slideInUp" : ""
              } hover:scale-105 hover:transform hover:border-2 hover:border-green-600 hover:shadow-lg hover:duration-300`}
            >
              <img
                src={member.image}
                alt={member.name}
                className="mb-2 w-full rounded-lg"
              />
              <h3 className="mb-2 text-2xl font-semibold text-purple-600">
                {member.name}
              </h3>
              <p className="text-lg text-gray-700">{member.position}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;
