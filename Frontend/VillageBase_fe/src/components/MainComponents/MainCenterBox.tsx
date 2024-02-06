import "./MainCenterBox.css";
import RegionPage from "../RegionComponents/RegionPage";
import { Route, Routes } from "react-router-dom";
import ToolBar from "./ToolBar";
import CottagePage from "../CottageComponents/CottagePage";

function MainCenterBox() {
    return (
        <div className="mainbar">
            <div className="page">
                <ToolBar />
                <div className="pageContent">
                    <Routes>
                        <Route path="/alueet" element={<RegionPage />} />
                        <Route path="/mokit" element={<CottagePage />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default MainCenterBox;
