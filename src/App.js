import "./App.css";
import MyImage from "../src/image/nwachukwu.png";
import SlackImage from "../src/image/slack.png";
import GithubImage from "../src/image/icons8-github-30.png";
import EarthLogo from "./image/earthlogo.png";
import { BsThreeDots, BsCamera } from "react-icons/bs";
import { RiShareForwardLine } from "react-icons/ri";

function App() {
  return (
    <>
      <div className="container">
        <div className="dot-container">
          <div className="three-con">
            <BsThreeDots fontSize={"16px"} className="dot-component" />
            <RiShareForwardLine  className="forward-component"/>
          </div>
        </div>
        <div className="img-container">
          <div className="profile-con">
            <div className="camera-co">
              <BsCamera style={{ color: "white", fontSize: "20px" }} />
            </div>
            <img src={MyImage} id="profile_img" alt="profile-img" />
          </div>
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
            <button id="btn_zuri">
              <a href="https://training.zuri.team/">Zuri Team</a>
            </button>
          </li>
          <li>
            <button id="books">
              <a href="http://books.zuri.team ">Zuri BookS</a>
            </button>
          </li>
          <li>
            <button id="book__python">
              <a href="https://books.zuri.team/">Python Books</a>
            </button>
          </li>
          <li>
            <button id="pitch">
              <a href="https://background.zuri.team/">
                Background Check for Coders
              </a>
            </button>
          </li>
          <li>
            <button id="book__design">
              <a href="https://books.zuri.team/design-rules">Design BookS</a>
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
        <div className="last-con">
          <div className="zuri-internship">
            Zuri <span id="dot-red"></span>Internship
          </div>
          <div className="hng">HNG Internship 9 frontend Task</div>
          <div className="logo-container">
            <img src={EarthLogo} id="eath_logo" alt="logo" />
            <div className="ingressive-con">
              <span>INGRESSIVE </span>
              <span> FOR GOOD</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
