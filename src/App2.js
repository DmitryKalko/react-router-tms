import { Routes, Route, Link } from "react-router-dom";
import Menu from "./Menu";

import Posts from "./PostsExample/Posts";
import Post from "./PostsExample/Post";


import ResponsiveAppBar from "./AppBar";

const App = () => {
	return (
		<>
			{/* <header>
				<Link to='/'>Home</Link>
				<Link to='/about'>About</Link>
				<Link to='/contacts'>Contacts</Link>
			</header> */}

			<ResponsiveAppBar />

			<Menu />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='about' element={<About />} />
				<Route path='contacts' element={<Contacts />} />


        <Route path='posts' element={<Posts />} />
        <Route path='posts/:id' element={<Post />} />
			</Routes>
		</>
	);
};

export default App;

const Home = () => {
	return (
		<>
			<h2>Home page</h2>
		</>
	);
};

const About = () => {
	return (
		<>
			<h2>About page</h2>
		</>
	);
};

const Contacts = () => {
	return (
		<>
			<h2>Contacts page</h2>
		</>
	);
};
