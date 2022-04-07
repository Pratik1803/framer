import React from "react";
import Styles from "./Home.module.scss";
import portrait from "../../images/portrait.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SimpleFadeOut from "../Transitions/SimpleFadeOut";

function Home() {

	return (
		<>
			<SimpleFadeOut>
				<div className={Styles.home}>
					<div className={Styles.home_wrapper}>
						<div className={Styles.home_container}>
							<div className={Styles.profile_img}>
								<img src={portrait} alt="" />
							</div>
							<div className={Styles.home_content}>
								<h3>Hi,</h3>
								<h1>
									I am <strong>Alena Aenami</strong>,
								</h1>
								<p>a freelance fullstack developer!</p>
								<Link to={"/contact"}>
									<div className={Styles.say_hi_btn}>
										<p>Say Hi!</p>
									</div>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</SimpleFadeOut>
		</>
	);
}

export default Home;
