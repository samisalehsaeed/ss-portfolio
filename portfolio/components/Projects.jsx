import "../cssFiles/Projects.css";

export default function Projects() {
  return (
    <>
      <div className="row projects-section" id="projects">
        <h1 className="projects-title">projects.</h1>
        <div className="projects-grid">
          <div className="project-card">
            <img
              className="brewery-img"
              src="https://static.vecteezy.com/system/resources/thumbnails/019/607/543/small_2x/beer-mug-graphic-clipart-design-free-png.png"
              alt="Project 1 Screenshot"
            />
            <h2>Brewery Tours</h2>
            <p>
              Brewery Tours is the ultimate guide for discovering the best pubs
              across the United States. Whether you're a beer enthusiast or just
              looking for a great spot to relax with friends, this application
              has you covered. With an easy-to-use interface, you can explore
              top-rated pubs and plan your next brewery visit with ease. The
              platform is built using HTML, CSS, and JavaScript DOM.To enhance
              its functionality, Brewery Tours integrates this{" "}
              <a
                href="https://api.openbrewerydb.org/v1/breweries"
                target="_blank"
              >
                API
              </a>{" "}
              for up-to-date pub information and recommendations.
            </p>
            <div className="project-links">
              <a href="" target="_blank">
                <img
                  style={{ height: "50px" }}
                  src="https://cdn.worldvectorlogo.com/logos/github-icon-2.svg"
                />
              </a>
              <a
                href="https://genuine-scone-f8867b.netlify.app/"
                target="_blank"
              >
                <img
                  style={{ height: "50px" }}
                  src="https://cdn-icons-png.flaticon.com/128/13621/13621932.png"
                />
              </a>
            </div>
          </div>

          <div className="project-card">
            <img
              src="https://media0.giphy.com/media/utfeiHQ7CcpyRtXla6/giphy.gif?cid=6c09b952xxdpcxah6ovjjq68k4l6yj4dtj70oyl44sc0j5bk&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s"
              alt="Project 2 Screenshot"
            />
            <h2>CUPPA</h2>
            <p>
              CUPPA is a web application designed to help individuals stay
              organised on their hunt for vacancies.When creating the UI, I took
              an approach where clients who used CUPPA wouldn't feel overwhelmed
              by a complicated website, in doing so I only included components
              that were neccessary in a job search.
            </p>
            <div className="project-links">
              <a
                href="https://github.com/samisalehsaeed/job-tracker"
                target="_blank"
              >
                <img
                  style={{ height: "50px" }}
                  src="https://cdn.worldvectorlogo.com/logos/github-icon-2.svg"
                />
              </a>
            </div>
          </div>

          <div className="project-card">
            <img
              className="twitter-img"
              src="https://i.redd.it/w54qt1fr0st31.png"
              alt="Project 3 Screenshot"
            />
            <h2>Twitter Clone</h2>
            <p>
              This app is a simplified social platform that closely mimics the
              real Twitter experience, focusing primarily on tweeting. It allows
              users to post and interact with tweets in real-time. The
              streamlined design keeps the experience centered around posting
              and viewing content.
            </p>
            <div className="project-links">
              <a
                href="https://github.com/samisalehsaeed/react-twitter-props"
                target="_blank"
              >
                <img
                  style={{ height: "50px" }}
                  src="https://cdn.worldvectorlogo.com/logos/github-icon-2.svg"
                />
              </a>
              <a
                href="https://stalwart-arithmetic-46a811.netlify.app/"
                target="_blank"
              >
                <img
                  style={{ height: "50px" }}
                  src="https://cdn-icons-png.flaticon.com/128/13621/13621932.png"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
