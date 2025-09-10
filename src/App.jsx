import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="bg-[#050414]">
			<div className="relative pt-20 text-white">
				<Navbar />
				<About />
				<Skills />
				<Experience />
				<Education />
				<Footer />
			</div>
		</div>
	);
}

export default App;
