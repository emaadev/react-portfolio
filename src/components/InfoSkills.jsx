import { motion } from "framer-motion";
import exitButton from "../assets/exit-button.png";
import styles from "../style";
import propTypes from "prop-types";
import { skills } from "../constants";
import { useEffect, useState } from "react";

const InfoSkills = ({ selectedId, setSelectedId }) => {
  const [skillSelector, setSkillSelector] = useState(0);

  useEffect(() => {
    for (let i = 0; i < skills.length; i++) {
      if (selectedId == skills[i].id) {
        setSkillSelector(i);
      }
    }
  }, [selectedId]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-black/50 w-[100%] h-[100%] fixed top-0 left-0 z-999 flex justify-center items-center flex-col z-[999]"
    >
      <motion.div
        layoutId={selectedId}
        className="skill-card w-[300px] pb-[25px] flex justify-start items-start flex-col rounded-[15px]"
      >
        <motion.button
          onClick={() => setSelectedId(null)}
          className="ml-[250px] mt-[15px]"
        >
          <motion.img src={exitButton} alt="exit-button" className="w-[35px]" />
        </motion.button>
        <motion.div className="pl-[25px] -mt-[15px]">
          <motion.img
            src={skills[skillSelector].value[0].src}
            alt="Test"
            className="w-[40px] mb-[10px]"
          />
          <motion.h5
            className={`${styles.heading5} xs:text-[20px] xs:leading-[16px]`}
          >
            {skills[skillSelector].value[0].title}
          </motion.h5>
          <motion.p
            className={`${styles.paragraph} text-white text-[15px] text-left`}
          >
            <ul className="mt-[10px]">
              {skills[skillSelector].value[0].description.map((item, index) => (
                <motion.li
                  key={index}
                  className="text-backgroundVariant font-semibold leading-[25px]"
                >
                  · {item}
                </motion.li>
              ))}
            </ul>
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

InfoSkills.propTypes = {
  selectedId: propTypes.string.isRequired,
  setSelectedId: propTypes.func.isRequired,
};

export default InfoSkills;
