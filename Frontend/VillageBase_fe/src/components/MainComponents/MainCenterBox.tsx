import styles from "./MainCenterBox.module.css";
import RegionPage from "../RegionComponents/RegionPage";
import { Route, Routes } from "react-router-dom";
import ToolBar from "./ToolBar";
import CottagePage from "../CottageComponents/CottagePage";
import CustomerPage from "../CustomerComponents/CustomerPage";

function MainCenterBox() {
    return (
        <div className={styles.mainbar}>
            <div className={styles.page}>
                <ToolBar />
                <div className={styles.pageContent}>
                    <Routes>
                        <Route path="/alueet" element={<RegionPage />} />
                        <Route path="/mokit" element={<CottagePage />} />
                        <Route path="/asiakkaat" element={<CustomerPage />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default MainCenterBox;
