// Data.jsx

// Video source
import Video from "../assets/2.mp4";

// Image Banner source
import Banner from "../assets/undraw_real_time_sync_re_nky7.svg";

// Data for the Hero section
export const heroData = {
  title: "EDEN BIRDS",
  subtitle: "Innovating the Future of Software Solutions",
  description:
    "EDEN BIRDS is a cutting-edge software company dedicated to transforming ideas into reality through innovative technology solutions. Our mission is to empower businesses and individuals with state-of-the-art software that enhances efficiency, productivity, and user experience.",
  videoSrc: Video,
  bannerSrc: Banner,
  buttons: [
    {
      label: "Get Started",
      link: "/get-started",
      classes:
        "animate-pulse rounded-md border-2 border-blue-500 bg-blue-500 px-4 py-2 text-sm text-white shadow-md transition-transform duration-300 hover:scale-105 hover:border-blue-700 hover:bg-blue-700",
    },
    {
      label: "Learn More",
      link: "/learn-more",
      classes:
        "animate-pulse rounded-md border-2 border-white px-4 py-2 text-sm text-white shadow-md transition-transform duration-300 hover:scale-105 hover:border-blue-500 hover:bg-white hover:text-blue-500",
    },
  ],
};

// Data.jsx

// Service Data
export const serviceData = [
  {
    end: 5,
    suffix: "+",
    duration: 2.75,
    title: "Clients",
  },
  {
    end: 10,
    suffix: "+",
    duration: 2.75,
    title: "Projects",
  },
  {
    end: 1,
    suffix: "k+",
    duration: 2.75,
    title: "Subscribers",
  },
  {
    start: -875.039,
    end: 5,
    duration: 2.75,
    suffix: "+",
    separator: " ",
    title: "Clients",
  },
];

// Data.jsx

// Banner Details Data
export const bannerDetailsData = {
  title: "We Build Apps That Get Trending On Appworld",
  description:
    "EDEN BIRDS is a cutting-edge software company dedicated to transforming ideas into reality through innovative technology solutions. Our mission is to empower businesses and individuals with state-of-the-art software that enhances efficiency, productivity, and user experience.",
  features: [
    "Expert software development tailored to your needs.",
    "Innovative solutions that drive growth and success.",
    "Commitment to quality and exceptional user experience.",
  ],
  button: {
    label: "Get Started",
    link: "/get-started",
    classes:
      "transform animate-pulse rounded-md border-2 border-blue-500 bg-blue-500 px-4 py-2 text-sm text-white shadow-md transition-transform duration-300 hover:scale-105 hover:border-blue-700 hover:bg-blue-700",
  },
};

// Data.jsx

export const bannerData = {
  title: "Market Your Brand with EDEN BIRDS",
  description:
    "EDEN BIRDS is dedicated to transforming your innovative ideas into reality. Our cutting-edge technology solutions empower businesses to enhance efficiency, boost productivity, and create exceptional user experiences. Join us in revolutionizing the software industry with unparalleled expertise and innovation.",
  videoUrl: "https://www.youtube.com/embed/eC_h6w3VWNg",
  button: {
    label: "Get Started",
    link: "/get-started",
    classes:
      "transform animate-pulse rounded-md border-2 border-blue-500 bg-blue-500 px-4 py-2 text-sm text-white shadow-md transition-transform duration-300 hover:scale-105 hover:border-blue-700 hover:bg-blue-700",
  },
};

// Data.jsx

import Img1 from "../assets/blog1.jpg";
import Img2 from "../assets/blog2.jpg";
import Img3 from "../assets/blog3.jpg";

