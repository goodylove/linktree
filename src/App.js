import "./App.css";
import MyImage from "../src/image/nwachukwu.png";
import SlackImage from "../src/image/slack.png";
import GithubImage from "../src/image/icons8-github-30.png";
import EarthLogo from "./image/earthlogo.png";

function App() {
  return (
    <>
      <div className="container">
        <div className="img-container">
          <img src={MyImage} id="profile_img" alt="profile-img" />

          <span id="twitter">Nwachukwu Goodness</span>
          <span id="slack">Nwachukwu Goodness</span>
        </div>

        <ul className="links-container">
          <li>
            <button>
              <a href="">Twitter link</a>
            </button>
          </li>
          <li>
            <button>
              <a href="">Zuri Team</a>
            </button>
          </li>
          <li>
            <button>
              {}
              <a href="">Zuri BookS</a>
            </button>
          </li>
          <li>
            <button>
              <a href="">Python Books</a>
            </button>
          </li>
          <li>
            <button>
              <a href="">Background Check for Coders</a>
            </button>
          </li>
          <li>
            <button>
              <a href="">Design BookS</a>
            </button>
          </li>
        </ul>

        <div className="icons-container">
          <img src={SlackImage} id="slack_img" alt="slack-img" />
          <img src={GithubImage} id="github_img" alt="github-img" />
        </div>
      </div>
      <div id="line-con">
        <span></span>
      </div>
      <footer>
        <div className="zuri-internship">
          Zuri <span id="dot-red"></span>Internship
        </div>
        <div className="hng">HNG Internship 9 frontEnd Task</div>
        <div className="logo-container">
          <img src={EarthLogo} id="eath_logo" alt="logo" />
          <div className="ingressive-con">
            {" "}
            <span>INGRESSIVE </span>
            <span> FOR GOOD</span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
