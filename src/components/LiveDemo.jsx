import { motion } from "framer-motion"
import exitButton from "../assets/exit-button.png"
import propTypes from "prop-types" 
import Hoobank from "../mocks/project-01/src/Hoobank"
// import { useEffect, useState } from "react"

const LiveDemo = ({ selectedId, setSelectedId }) => {

    return (
        <motion.div
            layoutId={selectedId}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: .5 }}
            className="bg-black/50 w-[100%] h-[100%] fixed top-0 left-0 z-999 flex justify-center items-center flex-col"
        >
            <Hoobank />
        </motion.div>
    )
}

LiveDemo.propTypes = {
    selectedId: propTypes.string.isRequired,
    setSelectedId: propTypes.func.isRequired
}

export default LiveDemo