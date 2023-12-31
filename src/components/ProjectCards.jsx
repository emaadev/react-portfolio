import styles from "../style";
import { projectCards } from "../constants/index";
import { motion } from "framer-motion";
import Button from "./Button";
import "./ProjectCard.css";

const ProjectCards = () => (
  <div
    className={`${styles.flexCenter} flex-row flex-wrap gap-[15px] pt-[50px] max-w-[1200px]`}
  >
    {projectCards.map((Item) => (
      <div
        key={Item.id}
        className={`flex flex-col justify-between portfolio-card w-[320px] h-[480px] rounded-[16px] px-[17px] py-[20px] mt-[20px]`}
      >
        <motion.div
          className={`${styles.flexCenter} flex-row mb-[15px] portfolio-card rounded-[16px]`}
        >
          <motion.img
            src={Item.img}
            alt="img"
            className="w-[100%] h-[220px] rounded-[16px] object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>
        <h5 className={`${styles.heading5}`}>{Item.title}</h5>
        <p className={`${styles.paragraph} !leading-[21px]`}>
          {Item.description}
        </p>
        <div
          className={`flex justify-start items-center flex-row mb-[5px] projects`}
        >
          {Item.iconTechnologies.map((Icon) => {
            if (Icon.id === "updating") {
              return (
                <Icon.IconType
                  key={Icon.id}
                  className={`fill-white ml-[10px] w-[30px] h-[30px] my-[10px] object-contain clock-animate`}
                />
              );
            } else {
              return (
                <Icon.IconType
                  key={Icon.id}
                  className={`fill-white ml-[10px] w-[30px] h-[30px] my-[10px] object-contain`}
                />
              );
            }
          })}
        </div>

        <div
          className={`flex justify-start items-center flex-row gap-[10px] ${
            Item.id === "null" ? "invisible" : "visible"
          }`}
        >
          {Item.links.map((link) => {
            if (link.state === true) {
              return (
                <Button
                  key={link.id}
                  href={link.href}
                  type={link.btnType}
                  content={link.content}
                  className="visible"
                />
              );
            } else {
              return (
                <Button
                  key={link.id}
                  href={link.href}
                  type={link.btnType}
                  content={link.content}
                  className="invisible"
                />
              );
            }
          })}
        </div>
      </div>
    ))}
  </div>
);

export default ProjectCards;
