import { useState } from "react"
import styles from "../style"
import CloudText from "./CloudText"
import { skills } from "../constants"
import { motion, AnimatePresence } from "framer-motion"
import InfoSkills from "./InfoSkills"
import './Skills.css'

const Skills = () => {
    const [selectedId, setSelectedId] = useState(null)
 
    return (
        <section id="skills" className={`${styles.flexCenter} flex-col pt-[100px] mb-[100px]`}>
            <div className={`${styles.flexCenter} flex-col -mb-[20px]`}>
                <h4 className={`${styles.heading4}`}>My Personal</h4>
                <h2 className={`${styles.heading2}`}>Skills & Experience</h2>
            </div>
    
            <div className={`flex justify-center items-center md:items-start flex-col md:flex-row`}>
                <div className="mt-[50px] md:mt-[80px] md:pl-[30px]">
                    <h4 className={`${styles.heading5} text-[23px] sm:text-[25px] sm:leading-[30px]`}>
                        <span className="bg-gradient-to-r from-sky-400 to-blue-500 text-transparent bg-clip-text">Front-End Developer</span> <br /> & Graphic Designer
                    </h4>
                    <p className={`${styles.paragraph} leading-[25px] text-details font-normal max-w-[320px] sm:max-w-[600px] mt-[20px] mb-[20px] sm:mr-[25px]`}>
                        I am dedicated to the development of audiovisual products with several years of experience in Graphic Design and professional projects in Software Development on the client side (Front-End).
                        <br /><br />
                        I mainly develop JavaScript-based projects with ReactJS and NodeJS.
                        <br />
                        Always with an open mind to continue learning the technologies that are needed.
                        <br /><br />
                        Visit my <a href="https://www.linkedin.com/in/emanuel-nu%C3%B1ez-337897206/" target="_blank" rel="noreferrer" className={`${styles.aLinkStyle}`}>LinkedIn</a> profile for more details or just <a href="mailto:emanuel.nu02@gmail.com" target="_blank" rel="noreferrer" className={`${styles.aLinkStyle}`}>contact me</a>.
                    </p>
                </div>
                <div className="">
                    {/* <CloudText radius={200} /> */}
                    <CloudText className={"cloudText font-poppins font-semibold z-[1] relative"} />
                </div>
            </div>
    
            <div>
                <div className="cards flex justify-center items-center flex-col sm:flex-row gap-[30px] mt-[40px]">
                    {skills.map(skill => (
                        <motion.div 
                            key={skill.id}
                            layoutId={skill.id}
                            onClick={() => {
                                setSelectedId(skill.id)
                            }}
                            transition={{ duration: .5 }}
                            whileHover={{ scale: 1.1 }}
                            className="card flex items-start py-[10px] px-[20px] justify-center flex-col skill-card w-[220px] h-[130px] rounded-[16px] cursor-pointer"
                        >
                            {skill.value.map(content => (
                                <motion.div key={content.title}>
                                    <motion.img 
                                        src={content.src} 
                                        alt={content.id}
                                        className="w-[30px] h-[30px] mb-[10px]" 
                                    />
                                    <motion.h5 className={`${styles.heading5} xs:leading-[16px]`}>{content.title}</motion.h5>
                                    <motion.div className="flex flex-row">
                                        <motion.div 
                                            animate={{ x: [-1, 3, -1] }}
                                            transition={{ duration: 3, repeat: "reverse" }}
                                            className="w-[2px] h-[20px] bg-black rounded-full mx-[5px] mt-[5px]"
                                        />
                                        <motion.p 
                                            animate={{ x: [-1, 3, -1] }}
                                            transition={{ duration: 3, repeat: "reverse", delay: .2 }}
                                            className={`${styles.paragraph} md:text-[14px] font-semibold text-background`}
                                        >
                                            {content.button}
                                        </motion.p>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </motion.div>
                    ))}
                </div>

                <AnimatePresence>
                    {selectedId && <InfoSkills 
                        selectedId={selectedId}
                        setSelectedId={setSelectedId}
                    />}
                </AnimatePresence>
            </div>
        </section>
    )
}

export default Skills