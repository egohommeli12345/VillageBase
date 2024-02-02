import "./App.css";
import MainCenterBox from "./components/MainCenterBox";
import MenuBar from "./components/MenuBar";
import ToolBar from "./components/ToolBar";

function App() {
    return (
        <>
            <div className="main">
                <MenuBar />
                <ToolBar />
                <MainCenterBox />
            </div>
        </>
    );
}

export default App;
