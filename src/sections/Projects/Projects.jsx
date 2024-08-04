import styles from "./ProjectsStyles.module.css";
import imageSearch from "../../assets/image-search-app.png";
import todoApp from "../../assets/todo-app.png";
import nxtWatch from "../../assets/nxt-watch-app.png";

const Projects = () => {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <a href="https://github.com/chenna319/imagesearchapp">
          <img className="hover" src={imageSearch} alt="image search app" />
          <h3>Image Search</h3>
          <p>Image Search App</p>
        </a>
        <a href="https://github.com/chenna319/ts-todo-app">
          <img className="hover" src={todoApp} alt="image search app" />
          <h3>Todo</h3>
          <p>Todo Notes App</p>
        </a>
        <a href="https://github.com/chenna319/nxtWatch">
          <img className="hover" src={nxtWatch} alt="image search app" />
          <h3>NxtWatch</h3>
          <p>Online Streaming App</p>
        </a>
      </div>
    </section>
  );
};

export default Projects;
