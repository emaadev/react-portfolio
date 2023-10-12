import { aboutMe } from '../constants'
import styles from '../style'
import "./Skills.css"
import { motion } from "framer-motion"

// TODO:
// import { animate, useMotionValue, useTransform } from "framer-motion"

const AnimatedCards = () => {
    // TODO:
    // const x = useMotionValue(200);
    // const y = useMotionValue(200);

    // const rotateX = useTransform(y, [0, 400], [45, -45])
    // const rotateY = useTransform(x, [0, 400], [-45, 45])

    // function handleMouse(event) {
    //     const rect = event.currentTarget.getBoundingClientRect();

    //     x.set(event.clientX - rect.left);
    //     y.set(event.clientY - rect.top);
    // }
    // return (
    //     aboutMe.map((Item, index) => (
    //         <div key={Item.id} onMouseMove={handleMouse} onMouseLeave={() => {animate(x, 200); animate(y, 200)}}>
    //             <motion.div
    //                 className={`${styles.flexCenter} flex-col p-[20px] rounded-[15px] ${styles.primaryGradient} w-[200px] ${index !== aboutMe.length - 1 ? "mr-[20px]" : "mr-0"} mt-[20px] md:mt-0`}
    //                 style={{
    //                     rotateX,
    //                     rotateY
    //                 }}
    //             >

    //                 <Item.iconType className="fill-white w-[35px] h-[35px] mb-[10px]" />

    //                 <h4 className={`${styles.heading5} leading-[15px] text-[20px]`}>{Item.title}</h4>
                    
    //                 <p className={`${styles.paragraph} text-[13px] sm:text-[14px] text-backgroundVariant font-normal`}>{Item.description}</p>

    //             </motion.div>
    //         </div>
    //     ))
    // )

    return (
        aboutMe.map((Item, index) => (
            <div key={Item.id}>
                <motion.div
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 8 }}
                    className={`${styles.flexCenter} flex-col p-[10px] py-[20px] rounded-[15px] w-[230px] sm:w-[200px] ${index !== aboutMe.length - 1 ? "sm:mr-[20px]" : "sm:mr-0"} mt-[20px] md:mt-0 skill-card`}
                >

                    <Item.iconType className="fill-white w-[35px] h-[35px] mb-[10px]" />
                    <h4 className={`${styles.heading5} leading-[15px] text-[18px] sm:text-[20px]`}>{Item.title}</h4>
                    <p className={`${styles.paragraph} text-[14.8px] sm:text-[14px] text-background font-normal`}>{Item.description}</p>

                </motion.div>
            </div>
        ))
    )
}

export default AnimatedCards