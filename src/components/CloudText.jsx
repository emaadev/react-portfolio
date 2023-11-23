import TagCloud from "@frank-mayer/react-tag-cloud";
import propTypes from "prop-types";
import { IoLogoWhatsapp } from "react-icons/io";

const CloudTest = ({ className }) => {
  var cloudRadius = 230;

  const windowWidth = window.innerWidth;
  if (windowWidth <= 650) {
    cloudRadius = 200;
  }

  return (
    <TagCloud
      className={className}
      options={() => ({
        radius: cloudRadius,
        maxSpeed: "slow",
        keep: false,
      })}
      onClick={(tag) =>
        window.open(`https://www.google.com/search?q=${tag}`, "_blank")
      }
      onClickOptions={{ passive: true }}
    >
      {[
        "HTML5",
        "CSS3",
        "Sass",
        "JavaScript",
        "TypeScript",
        "ReactJS",
        "NodeJS",
        "SQL",
        "Framer Motion",
        "Figma",
        "jQuery",
        "PHP",
        "GIT",
        "GitHub",
        "Bootstrap",
        "TailwindCSS",
        "JSON",
        "npm",
        "Photoshop",
        "Illustrator",
        "AdobeXd",
        "After Effects",
      ]}
    </TagCloud>
  );
};

CloudTest.propTypes = {
  className: propTypes.string.isRequired,
};

export default CloudTest;
