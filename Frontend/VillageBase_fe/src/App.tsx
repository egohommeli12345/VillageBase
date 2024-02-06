import { BrowserRouter } from "react-router-dom";
import "./App.css";
import MainCenterBox from "./components/MainComponents/MainCenterBox";
import MenuBar from "./components/MainComponents/MenuBar";

function App() {
    return (
        <BrowserRouter>
            <div className="mainApp">
                <MenuBar />
                <MainCenterBox />
            </div>
        </BrowserRouter>
    );
}

export default App;
