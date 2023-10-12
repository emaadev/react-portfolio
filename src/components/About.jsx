import styles from "../style"
import AboutMe from "../assets/about-me.jpg"
import Button from "./Button"
import { motion } from "framer-motion"
import AnimatedCards from "./AnimatedCards"

const About = () => (
    <section id="about" className={`${styles.flexCenter} flex-col pt-[150px]`}>
        <div className={`${styles.flexCenter} flex-col -mb-[20px]`}>
            <h4 className={`${styles.heading4}`}>Get To Know</h4>
            <h2 className={`${styles.heading2}`}>About Me</h2>
        </div>

        <div className={`flex items-center justify-center flex-col md:flex-row mt-[40px]`}>
            <aside className={`${styles.flexCenter} ${styles.primaryGradient} w-[250px] h-[250px] rounded-[16px]`}>
                <motion.img
                    animate={{ rotate: -10 }}
                    whileHover={{ rotate: 0 }}
                    transition={{ 
                        duration: 5,
                        type: "spring",
                        stiffness: 200
                    }}
                    src={AboutMe}
                    alt="Emanuel Nuñez"
                    className="w-[250px] rounded-[15px]"
                />
            </aside>

            <article className={`flex items-center justify-center md:items-start md:justify-center flex-col mt-[40px] md:mt-0 flex-1 md:ml-[80px]`}>
                <div className={`flex flex-col sm:flex-row mb-[20px]`}>
                    <AnimatedCards />
                </div>

                <p className={`${styles.paragraph} max-w-[300px] sm:max-w-[600px] mb-[20px] text-details`}>
                    My purpose is make it real the things that you can imagine it and always willing to contribute and give the best of myself to every single project to reach the goal.
                    <br /><br />
                    <span className="text-white font-semibold">If you can imagine it,</span> <br />
                    <span className="text-primary font-semibold">I can create it.</span>
                </p>

                <Button type={""} content={"Contact Me!"} href={"mailto:emanuel.nu02@gmail.com"}/>
            </article>
        </div>
    </section>
)

export default About