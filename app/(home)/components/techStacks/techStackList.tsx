import { MdDesignServices } from "react-icons/md";
import { IoIosColorPalette } from "react-icons/io";
import { FaServer } from "react-icons/fa";
import { PiMonitorFill } from "react-icons/pi";
import { BsDatabaseFillGear } from "react-icons/bs";
import { FaMobile } from "react-icons/fa";


const techStackList = [
  {
    name: "UI/UX Designer",
    icon:  <IoIosColorPalette size={50} />,
    description:
      "I specialize in creating intuitive and visually appealing user interfaces and experiences using HTML, CSS, and JavaScript. I also have experience with design tools like Figma and prototyping tools like Justinmind.",
  },
  {
    name: "Web Designer",
    icon: <MdDesignServices size={50} />,
    description:
      "As a web designer, I craft beautiful and functional websites using HTML, CSS, and JavaScript. I have expertise in frontend frameworks like Bootstrap and Tailwind CSS to streamline the design process.",
  },
  {
    name: "Backend Development",
    icon: <FaServer size={50}/>,
    description:
      "In backend development, I utilize languages and frameworks such as Python with Django, PHP with Laravel, and Node.js with Express.js to build robust and scalable server-side applications. I am proficient in working with various databases, including MongoDB, MySQL, and SQLite.",
  },
  {
    name: "Frontend Development",
    icon: <PiMonitorFill size={50} />,
    description:
      "I specialize in frontend development, creating interactive and responsive user interfaces using HTML, CSS, and JavaScript. I have experience with modern frontend libraries and frameworks such as React.js, and I strive to follow best practices for maintainable and performant code.",
  },
  {
    name: "Database Design",
    icon: <BsDatabaseFillGear size={50} />,
    description:
      "As a database designer, I design efficient and scalable database schemas using SQL. I have experience with relational databases like MySQL and SQLite, as well as NoSQL databases like MongoDB. I ensure data integrity and optimize database performance.",
  },
  {
    name: "Mobile Development",
    icon: <FaMobile size={50} />,
    description:
      "In mobile development, I build cross-platform mobile applications using frameworks like React Native. I have experience with native mobile development using Kotlin for Android and Swift for iOS, ensuring high-quality and native-like user experiences.",
  },
];

export default techStackList;
