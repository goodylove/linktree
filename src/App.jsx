import "./App.css";
import MyImage from "../src/image/nwachukwu.png";
import SlackImage from "../src/image/slack.png";
import GithubImage from "../src/image/icons8-github-30.png";
import EarthLogo from "./image/earthlogo.png";
import { BsThreeDots, BsCamera } from "react-icons/bs";
import { RiShareForwardLine } from "react-icons/ri";
import LinkButton from "./components/LinkButton";

function App() {
  return (
    <>
      <div className="container">
        <div className="dot-container">
          <div className="three-dot-icon-wrapper">
            <div className="three-con">
              <BsThreeDots fontSize={"16px"} className="dot-component" />
              <RiShareForwardLine className="forward-component" />
            </div>

            <div className="sharelink-con">share link</div>
          </div>
        </div>
        <div className="img-container">
          <div className="profile-con">
            <div className="camera-co">
              <BsCamera style={{ color: "white", fontSize: "20px" }} />
            </div>
            <img src={MyImage} id="profile_img" alt="profile-img" />
          </div>
          <span id="twitter">@goodylove474</span>
          <span id="slack">Nwachukwu Goodness</span>
        </div>

        <ul className="links-container">
          <li>
            <LinkButton href="https://twitter.com/goodylove474">Twitter link</LinkButton>
          </li>
          <li>
            <LinkButton id="btn_zuri" href="https://training.zuri.team/" tooltipSubText="Meets the Zuri Team">Zuri Team</LinkButton>
          </li>
          <li>
            <LinkButton id="books" href="https://books.zuri.team"
              tooltipTitle="Zuri's Library of books" 
              tooltipSubText="You can find all kinds of tech related books right here on the Zuri librabry, you get access to free and premium books to help you with your tech journey."
            >
              Zuri Books
            </LinkButton>
          </li>
          <li>
            <LinkButton 
              id="book__python" 
              href="https://books.zuri.team/python-for-beginners?ref_id=nwachukwugoodness"
              tooltipTitle="Grab a copy of the python for beginners book"
              tooltipSubText="Are you new to python? Grab a copy of my beginner's friendly book on python."
            >Python Books</LinkButton>
          </li>
          <li>
            <LinkButton id="pitch" href="https://background.zuri.team/"
            tooltipSubText="Tech talent hunt is a program where you get to test your tech skills and watch others do amazing works with their skills"
            >
              Background Check for Coders
            </LinkButton>
          </li>
          <li>
            <LinkButton id="book__design" href="https://books.zuri.team/design-rules" tooltipSubText="Get the best book money can get you on UI/UX.">Design Books</LinkButton>
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
