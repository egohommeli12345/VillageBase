import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainCenterBox from "./components/MainCenterBox";
import MenuBar from "./components/MenuBar";
import ToolBar from "./components/ToolBar";

function App() {
    return (
        <BrowserRouter>
            <div className="main">
                <MenuBar />
                <ToolBar />
                <div className="horizontaldivider"></div>
                <Routes>
                    <Route path="/alueet" element={<MainCenterBox />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
