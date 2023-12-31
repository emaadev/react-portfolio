import PropTypes from "prop-types";
import { motion } from "framer-motion";
import styles from "../style";

const Button = ({ content, type, href, download, className }) => {
  if (type == "primaryBtn") {
    return (
      <motion.a
        href={href}
        rel="noreferrer"
        target="_blank"
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 400, damping: 8 }}
        className={`${styles.btnPrimary} ${className}`}
        download={download}
      >
        {content}
      </motion.a>
    );
  }
  if (type == "alternativeBtn") {
    return (
      <motion.a
        href={href}
        rel="noreferrer"
        target="_blank"
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 400, damping: 8 }}
        className={`${styles.btnAlternative} ${className}`}
      >
        {content}
      </motion.a>
    );
  }
  if (type == "variantBtn") {
    return (
      <motion.a
        href={href}
        rel="noreferrer"
        target="_blank"
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 400, damping: 8 }}
        className={`${styles.btnAlternative} ${className}`}
      >
        {content}
      </motion.a>
    );
  } else {
    return (
      <motion.a
        href={href}
        rel="noreferrer"
        target="_blank"
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 400, damping: 8 }}
        className={`${styles.btnSecondary} ${className}`}
      >
        {content}
      </motion.a>
    );
  }
};

Button.propTypes = {
  content: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  download: PropTypes.bool.isRequired,
  className: PropTypes.string.isRequired,
};

export default Button;
