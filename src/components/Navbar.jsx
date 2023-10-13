import styles from "../style";
import { useEffect, useState } from "react";
import navIcons from "../constants/index";
import { motion } from "framer-motion";

const Navbar = () => {
  const sections = document.querySelectorAll(".nav-section");
  // const navSelect = document.querySelectorAll(".nav-icon");

  const [active, setActive] = useState("home");

  useEffect(() => {
    window.onscroll = () => {
      sections.forEach((section) => {
        let top = window.scrollY;
        let offset = section.offsetTop;
        let id = section.getAttribute("id");

        if (top + 600 >= offset) {
          setActive(id);
        }
      });
    };
  }, [sections]);

  return (
    <motion.nav
      className="flex items-center justify-center fixed gap-[2rem] bottom-[2rem] pl-[25px] pr-[25px] pt-[10px] pb-[10px] bg w-max z-[100] rounded-[30px] bg-backgroundVariant/70 backdrop-blur-sm"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{
        type: "spring",
        stiffness: 100,
        delay: 1,
        ease: "easeOut",
        duration: 20,
      }}
    >
      {navIcons.map((Icon) => {
        return (
          <motion.a
            key={Icon.id}
            whileHover={{ scale: 1.3, y: -10 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 100 }}
            href={Icon.href}
            onClick={() => {
              setActive(Icon.id);
            }}
            className={`nav-icon ${styles.navElements} ${
              active === Icon.id ? "bg-background" : "bg-transparent"
            }`}
          >
            <Icon.iconType className={`${styles.navIcons}`} />
          </motion.a>
        );
      })}
    </motion.nav>
  );
};

export default Navbar;
