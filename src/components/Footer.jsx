import styles from "../style";

const Footer = () => {
  return (
    <section
      id="footer"
      className={`nav-section ${styles.flexCenter} flex-col pb-[130px] bg-primary`}
    >
      <div className={`${styles.flexCenter} flex-col -mb-[20px]`}>
        <h2
          lang="es"
          className={`${styles.heading2Footer} mt-[40px] text-background`}
        >
          Emanuel Nuñez
        </h2>
      </div>

      <small lang="es" className="mt-[40px]">
        © Emanuel Nuñez 2023 - All rights reserved.
      </small>
    </section>
  );
};

export default Footer;
