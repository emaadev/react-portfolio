import styles from "../style";
import Button from "./Button";
import Me from "../assets/me.png";
import SocialMedia from "./SocialMedia";
import CV from "../assets/Resume.pdf";

const Header = () => (
  <header id="home" className={`nav-section m-auto max-w-[1500px]`}>
    <div
      className={`${styles.flexCenter} leading-5 text-center flex-col pt-[150px]`}
    >
      <p className={`${styles.paragraph} leading-[5px] text-details`}>
        Hi! I'm
      </p>
      <h1 className={`${styles.heading1} `}>Emanuel Nuñez</h1>
      <h4
        className={`${styles.heading4} bg-gradient-to-r from-sky-400 to-blue-500 text-transparent bg-clip-text font-semibold -mt-[8px]`}
      >
        Front-End Developer
      </h4>
    </div>

    <div className="flex items-center justify-center flex-row mt-[30px]">
      <div className="mr-5">
        <Button
          content={"Download CV"}
          type={"primaryBtn"}
          href={CV}
          download={true}
        />
      </div>
      <Button
        content={"Let's Talk!"}
        type={"secondaryBtn"}
        href={"mailto:emanuel.nu02@gmail.com"}
      />
    </div>

    <div
      className={`${styles.flexCenter} m-auto mt-[60px] ${styles.primaryGradient} w-[340px] rounded-t-[400px]`}
    >
      <img src={Me} className="w-[80%] h-[100%] pt-20" alt="Emanuel Nuñez" />
    </div>

    <div className="mt-[30px] md:mt-0 ">
      <SocialMedia />
    </div>
  </header>
);

export default Header;
