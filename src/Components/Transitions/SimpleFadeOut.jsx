import React from "react";
import { motion } from "framer-motion";
const animationConfiguration = {
	initial: { opacity: 0, translateY: 40 },
	animate: { opacity: 1, translateY: 0 },
	exit: { opacity: 0, translateY: -20 },
};

function SimpleFadeOut({ children }) {
	return (
		<motion.div
			variants={animationConfiguration}
			initial="initial"
			animate="animate"
			exit="exit"
			transition={{ duration: 1 }}
		>
			{children}
		</motion.div>
	);
}

export default SimpleFadeOut;
