import "./App.css";
import MyImage from "../src/image/nwachukwu.png";

function App() {
  return (
    <>
      <div className="container">
        <div className="img-container">
          <img src={MyImage} id="profile_img" />
        </div>
      </div>
    </>
  );
}

export default App;
