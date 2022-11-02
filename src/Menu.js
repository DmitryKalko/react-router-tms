import { useState } from "react";
import { Link } from "react-router-dom";
import CustomizedSwitches from "./Switcher";

import "./style.css";

const Menu = () => {
	const [lightTheme, setLightTheme] = useState(true);
	const switchTheme = () => {
		setLightTheme(!lightTheme);
		console.log(lightTheme);
	};
	return (
		<>
			<header
				className='header'
				style={
					lightTheme
						? { backgroundColor: "black" }
						: { backgroundColor: "blue" }
				}>

				<Link to='/'>Home</Link>
				<Link to='/about'>About</Link>
				<Link to='/contacts'>Contacts</Link>

				<Link to='/Posts'>Posts</Link>				
			</header>

			<CustomizedSwitches switchTheme={switchTheme} />
		</>
	);
};

export default Menu;
