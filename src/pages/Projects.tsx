import ProjectCard from "../components/ProjectCard";
import StockTrackerImage from "../assets/StockTracker.png";
import CurrencyConverter from "../assets/Currency-Converter.png";
import StoryTelling from "../assets/StoryTelling.png";
import NightOut from "../assets/food&drinkCalc.png";
import TriviaGame from "../assets/TriviaGame.png";
import RobotScientist from "../assets/robotSci.png";
import RecipeFinder from "../assets/recipe_finder.png";

interface Project {
  name: string;
  image: string;
  description: string;
  github: string;
  live: string;
}

const projects: Project[] = [
  {
    name: "StockTrack",
    image: StockTrackerImage,
    description:
      "A web-based platform that allows users to track stock market, and manage their watchlist.",
    github: "https://github.com/Galomer310/StockTrack-frontend",
    live: "https://stocktrack-frontend-u3br.onrender.com",
  },
  {
    name: "Currency Converter",
    image: CurrencyConverter,
    description:
      "A real-time exchange rates easily convert amounts between different currencies. .",
    github: "https://github.com/Galomer310/Currency-Converter",
    live: "https://galomer310.github.io/Currency-Converter/",
  },
  {
    name: "StoryTelling",
    image: StoryTelling,
    description:
      "web application that allows users to create, share, and read engaging stories.",
    github: "https://github.com/Galomer310/StoryTelling-Frontend-React",
    live: "https://storytelling-frontend-react.onrender.com",
  },
  {
    name: "NightOut",
    image: NightOut,
    description:
      "Calculator that helps you split and manage expenses for food, drinks, and tips.",
    github: "https://github.com/Galomer310/Night_Out2",
    live: "https://galomer310.github.io/Night_Out2/",
  },
  {
    name: "TriviaGame",
    image: TriviaGame,
    description:
      "a fun and interactive web application where users can test their knowledge by answering trivia questions.",
    github: "https://github.com/Galomer310/Trivia-Game",
    live: "https://trivia-game-rvg3.onrender.com",
  },
  {
    name: "Robot-scientist",
    image: RobotScientist,
    description:
      "This project is a simple React application that displays a list of famous scientists as robots. Users can search for a scientist by name using a search bar. The application dynamically filters and displays matching robots.",
    github: "https://github.com/Galomer310/Robot-scientist",
    live: "https://galomer310.github.io/Robot-scientist/",
  },
  {
    name: "Recipe Finder",
    image: RecipeFinder,
    description:
      "Discover new recipes based on ingredients you have! Simply enter ingredients, select dietary preferences, and explore delicious meals. Save your favorite recipes and access them anytime.",
    github: "https://github.com/Galomer310/recipe_finder_frontend",
    live: "https://recipe-finder-frontend-wzop.onrender.com",
  },
];

const Projects: React.FC = () => {
  return (
    <section className="projects">
      <h2>My Projects</h2>
      {projects.map((project) => (
        <ProjectCard key={project.name} project={project} />
      ))}
    </section>
  );
};

export default Projects;
