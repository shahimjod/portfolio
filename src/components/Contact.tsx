import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="https://www.linkedin.com/in/mohammad-shahim-sheesh"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — Mohammad Shahim Sheesh
              </a>
            </p>
            <p>
              <a
                href="mailto:shahimsheesh@gmail.com"
                rel="noreferrer"
                data-cursor="disable"
              >
                shahimsheesh@gmail.com
              </a>
            </p>
            <h4>Location</h4>
            <p>Bengaluru, India</p>
            <h4>Education</h4>
            <p>
              B.E. Artificial Intelligence &amp; Data Science, Bearys Institute
              of Technology — 2022–2026
            </p>
            <p>CGPA: 8.83/10</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/shahimjod"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/mohammad-shahim-sheesh"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by{" "}
              <span>Mohammad Shahim Sheesh</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;