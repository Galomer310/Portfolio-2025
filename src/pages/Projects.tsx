// Projects.tsx
import ProjectCard from "../components/ProjectCard";
import { FaTools } from "react-icons/fa";
// Import project images.
import StockTrackerImage from "../assets/StockTracker.png";
import CurrencyConverter from "../assets/Currency-Converter.png";
import StorySharing from "../assets/StorySharing.png";
import NightOut from "../assets/food&drinkCalc.png";
import TriviaGame from "../assets/triviaGame.png";
import RobotScientist from "../assets/robotSci.png";
import RecipeFinder from "../assets/RecipeFinder.png";

// Define the Project interface.
interface Project {
  name: string;
  image: string;
  description: string;
  github: string;
  live: string;
  videoDemo?: string; // Make optional or required, depending on the use case
}

// Array of projects.
const projects: Project[] = [
  {
    name: "Stock Tracker",
    image: StockTrackerImage,
    description:
      "A web-based platform that allows users to track stock market, and manage their watchlist.",
    github: "https://github.com/Galomer310/StockTrack-frontend",
    live: "https://stocktrack-frontend-u3br.onrender.com",
    videoDemo: "https://www.youtube.com/watch?v=XTYVHmeUiLY&t=4s",
  },
  {
    name: "Recipe Finder",
    image: RecipeFinder,
    description:
      "Discover new recipes based on ingredients you have! Simply enter ingredients, select dietary preferences, and explore delicious meals.",
    github: "https://github.com/Galomer310/recipe_finder_frontend",
    live: "https://recipe-finder-frontend-wzop.onrender.com",
    videoDemo: "https://www.youtube.com/watch?v=iE7zy6EqTCw",
  },
  {
    name: "Story Sharing Platform",
    image: StorySharing,
    description:
      "Web application that allows users to create, share, and read engaging stories.",
    github: "https://github.com/Galomer310/Story_Sharing",
    live: "https://story-sharing-site.onrender.com",
    videoDemo: "https://www.youtube.com/watch?v=n3H7QsP6v_0",
  },
  {
    name: "Trivia Game",
    image: TriviaGame,
    description:
      "A fun and interactive web application where users can test their knowledge by answering trivia questions.",
    github: "https://github.com/Galomer310/Trivia-Game-2025",
    live: "https://trivia-game-2025.onrender.com",
    videoDemo: "https://www.youtube.com/watch?v=0NOXBXu1zdI",
  },
  {
    name: "Night Out",
    image: NightOut,
    description:
      "Calculator that helps you split and manage expenses for food, drinks, and tips.",
    github: "https://github.com/Galomer310/Night_Out2",
    live: "https://galomer310.github.io/Night_Out2/",
  },
  {
    name: "Robot-scientist",
    image: RobotScientist,
    description:
      "A simple React application that displays a list of famous scientists as robots. Users can search for a scientist by name. The application dynamically filters matching robots.",
    github: "https://github.com/Galomer310/Robot-scientist",
    live: "https://galomer310.github.io/Robot-scientist/",
  },
  {
    name: "Currency Converter",
    image: CurrencyConverter,
    description:
      "A real-time exchange rates easily convert amounts between different currencies.",
    github: "https://github.com/Galomer310/Currency-Converter",
    live: "https://galomer310.github.io/Currency-Converter/",
  },
];

// Projects component renders a list of ProjectCard components.
const Projects: React.FC = () => {
  return (
    <>
      <h2 className="pojectsHeader">My Projects</h2>
      <section className="projects">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </section>
      {/* NEW SECTION: "Currently Working On" */}
      <section className="currently-working-on">
        <h2>
          <FaTools style={{ marginRight: "10px" }} />
          Currently Working On
        </h2>
        <p>
          Here I can give a quick overview of some awesome side projects I’m
          actively developing. For example...
        </p>
        <ul>
          <li>
            <strong>Ehud Fitness Platform</strong> is a web-based application
            designed to help users achieve their fitness goals through
            personalized workout plans and subscription options. The app
            provides secure user authentication, email verification, and a
            personalized dashboard where users can manage their subscription
            plan.
          </li>

          <li>
            <strong>Card Games Gambling Platform</strong> These days I am
            working in collaboration with a senior developer on a card game
            platform that will allow players from all over the world to enter a
            room with other players and bet real money on a fun, interactive
            casino-style card game.
          </li>
          {/* Add more items as needed */}
        </ul>
      </section>
    </>
  );
};

export default Projects;
