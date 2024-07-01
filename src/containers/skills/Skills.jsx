
import "./Skills.css"; 

const Skills = () => {
  const HtmlProgress = 85; 
  const CssProgress = 75;
  const JsProgress = 70;
  const ReactProgress=75;
  const NodeProgress = 60;
  const JavaProgress = 75;
  const MongoDBProgress = 50;
  const MySQLProgress = 75;

  return (
    <div className="skills-container">
      <div className="skills-section">
        <h3>FRONTEND</h3>
        <div className="skill">
          <h4>HTML</h4>
          <div className="progress-bar">
            <div className="progress" style={{ width: `${HtmlProgress}%` }}></div>
          </div>
        </div>
        <div className="skill">
          <h4>CSS</h4>
          <div className="progress-bar">
            <div className="progress" style={{ width: `${CssProgress}%` }}></div>
          </div>
        </div>
        <div className="skill">
          <h4>JavaScript</h4>
          <div className="progress-bar">
            <div className="progress" style={{ width: `${JsProgress}%` }}></div>
          </div>
        </div>
        <div className="skill">
          <h4>React js</h4>
          <div className="progress-bar">
            <div className="progress" style={{ width: `${ReactProgress}%` }}></div>
          </div>
        </div>
      </div>

      <div className="skills-section">
        <h3>BACKEND</h3>
        <div className="skill">
          <h4>Node.js</h4>
          <div className="progress-bar">
            <div className="progress" style={{ width: `${NodeProgress}%` }}></div>
          </div>
        </div>
        <div className="skill">
          <h4>Java</h4>
          <div className="progress-bar">
            <div className="progress" style={{ width: `${JavaProgress}%` }}></div>
          </div>
        </div>
      </div>

      <div className="skills-section">
        <h3>DATABASE</h3>
        <div className="skill">
          <h4>MongoDB</h4>
          <div className="progress-bar">
            <div className="progress" style={{ width: `${MongoDBProgress}%` }}></div>
          </div>
        </div>
        <div className="skill">
          <h4>MySQL</h4>
          <div className="progress-bar">
            <div className="progress" style={{ width: `${MySQLProgress}%` }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
