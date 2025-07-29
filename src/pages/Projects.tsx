// // Projects.tsx
// import ProjectCard from "../components/ProjectCard";
// import { FaTools } from "react-icons/fa";
// // Import project images.
// import StockTrackerImage from "../assets/StockTracker.png";
// import CurrencyConverter from "../assets/Currency-Converter.png";
// import StorySharing from "../assets/StorySharing.png";
// import NightOut from "../assets/food&drinkCalc.png";
// import TriviaGame from "../assets/triviaGame.png";
// import RobotScientist from "../assets/robotSci.png";
// import RecipeFinder from "../assets/RecipeFinder.png";

// // Define the Project interface.
// interface Project {
//   name: string;
//   image: string;
//   description: string;
//   github: string;
//   live: string;
//   videoDemo?: string; // Make optional or required, depending on the use case
// }

// // Array of projects.
// const projects: Project[] = [
//   {
//     name: "Stock Tracker",
//     image: StockTrackerImage,
//     description:
//       "A web-based platform that allows users to track stock market, and manage their watchlist.",
//     github: "https://github.com/Galomer310/StockTrack-frontend",
//     live: "https://stocktrack-frontend-u3br.onrender.com",
//     videoDemo: "https://www.youtube.com/watch?v=XTYVHmeUiLY&t=4s",
//   },
//   {
//     name: "Recipe Finder",
//     image: RecipeFinder,
//     description:
//       "Discover new recipes based on ingredients you have! Simply enter ingredients, select dietary preferences, and explore delicious meals.",
//     github: "https://github.com/Galomer310/recipe_finder_frontend",
//     live: "https://recipe-finder-frontend-wzop.onrender.com",
//     videoDemo: "https://www.youtube.com/watch?v=iE7zy6EqTCw",
//   },
//   {
//     name: "Story Sharing Platform",
//     image: StorySharing,
//     description:
//       "Web application that allows users to create, share, and read engaging stories.",
//     github: "https://github.com/Galomer310/Story_Sharing",
//     live: "https://story-sharing-site.onrender.com",
//     videoDemo: "https://www.youtube.com/watch?v=n3H7QsP6v_0",
//   },
//   {
//     name: "Trivia Game",
//     image: TriviaGame,
//     description:
//       "A fun and interactive web application where users can test their knowledge by answering trivia questions.",
//     github: "https://github.com/Galomer310/Trivia-Game-2025",
//     live: "https://trivia-game-2025.onrender.com",
//     videoDemo: "https://www.youtube.com/watch?v=0NOXBXu1zdI",
//   },
//   {
//     name: "Night Out",
//     image: NightOut,
//     description:
//       "Calculator that helps you split and manage expenses for food, drinks, and tips.",
//     github: "https://github.com/Galomer310/Night_Out2",
//     live: "https://galomer310.github.io/Night_Out2/",
//   },
//   {
//     name: "Robot-scientist",
//     image: RobotScientist,
//     description:
//       "A simple React application that displays a list of famous scientists as robots. Users can search for a scientist by name. The application dynamically filters matching robots.",
//     github: "https://github.com/Galomer310/Robot-scientist",
//     live: "https://galomer310.github.io/Robot-scientist/",
//   },
//   {
//     name: "Currency Converter",
//     image: CurrencyConverter,
//     description:
//       "A real-time exchange rates easily convert amounts between different currencies.",
//     github: "https://github.com/Galomer310/Currency-Converter",
//     live: "https://galomer310.github.io/Currency-Converter/",
//   },
// ];

// // Projects component renders a list of ProjectCard components.
// const Projects: React.FC = () => {
//   return (
//     <>
//       <h2 className="pojectsHeader">My Projects</h2>
//       <section className="projects">
//         {projects.map((project) => (
//           <ProjectCard key={project.name} project={project} />
//         ))}
//       </section>
//       {/* NEW SECTION: "Currently Working On" */}
//       <section className="currently-working-on">
//         <h2>
//           <FaTools style={{ marginRight: "10px" }} />
//           Currently Working On
//         </h2>
//         <p>
//           Here I can give a quick overview of some awesome side projects I’m
//           actively developing. For example...
//         </p>
//         <ul>
//           <li>
//             <strong>Ehud Fitness Platform</strong> is a web-based application
//             designed to help users achieve their fitness goals through
//             personalized workout plans and subscription options. The app
//             provides secure user authentication, email verification, and a
//             personalized dashboard where users can manage their subscription
//             plan.
//           </li>

//           <li>
//             <strong>Card Games Gambling Platform</strong> These days I am
//             working in collaboration with a senior developer on a card game
//             platform that will allow players from all over the world to enter a
//             room with other players and bet real money on a fun, interactive
//             casino-style card game.
//           </li>
//           {/* Add more items as needed */}
//         </ul>
//       </section>
//     </>
//   );
// };

// export default Projects;

import ProjectCard from "../components/ProjectCard";
import { FaTools } from "react-icons/fa";

// Import project images
import StockTrackerImage from "../assets/StockTracker.png";
import CurrencyConverter from "../assets/Currency-Converter.png";
import StorySharing from "../assets/StorySharing.png";
import NightOut from "../assets/food&drinkCalc.png";
import TriviaGame from "../assets/triviaGame.png";
import RobotScientist from "../assets/robotSci.png";
import RecipeFinder from "../assets/RecipeFinder.png";

