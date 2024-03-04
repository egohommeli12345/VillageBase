import styles from "./MainCenterBox.module.css";
import RegionPage from "../RegionComponents/RegionPage";
import { Route, Routes } from "react-router-dom";
import ToolBar from "./ToolBar";
import CottagePage from "../CottageComponents/CottagePage";
import CustomerPage from "../CustomerComponents/CustomerPage";
import { SortTypeProvider } from "../SortingComponents/SortTypeContext";
import { useSearch } from "../SearchComponents/SearchContext";
import ReservationPage from "../ReservationComponents/ReservationPage";
import ServicePage from "../ServiceComponents/ServicePage";
import SearchUI from "../SearchComponents/SearchUI";
import BillingPage from "../BillingComponents/BillingPage";

function MainCenterBox() {
    const { SearchShowState } = useSearch();

    return (
        <div className={styles.mainbar}>
            <div className={styles.page}>
                <SortTypeProvider>
                    <ToolBar />
                    {SearchShowState ? <SearchUI /> : null}
                    <div className={styles.pageContent}>
                        <Routes>
                            <Route path="/alueet" element={<RegionPage />} />
                            <Route path="/mokit" element={<CottagePage />} />
                            <Route path="/palvelut" element={<ServicePage />} />
                            <Route path="/varaukset" element={<ReservationPage />} />
                            <Route path="/asiakkaat" element={<CustomerPage />} />
                            <Route path="/laskutus" element={<BillingPage />} />
                        </Routes>
                    </div>
                </SortTypeProvider>
            </div>
        </div>
    );
}

export default MainCenterBox;
