import "./App.css";
// import Header from "./header/header2";
// import Body from "./home/body";
import Navbar from "./header/navbar";
import Home from "./home/Home";
import About from "./about/About.js";
import Contact from "./contact/Contact.js";
import Login from "./login/Login.js";
import Signup from "./signup/Singup.js";
import Footer from "./footer/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
	return (
		<Router>
			<div className="App">
				<header className="App-header">
					<Navbar />
				</header>
				<body>
					<Switch>
						<Route path="/login">
							<Login />
						</Route>
						<Route path="/signup">
							<Signup />
						</Route>
						<Route path="/contact-us">
							<Contact />
						</Route>
						<Route path="/about">
							<About />
						</Route>
						<Route exact path="/">
							<Home />
						</Route>
					</Switch>
				</body>
				<footer>
					<Footer />
				</footer>
			</div>
		</Router>
	);
}

export default App;
