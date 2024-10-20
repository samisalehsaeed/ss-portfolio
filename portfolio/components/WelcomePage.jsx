import "../cssFiles/WelcomePage.css";
import Technologies from "../components/Technologies";
import sslogo from "../src/assets/ss-logo.png";

export default function WelcomePage() {
  return (
    <>
      <div className="row" id="home">
        <div className="links">
          <a href="#aboutme" className="aboutme-link">
            about me
          </a>
          <a href="#projects" className="projects-link">
            projects
          </a>
          <a href="#experience" className="experience-link">
            experience
          </a>
        </div>
        <div className="logo">
          <a href="#home">
            <img style={{ height: "62px" }} src={sslogo}></img>
          </a>
        </div>

        <h1 className="title">
          Hi, my name is <br />
          SAMI SAEED
        </h1>

        <h3 style={{ textAlign: "center" }} className="subheading">
          and I am a full-stack developer.
        </h3>
        <br />
        <Technologies />
      </div>
    </>
  );
}
