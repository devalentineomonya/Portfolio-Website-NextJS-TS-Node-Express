import weatherPreview from "@/assets/images/devalWeatherApp.png";
import weatherPopup from "@/assets/images/devalWeatherApp2.png";
import defaultPreview from "@/assets/images/defaultPreview.png";
import defaultPopup from "@/assets/images/defaultPopup.png";
//
//SUGGESTED DEXCRIPTION LWNGTH 43 WORDS 295 CHARACTERS
// __________________________________________________//

const projectsList = [
  {
    id: 1,
    name: "DevalShopping Cart",
    previewImage: defaultPreview,
    popupImage: defaultPopup,
    technologies: ["ReactJS", "NodeJS", "Express"],
    environment:"web",
    description:
      "DevalShopping Cart is a full-stack eCommerce app built with ReactJS, NodeJS, and Express. It offers user login, product browsing, a shopping cart, secure checkout, and order tracking. With an intuitive interface, it provides a smooth and efficient shopping experience.",
    liveLink: "https://devalshoppingcart.vercel.app/",
    githubLink:
      "https://github.com/devalentineomonya/React-Node-E-commerce-Application",
  },

  {
    id: 2,
    name: "DevalCinemaz",
    previewImage: defaultPreview,
    popupImage: defaultPopup,
    technologies: ["NextJS", "TMDB API", "Cleck Auth"],
    environment:"web",
    description:
      "DevalCinemaz is a movie trailer platform built with NextJS and powered by the TMDB API. It lets users explore a vast collection of movies, view trailers, and access movie details like release dates, ratings, and overviews. With a responsive interface, users can browse through popular and upcoming films.",
    liveLink: "https://devalcinemaz.vercel.app/",
    githubLink:
      "https://github.com/devalentineomonya/DevalCinemaz-NexJS-Movies-Site-Stable-Version",
  },
  {
    id: 3,
    name: "DevalMotors",
    previewImage: defaultPreview,
    popupImage: defaultPopup,
    technologies: ["NextJS", "TS", "Hono", "NodeJS"],
    environment:"web",
    description:
      "DevalMotors is a vehicle booking platform built with NextJS, TypeScript, Hono, and NodeJS. It allows users to browse and book various vehicles, offering a streamlined experience for scheduling rides and managing reservations. With a user-friendly interface and real-time booking features, DevalMotors makes vehicle rentals quick and efficient.",
    liveLink: "http://devalmotors.vercel.app",
    githubLink:
      "https://github.com/devalentineomonya/Car-Rential-Website-Next-TS-Hono-React-Shadcn",
  },
  {
    id: 4,
    name: "DevalWeather App",
    previewImage: weatherPreview,
    popupImage: weatherPopup,
    technologies: [ "ReactJS", "OpenWeather API"],
    environment:"web",
    description:
      "The React Weather App provides hyperlocal, 5-day forecasts in 3-hour increments for any location. Access temperature, humidity, wind speed, and pressure data. Ideal for travelers and professionals, this app offers effortless navigation and a clear, intuitive interface for informed decision-making",
    liveLink: "https://deval-weather-app.vercel.app/",
    githubLink: "https://github.com/devalentineomonya/ReactJS-Weather-App",
  },
  {
    id: 5,
    name: "254 Outfit E-Commerce",
    previewImage: defaultPreview,
    popupImage: defaultPopup,
    technologies: ["NextJS", "Hono", "TS", "Node"],
    environment:"web",
    description:
      "254 Outfit E-Commerce is an online platform built with NextJS, Hono, TypeScript, and NodeJS, designed to help users find stylish outfits in Kenya. With a focus on local fashion, the website offers a wide range of clothing options, easy navigation, and a seamless shopping experience.",
    liveLink: "https://254outfitcommerce.vercel.app",
    githubLink: "https://github.com/devalentineomonya/Outfit-Ecommerce-Website",
  },
  {
    id: 6,
    name: "DevalCodeMe",
    previewImage: defaultPreview,
    popupImage: defaultPopup,
    technologies: ["NextJS", "Hono", "TS", "Node"],
    environment:"web",
    description:
      "DevalCodeMe is an e-learning platform built with NextJS, Hono, TypeScript, and NodeJS. It offers coding challenges, tests, and learning resources to help users improve their programming skills in a practical and engaging way.",
    liveLink: "https://devalcodeme.vercel.app",
    githubLink: "https://github.com/devalentineomonya/ReactJS-Weather-App",
  },
];
export default projectsList;
