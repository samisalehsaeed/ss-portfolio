import "../cssFiles/WelcomePage.css";
import Technologies from "../components/Technologies";

export default function WelcomePage() {
  return (
    <>
      <div className="row" id="home">
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
