import "../cssFiles/Technologies.css";
import react from "../src/assets/react.png";
import javascript from "../src/assets/javascript.png";
import html from "../src/assets/html.png";
import css from "../src/assets/css.png";
import prisma from "../src/assets/prisma.png";
import node from "../src/assets/node.png";
import python from "../src/assets/python.png";

const imagePaths = [html, css, javascript, python, react, prisma, node];

const ScrollingImages = () => {
  return (
    <div className="scrolling-container">
      <div className="scrolling-row">
        {imagePaths.map((src, index) => (
          <div className="image-item" key={index}>
            <img src={src} alt={`Tech ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollingImages;
