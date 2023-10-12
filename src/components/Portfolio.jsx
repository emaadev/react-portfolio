import styles from "../style";
import "./Portfolio.css";
import ProjectCards from "./ProjectCards";

// TODO:
// import { technologies } from "../constants/index"

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className={`${styles.flexCenter} flex-col pt-[50px] mb-[100px]`}
    >
      <div className={`${styles.flexCenter} flex-col -mb-[20px]`}>
        <h4 className={`${styles.heading4}`}>Work Experience</h4>
        <h2 className={`${styles.heading2}`}>Portfolio</h2>
      </div>

      <ProjectCards />
    </section>
  );
};

export default Portfolio;
