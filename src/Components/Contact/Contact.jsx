import React from "react";
import Styles from "./Contact.module.scss";
import { motion } from "framer-motion";
import SimpleFadeOut from "../Transitions/SimpleFadeOut";

function Contact() {
	return (
		<SimpleFadeOut>
			<div className={Styles.contact}>
				<div className={Styles.wrapper}>
					<h1>Get in Touch!</h1>
					<div className={Styles.user_details}>
						<input type="text" aria-label="Username" placeholder="Username" />
						<input type="email" aria-label="Email" placeholder="Email" />
						<input type="tel" aria-label="Contact" placeholder="Contact" />
					</div>
					<div className={Styles.message}>
						<textarea
							draggable={false}
							name=""
							id=""
							rows="10"
							placeholder="Say Hi!"
						></textarea>
					</div>
				</div>
			</div>
		</SimpleFadeOut>
	);
}

export default Contact;
