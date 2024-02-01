import "./App.css";
import MainCenterBox from "./components/MainCenterBox";
import MenuBar from "./components/MenuBar";

function App() {
  return (
    <>
      <div className="main">
        <MenuBar />
        <MainCenterBox />
      </div>
    </>
  );
}

export default App;
