import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const roles = [
  "Full-Stack Java Developer",
  "Java Backend Developer",
  "Spring Boot Developer",
  "Generative AI Developer",
];

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              MOHAMMAD SHAHIM
              <br />
              <span>SHEESH</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>I am</h3>
            <h2 className="landing-info-h2">
              {roles.map((role, index) => (
                <div
                  key={role}
                  className={`landing-role ${index === 0 ? "landing-role-active" : ""}`}
                >
                  {role}
                </div>
              ))}
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;