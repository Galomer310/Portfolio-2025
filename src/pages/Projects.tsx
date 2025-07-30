import ProjectCard from "../components/ProjectCard";
import { FaTools } from "react-icons/fa";

// Import project images
import CurrencyConverter from "../assets/Currency-Converter.png";
import StorySharing from "../assets/StorySharing.png";
import NightOut from "../assets/food&drinkCalc.png";
import RobotScientist from "../assets/robotSci.png";

// Recipe Finder project screenshot
import RecipeFinder from "../assets/RecipeFinder.png";
import RecipeFinderImg1 from "../assets/RecipeFinder-1.png";
import RecipeFinderImg2 from "../assets/RecipeFinder-2.png";
import RecipeFinderImg3 from "../assets/RecipeFinder-3.png";
import RecipeFinderImg4 from "../assets/RecipeFinder-4.png";
import RecipeFinderImg5 from "../assets/RecipeFinder-5.png";
import RecipeFinderImg6 from "../assets/RecipeFinder-6.png";
import RecipeFinderImg7 from "../assets/RecipeFinder-7.png";
import RecipeFinderImg8 from "../assets/RecipeFinder-8.png";
import RecipeFinderImg9 from "../assets/RecipeFinder-9.png";
import RecipeFinderImg10 from "../assets/RecipeFinder-10.png";
import RecipeFinderImg11 from "../assets/RecipeFinder-11.png";
import RecipeFinderImg12 from "../assets/RecipeFinder-12.png";

// Stock Tracker project screenshots
import StockTrackerImage from "../assets/StockTracker.png";
import StockTrackerImg1 from "../assets/StockTracker-1.png";
import StockTrackerImg2 from "../assets/StockTracker-2.png";
import StockTrackerImg3 from "../assets/StockTracker-3.png";
import StockTrackerImg4 from "../assets/StockTracker-4.png";
import StockTrackerImg5 from "../assets/StockTracker-5.png";
import StockTrackerImg6 from "../assets/StockTracker-6.png";
import StockTrackerImg7 from "../assets/StockTracker-7.png";
import StockTrackerImg8 from "../assets/StockTracker-8.png";
import StockTrackerImg9 from "../assets/StockTracker-9.png";

// Trivia Game project screenshots
import TriviaGame from "../assets/triviaGame.png";
import TriviaGameImg1 from "../assets/triviaGame-1.png";
import TriviaGameImg2 from "../assets/triviaGame-2.png";
import TriviaGameImg3 from "../assets/triviaGame-3.png";
import TriviaGameImg4 from "../assets/triviaGame-4.png";
import TriviaGameImg5 from "../assets/triviaGame-5.png";
import TriviaGameImg6 from "../assets/triviaGame-6.png";
import TriviaGameImg7 from "../assets/triviaGame-7.png";
import TriviaGameImg8 from "../assets/triviaGame-8.png";
import TriviaGameImg9 from "../assets/triviaGame-9.png";
import TriviaGameImg10 from "../assets/triviaGame-10.png";
import TriviaGameImg11 from "../assets/triviaGame-11.png";

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
    images: [
      StockTrackerImg1,
      StockTrackerImg2,
      StockTrackerImg3,
      StockTrackerImg4,
      StockTrackerImg5,
      StockTrackerImg6,
      StockTrackerImg7,
      StockTrackerImg8,
      StockTrackerImg9,
    ],
    description:
      "A web-based platform that allows users to track stock market and manage their watchlist.",
    github: "https://github.com/Galomer310/StockTrack-frontend",
    live: "https://stocktrack-frontend-u3br.onrender.com",
    videoDemo: "https://www.youtube.com/watch?v=XTYVHmeUiLY&t=4s",
  },
  {
    name: "Recipe Finder",
    image: RecipeFinder,
    images: [
      RecipeFinderImg1,
      RecipeFinderImg2,
      RecipeFinderImg3,
      RecipeFinderImg4,
      RecipeFinderImg5,
      RecipeFinderImg6,
      RecipeFinderImg7,
      RecipeFinderImg8,
      RecipeFinderImg9,
      RecipeFinderImg10,
      RecipeFinderImg11,
      RecipeFinderImg12,
    ],
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
    name: "Trivia Game",
    image: TriviaGame,
    images: [
      TriviaGameImg1,
      TriviaGameImg2,
      TriviaGameImg3,
      TriviaGameImg4,
      TriviaGameImg5,
      TriviaGameImg6,
      TriviaGameImg7,
      TriviaGameImg8,
      TriviaGameImg9,
      TriviaGameImg10,
      TriviaGameImg11,
    ],
    description:
      "A fun web app where users can test their knowledge by answering trivia questions from an API.",
    github: "https://github.com/Galomer310/Trivia-Game-2025",
    live: "https://trivia-game-2025.onrender.com",
    videoDemo: "https://www.youtube.com/watch?v=0NOXBXu1zdI",
  },
  {
    name: "Manisr",
    image: ManisrImg1, // Use the first image as the main image
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
