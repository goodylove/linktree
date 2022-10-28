import "./App.css";
import MyImage from "../src/image/nwachukwu.png";
import SlackImage from "../src/image/slack.png";
import GithubImage from "../src/image/icons8-github-30.png";
import EarthLogo from './image/earthlogo.png'

function App() {
  return (
    <>
      <div className="container">
        <div className="img-container">
          <img src={MyImage} id="profile_img" alt="profile-img" />

          <span id="twitter">Nwachukwu Goodness</span>
          <span id="slack">Nwachukwu Goodness</span>
        </div>
        <ul className="links">
          <li>
            <a href="">Twitter link</a>
          </li>
          <li>
            <a href="">Zuri Team</a>
          </li>
          <li>
            <a href="">Zuri BookS</a>
          </li>
          <li>
            <a href="">Python Books</a>
          </li>
          <li>
            <a href="">Background Check for Coders</a>
          </li>
          <li>
            <a href="">Design BookS</a>
          </li>
        </ul>
        <div className="icons"></div>
        <img src={GithubImage} id="github_img" alt="github-img" />
        <img src={SlackImage} id="slack_img" alt="slack-img" />
      <footer>
        <div className="zuri-internship">
          Zuri <span></span>Internship
        </div>
          <div>HNG Internship 9 frontEnd Task</div>
          <div>
            <img src={EarthLogo} id="eath_logo" alt="logo"/>
            <span>INGRESSIVE FOR GOOD</span>
          </div>

      </footer>
      </div>
    </>
  );
}

export default App;
