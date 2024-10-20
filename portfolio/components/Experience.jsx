import "../cssFiles/Experience.css";

export default function Experience() {
  return (
    <>
      <div className="row experience-section" id="experience">
        <h1 className="experience-title">experience.</h1>
        <div className="experience">
          <h1>Full-stack Software Development Bootcamp</h1>
          <h2>Boolean</h2>
          <li>
            A six-month immersive bootcamp, fully focused on modern,
            industry-relevant technology, <br />
            offering 1,000 hours of hands-on learning and collaborative team
            projects, all taught by experienced industry professionals.
            <br /> <br />- Developed full-stack projects, designed to solve real
            life problems.
            <br /> - Translated user stories into software requirements.
            <br /> - Built Backend applications, using RestFul APIs,PostgreSQL
            and Node.js.
            <br /> - Took part in a team-based development simulation,
            dedicating two weeks to building a project, with Daily meetings and
            debriefs throughout the process.
            <br /> - Undertook the Scrum Master role using kanban and agile
            methodologies.
          </li>
          <br />
          <br />
          <h1>Software Development Intern</h1>
          <h2>SpringPod</h2>
          <li>
            Participated in a Software Development Internship programme
            <br />
            <br /> During the programme I gained: <br />- A better understanding
            of the inner workings and concepts related to Software Development,
            and the ability to identify the skills needed to pursue a career in
            this sector. <br />- Meaning interactions with industry
            professionals through live webinars.
            <br /> - Knowledge of key employability and transferable skills, as
            well as a sound awareness of employer expectations.
          </li>
        </div>
        <p className="thanks">
          Thank you for taking the time to review my portfolio. Your
          consideration is greatly appreciated.
          <br /> If you have any questions or would like to offer feedback or
          advice, please feel free to reach out. I look forward to hearing from
          you.
          <p className="signoff">Sami Saeed</p>
          <div className="contactme">
            <a
              href="https://www.linkedin.com/in/samisalehsaeed/"
              target="blank_"
            >
              <img
                style={{ height: "30px" }}
                src="https://cdn-icons-png.flaticon.com/128/15047/15047316.png"
              />
            </a>
            <a href="mailto:work.samisaeed@gmail.com" target="blank_">
              <img
                style={{ height: "30px" }}
                src="https://cdn-icons-png.flaticon.com/128/526/526901.png"
              />
            </a>
            <a href="https://github.com/samisalehsaeed" target="blank_">
              <img
                style={{ height: "30px" }}
                src="https://cdn.worldvectorlogo.com/logos/github-icon-2.svg"
              />
            </a>
          </div>
        </p>
      </div>
    </>
  );
}
