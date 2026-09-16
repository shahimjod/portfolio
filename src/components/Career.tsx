import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Java Full Stack Developer Intern</h4>
                <h5>Tap Academy · Bengaluru</h5>
              </div>
              <h3>2026</h3>
            </div>
            <ul className="career-bullets">
              <li>
                Developed a full-stack Java food-ordering/e-commerce application
                using Servlets, JSP, JDBC, Hibernate, Spring and REST APIs
                following layered MVC architecture.
              </li>
              <li>
                Implemented user, menu, cart, checkout and order-management
                modules with CRUD operations, DAO/service layers, Hibernate ORM
                and transactional business logic.
              </li>
              <li>
                Implemented structured exception handling, input validation and
                runtime/database error management.
              </li>
              <li>
                Applied multithreading and concurrency concepts with Singleton
                and Factory design patterns for maintainable, thread-safe
                resource handling.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;