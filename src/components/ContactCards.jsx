import { contact } from "../constants";
import styles from "../style";
import "./Skills.css";
import { motion } from "framer-motion";
import "./ContactCard.css";

const AnimatedCards = () => {
  return contact.map((Item, index) => (
    <div key={Item.id}>
      <motion.a
        href={Item.href}
        rel="noreferrer"
        target="_blank"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 8 }}
        className={`${
          styles.flexCenter
        } flex-col p-[10px] py-[15px] sm:py-[10px] rounded-[15px] w-[250px] sm:w-[230px] ${
          index !== contact.length - 1 ? "sm:mr-[20px]" : "sm:mr-0"
        } mt-[20px] md:mt-0 contact-card`}
      >
        <Item.iconType className="fill-white my-[10px] w-[25px] h-[25px]" />
        <h4
          className={`${styles.heading5} leading-[20px] text-[17px] sm:text-[20px] -mb-[2px]`}
        >
          {Item.title}
        </h4>
        <p
          className={`${styles.paragraph} text-[13px] sm:text-[14px] text-details font-normal`}
        >
          {Item.description}
        </p>
      </motion.a>
    </div>
  ));
};

export default AnimatedCards;