// Manisr project screenshots
import ManisrImg1 from "../assets/manisr-1.png";
import ManisrImg2 from "../assets/manisr-2.png";
import ManisrImg3 from "../assets/manisr-3.png";
import ManisrImg4 from "../assets/manisr-4.png";
import ManisrImg5 from "../assets/manisr-5.png";
import ManisrImg6 from "../assets/manisr-6.png";
import ManisrImg7 from "../assets/manisr-7.png";
import ManisrImg8 from "../assets/manisr-8.png";
import ManisrImg9 from "../assets/manisr-9.png";
import ManisrImg10 from "../assets/manisr-10.png";
import ManisrImg11 from "../assets/manisr-11.png";
import ManisrImg12 from "../assets/manisr-12.png";
import ManisrImg13 from "../assets/manisr-13.png";
import ManisrImg14 from "../assets/manisr-14.png";

// Define Project interface supporting both single & multiple images
interface Project {
  name: string;
  image?: string; // For single image projects
  images?: string[]; // For multiple images
  description: string;
  github: string;
  live: string;
  videoDemo?: string;
}

// Projects array
const projects: Project[] = [
  {
    name: "Stock Tracker",
    image: StockTrackerImage,
    description:
      "A web-based platform that allows users to track stock market and manage their watchlist.",
    github: "https://github.com/Galomer310/StockTrack-frontend",
    live: "https://stocktrack-frontend-u3br.onrender.com",
    videoDemo: "https://www.youtube.com/watch?v=XTYVHmeUiLY&t=4s",
  },
  {
    name: "Recipe Finder",
    image: RecipeFinder,
    description:
      "Discover new recipes based on ingredients you have! Enter ingredients, set preferences, and explore delicious meals.",
    github: "https://github.com/Galomer310/recipe_finder_frontend",
    live: "https://recipe-finder-frontend-wzop.onrender.com",
    videoDemo: "https://www.youtube.com/watch?v=iE7zy6EqTCw",
  },
  {
    name: "Story Sharing Platform",
    image: StorySharing,
    description:
      "A social platform where users can create, share, and read stories. Built with React, Redux, Node.js, and PostgreSQL.",
    github: "https://github.com/Galomer310/Story_Sharing",
    live: "https://story-sharing-site.onrender.com",
    videoDemo: "https://www.youtube.com/watch?v=n3H7QsP6v_0",
  },
  {
    name: "Trivia Game",
    image: TriviaGame,
    description:
      "A fun web app where users can test their knowledge by answering trivia questions from an API.",
    github: "https://github.com/Galomer310/Trivia-Game-2025",
    live: "https://trivia-game-2025.onrender.com",
    videoDemo: "https://www.youtube.com/watch?v=0NOXBXu1zdI",
  },
  {
    name: "Night Out",
    image: NightOut,
    description:
      "An expense-sharing tool that helps you split and manage costs for food, drinks, and tips during a night out.",
    github: "https://github.com/Galomer310/Night_Out2",
    live: "https://galomer310.github.io/Night_Out2/",
  },
  {
    name: "Robot-scientist",
    image: RobotScientist,
    description:
      "A simple React app displaying a list of famous scientists as robots. Includes live search and filtering.",
    github: "https://github.com/Galomer310/Robot-scientist",
    live: "https://galomer310.github.io/Robot-scientist/",
  },
  {
    name: "Currency Converter",
    image: CurrencyConverter,
    description:
      "A web tool that converts currency amounts using real-time exchange rates fetched via API.",
    github: "https://github.com/Galomer310/Currency-Converter",
    live: "https://galomer310.github.io/Currency-Converter/",
  },
  {
    name: "Manisr",
    images: [
      ManisrImg1,
      ManisrImg2,
      ManisrImg3,
      ManisrImg4,
      ManisrImg5,
      ManisrImg6,
      ManisrImg7,
      ManisrImg8,
      ManisrImg9,
      ManisrImg10,
      ManisrImg11,
      ManisrImg12,
      ManisrImg13,
      ManisrImg14,
    ],
    description:
      "A food-sharing platform that connects people who have extra food with those who need it. Includes authentication, meal uploads, reservations, and chat.",
    github: "https://github.com/Galomer310/ManisR-frontend",
    live: "https://manisr.onrender.com",
    videoDemo: "https://youtu.be/xZTdfzBigZU",
  },
];

const Projects: React.FC = () => {
  return (
    <>
      <h2 className="pojectsHeader">My Projects</h2>
      <section className="projects">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </section>

      {/* Currently Working On */}
      <section className="currently-working-on">
        <h2>
          <FaTools style={{ marginRight: "10px" }} />
          Currently Working On
        </h2>
        <p>
          Here’s a quick look at some exciting side projects I’m developing:
        </p>
        <ul>
          <li>
            <strong>Ehud Fitness Platform:</strong> A web-based app for custom
            workout plans, subscriptions, and dashboards.
          </li>
          <li>
            <strong>Card Games Gambling Platform:</strong> A real-time card game
            built with Socket.IO where players bet real money globally.
          </li>
        </ul>
      </section>
    </>
  );
};

export default Projects;
