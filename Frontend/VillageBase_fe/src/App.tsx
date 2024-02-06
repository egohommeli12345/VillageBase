import { BrowserRouter } from "react-router-dom";
import "./App.css";
import MainCenterBox from "./components/MainComponents/MainCenterBox";
import MenuBar from "./components/MainComponents/MenuBar";
import ToolBar from "./components/MainComponents/ToolBar";

function App() {
    return (
        <BrowserRouter>
            <div className="main">
                <MenuBar />
                <MainCenterBox />
            </div>
        </BrowserRouter>
    );
}

export default App;
