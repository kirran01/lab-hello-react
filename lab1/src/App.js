import logo from "./logo.svg";
import "./App.css";
import ih1 from "../src/img/ih1.png";
import ih2 from "../src/img/ih2.png";
import ih3 from "../src/img/ih3.png";
import ih4 from "../src/img/ih4.png";

function App() {
  return (
    <div className="App">
      <div className="main">
        <nav>
          <img src={ih3} alt="nav1" />
          <img id="blurred" src={ih4} alt="nav2" />
        </nav>
        <div className="intro">
          <h1>
            Say hello to <br /> ReactJS
          </h1>
          <p>
            You will learn how to use <br /> the most popular front end library,{" "}
            <br /> and become a super ninja developer
          </p>
          <button type="">Awesome!</button>
        </div>
      </div>

      <div className="footer-class">
        <div className="content-card-footer">
          <img
            src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon1.png"
            alt="1"
          />
          <p>declarative</p>
          <p>react makes it painless to create interactive UIs.</p>
        </div>

        <div className="content-card-footer">
          <img
            src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon2.png"
            alt="2"
          />
          <p>Components</p>
          <p>Build encapsulated components that manage their state.</p>
        </div>

        <div className="content-card-footer">
          <img
            src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon3.png"
            alt="3"
          />
          <p>Single-Way</p>
          <p>A set of immutable values are passed to the components</p>
        </div>

        <div className="content-card-footer">
          <img
            src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon4.png"
            alt="4"
          />
          <p>JSX</p>
          <p>staticly typed designed to run on modern browsers</p>
        </div>
      </div>
    </div>
  );
}

export default App;
