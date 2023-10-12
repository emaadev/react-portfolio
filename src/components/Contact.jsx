import styles from "../style";
import ContactCards from "./ContactCards";

const Contact = () => (
  <section
    id="contact"
    className={`nav-section ${styles.flexCenter} flex-col mb-[80px]`}
  >
    <div className={`${styles.flexCenter} flex-col `}>
      <h4 className={`${styles.heading4}`}>Get In Touch</h4>
      <h2 className={`${styles.heading2}`}>Contact</h2>
    </div>

    <div
      className={`flex items-center justify-center md:items-start md:justify-center flex-col mt-[40px] flex-1`}
    >
      <div
        className={`flex justify-center items-center gap-[20px] flex-row flex-wrap mb-[20px]`}
      >
        <ContactCards />
      </div>
    </div>
  </section>
);

export default Contact;
