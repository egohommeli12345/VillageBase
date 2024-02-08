import styles from "./MainCenterBox.module.css";
import RegionPage from "../RegionComponents/RegionPage";
import { Route, Routes } from "react-router-dom";
import ToolBar from "./ToolBar";
import CottagePage from "../CottageComponents/CottagePage";
import CustomerPage from "../CustomerComponents/CustomerPage";
import { SortTypeProvider } from "../SortingComponents/SortTypeContext";

function MainCenterBox() {
    return (
        <div className={styles.mainbar}>
            <div className={styles.page}>
                <SortTypeProvider>
                    <ToolBar />
                    <div className={styles.pageContent}>
                        <Routes>
                            <Route path="/alueet" element={<RegionPage />} />
                            <Route path="/mokit" element={<CottagePage />} />
                            <Route
                                path="/asiakkaat"
                                element={<CustomerPage />}
                            />
                        </Routes>
                    </div>
                </SortTypeProvider>
            </div>
        </div>
    );
}

export default MainCenterBox;
