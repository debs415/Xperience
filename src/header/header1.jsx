import Grid from "@material-ui/core/Grid";
import { motion } from "framer-motion";

export default function Header() {
	return (
		<header>
			<Grid
				component={motion.div}
				animate={{ rotate: 360 }}
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.9 }}
				className={styles.headerContainer}
			>
				{/* href to home page of Xperience */}
				<a href="/" target="_blank" rel="noreferrer">
					<img src="/xperience.png" alt="Xperience logo" />
				</a>
			</Grid>
			<div>
				<motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
					{/* href to about  */}
					<a href="/" target="_blank" rel="noreferrer">
						About
					</a>
				</motion.div>
			</div>
			<div>
				<motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
					{/* href to Contact Us  */}
					<a href="/" target="_blank" rel="noreferrer">
						Contact Us
					</a>
				</motion.div>
			</div>
			<div>
				<motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
					{/* href to login/register */}
					<a href="/" target="_blank" rel="noreferrer">
						Login/Register
					</a>
				</motion.div>
			</div>
		</header>
	);
}
