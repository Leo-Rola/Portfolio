import Hero from "./components/organisms/Hero";
import Navbar from "./components/organisms/Navbar";
import Skills from "./components/organisms/Skills";
import Projects from "./components/organisms/Projects";
import About from "./components/organisms/About";
import Contacts from "./components/organisms/Contacts";
import Footer from "./components/organisms/Footer";
import Navigation from "./components/atoms/Navigation";

function App() {
	const FigmaLink = "https://www.figma.com";
	const GitLink = "https://github.com";
	const LinkedinLink = "https://linkedin.com";
	const mail = "leorola998@gmail.com";

	const sections = ["home", "skills", "progetti", "about", "contatti"];

	const frontendSkills = ["Javascript", "React"];
	const backendSkills = ["Node JS"];
	const toolsSkills = ["GitHub",];

	//Hero Props
	const name = "Leonardo";
	const surname = "Rolandi";
	const subtitle =
		"He crafts responsive websites where technologies meet creativity";
	const workingOn = "Portfolio";

	//About Props
	const firstParagraph =
		"Work in progress";
	const secondParagraph =
		"WIP";

	return (
		<div className="w-full">
			<Navigation
				github={GitLink}
				linkedin={LinkedinLink}
				figma={FigmaLink}
				isLeft="true"
			/>
			<Navigation mail={mail} isLeft="false" />

			<Navbar name={name} sections={sections} />

			<div className="mx-60">
				<div id="home" className="mt-20">
					<Hero subtitle={subtitle} workingOn={workingOn} />
				</div>

				<div id="skills" className="py-24">
					<Skills
						frontend={frontendSkills}
						backend={backendSkills}
						tools={toolsSkills}
					/>
				</div>

				<div id="progetti" className="py-24">
					<Projects />
				</div>

				<div id="about" className="py-24">
					<About
						name={name}
						surname={surname}
						firstParagraph={firstParagraph}
						secondParagraph={secondParagraph}
					/>
				</div>

				<div id="contatti" className="py-24">
					<Contacts mail={mail} />
				</div>
			</div>

			<Footer
				mail={mail}
				github={GitLink}
				linkedin={LinkedinLink}
				figma={FigmaLink}
				name={name}
			/>
		</div>
	);
}

export default App;