export const blogData = [
  {
    image: Img1,
    date: "April 24, 2022",
    author: "Zulfiker",
    title: "How to grow your business.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    image: Img2,
    date: "Jan 3, 2023",
    author: "Zisan",
    title: "How to grow your business.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    image: Img3,
    date: "April 24, 2024",
    author: "Md. Hossain",
    title: "How to grow your business.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

// Data.jsx

import nahl from "../assets/ann-nahl.png"; // Replace path as needed

export const clientData = [
  {
    name: "Ann-Nahl Software",
    logo: nahl,
    description:
      "Ann-Nahl Software provides cutting-edge software solutions for businesses, with a focus on quality and customer satisfaction.",
    website: "https://aan-nahl.com/",
    contact: "contact@annnahlsoftware.com",
    services: ["Software Development", "Consulting", "Custom Solutions"],
    testimonial:
      "Ann-Nahl Software has transformed the way we operate, delivering high-quality software solutions tailored to our needs.",
  },
  {
    name: "BuzzMoving",
    logo: "https://via.placeholder.com/100", // Replace with actual logo URL
    description:
      "BuzzMoving offers a seamless moving experience, ensuring that all relocations are handled with care and precision.",
    website: "https://www.buzzmoving.com",
    contact: "contact@buzzmoving.com",
    services: ["Residential Moving", "Commercial Moving", "Storage Services"],
    testimonial:
      "BuzzMoving made our relocation stress-free. Their team is efficient, professional, and reliable.",
  },
  {
    name: "Seo-Core",
    logo: "https://via.placeholder.com/100", // Replace with actual logo URL
    description:
      "Seo-Core specializes in boosting online visibility for businesses, using advanced SEO techniques to drive growth.",
    website: "https://www.seo-core.com",
    contact: "contact@seo-core.com",
    services: ["SEO Optimization", "Content Marketing", "Digital Strategy"],
    testimonial:
      "Seo-Core helped us significantly improve our search rankings and grow our online presence.",
  },
];

// Data.jsx

import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../assets/logo.jpeg";

export const footerData = {
  company: {
    name: "EDEN BIRDS",
    description:
      "EDEN BIRDS is a pioneering software company dedicated to transforming innovative ideas into reality.",
    logo: logo,
  },
  importantLinks: [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Contact", path: "/contact" },
  ],
  additionalLinks: [
    { label: "Privacy Policy", path: "/privacy" },
    { label: "Services", path: "/services" },
  ],
  socialLinks: [
    { icon: <FaInstagram className="text-3xl" />, path: "/" },
    { icon: <FaFacebook className="text-3xl" />, path: "/" },
    { icon: <FaLinkedin className="text-3xl" />, path: "/" },
  ],
  copyright: "2024 Talat",
};

// Data.jsx

import uiuxImage from "../assets/mobiledev.jpg";
import webDevImage from "../assets/uiux.jpg";
import mobileDevImage from "../assets/webdev.jpg";

export const servicesData = [
  {
    image: webDevImage,
    title: "Web Development",
    description:
      "We specialize in creating modern, responsive, and user-friendly websites tailored to your business needs.",
  },
  {
    image: mobileDevImage,
    title: "Mobile App Development",
    description:
      "Transform your ideas into powerful mobile applications that engage users and enhance your brand.",
  },
  {
    image: uiuxImage,
    title: "UI/UX Design",
    description:
      "Craft visually stunning and intuitive interfaces that captivate your audience and elevate user experience.",
  },
];

// Data.jsx

import talatImage from "../assets/talat.webp";

export const aboutUsData = {
  heading: "About EDEN BIRDS",
  description:
    "EDEN BIRDS is a dynamic software company dedicated to creating innovative solutions that empower businesses to thrive in the digital age.",
  mission:
    "At EDEN BIRDS, our mission is to revolutionize the software industry by delivering cutting-edge products and services that exceed our clients' expectations.",
  values: [
    "Innovation: We constantly explore new ideas and technologies to stay ahead of the curve.",
    "Quality: We are committed to delivering high-quality solutions that add value to our clients' businesses.",
    "Integrity: We conduct business with honesty, transparency, and integrity.",
    "Customer Satisfaction: We prioritize the needs and satisfaction of our clients above all else.",
    "Collaboration: We believe in the power of collaboration and teamwork to achieve success.",
  ],
  coreMembers: [
    {
      name: "Talat Md. Tawfiq Elahi",
      position: "Co-Founder & CEO",
      image: talatImage,
    },
    {
      name: "Talat Md. Tawfiq Elahi",
      position: "CTO",
      image: talatImage,
    },
    {
      name: "Md.Amenul Islam",
      position: "COO",
      image: talatImage,
    },
  ],
};

// Data.jsx

import { default as CEOImage, default as CTOImage } from "../assets/talat.webp"; // Adjust if the CTO has a different image

export const teamMembersData = [
  {
    id: 1,
    name: "Talat Md. Tawfik Elahi",
    role: "CEO",
    image: CEOImage,
    portfolioLink: "https://talat-me.vercel.app/",
  },
  {
    id: 2,
    name: "Talat Md. Taufik Elahi",
    role: "CTO",
    image: CTOImage,
    portfolioLink: "https://talat-me.vercel.app/",
  },
  {
    id: 3,
    name: "Md. Amenul Islam",
    role: "COO",
    image: CTOImage, // Replace with the correct image if needed
    portfolioLink: "https://aminul-me.vercel.app/",
  },
];

export const roleOrder = ["CEO", "CTO", "COO"];
