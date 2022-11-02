import { Routes, Route, Link } from "react-router-dom";

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='about' element={<About />} />
			<Route path='contacts' element={<Contacts />} />
		</Routes>
	);
};

export default App;

const Home = () => {
	return (
		<>
			<h2>Home page</h2>
			<nav>
				<Link to='/about'>About</Link>
				<Link to='/contacts'>Contacts</Link>
			</nav>
		</>
	);
};

const About = () => {
	return (
		<>
			<h2>About page</h2>
			<nav>
				<Link to='/'>Home</Link>
				<Link to='/contacts'>Contacts</Link>
			</nav>
		</>
	);
};


const Contacts = () => {
	return (
		<>
			<h2>Contacts page</h2>
			<nav>
				<Link to='/'>Home</Link>
				<Link to='/about'>About</Link>
			</nav>
		</>
	);
};
