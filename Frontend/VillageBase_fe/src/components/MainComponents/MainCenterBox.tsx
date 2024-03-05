import styles from "./MainCenterBox.module.css";
import RegionPage from "../RegionComponents/RegionPage";
import { Route, Routes } from "react-router-dom";
import ToolBar from "./ToolBar";
import CottagePage from "../CottageComponents/CottagePage";
import CustomerPage from "../CustomerComponents/CustomerPage";
import { SortTypeProvider } from "../SortingComponents/SortTypeContext";
import ReservationPage from "../ReservationComponents/ReservationPage";
import ServicePage from "../ServiceComponents/ServicePage";
import AddCabinPage from "../CottageComponents/AddCabinPage"; // -sale
import AddRegionPage from "../RegionComponents/AddRegionPage"; // -sale
import AddServicePage from "../ServiceComponents/AddServicePage"; // -sale
import AddReservationPage from "../ReservationComponents/AddReservationPage"; // -sale

import BillingPage from "../BillingComponents/BillingPage";
import { ToolStateProvider } from "./ToolStateContext";

function MainCenterBox() {
    return (
        <div className={styles.mainbar}>
            <div className={styles.page}>
                <ToolStateProvider>
                    <SortTypeProvider>
                        <ToolBar />
                        <div className={styles.pageContent}>
                            <Routes>
                                <Route
                                    path="/alueet"
                                    element={<RegionPage />}
                                />
                                <Route
                                    path="/mokit"
                                    element={<CottagePage />}
                                />
                                <Route
                                    path="/palvelut"
                                    element={<ServicePage />}
                                />
                                <Route
                                    path="/varaukset"
                                    element={<ReservationPage />}
                                />
                                <Route
                                    path="/asiakkaat"
                                    element={<CustomerPage />}
                                />
                                <Route // -sale
                                    path="/add-cabin"
                                    element={<AddCabinPage />}
                                />
                                <Route
                                    path="/add-region"
                                    element={<AddRegionPage />}
                                />
                                <Route
                                    path="/add-service"
                                    element={<AddServicePage />}
                                />
                                <Route
                                    path="/add-reservation"
                                    element={<AddReservationPage />}
                                />

                                <Route
                                    path="/varaukset"
                                    element={<ReservationPage />}
                                />
                                <Route
                                    path="/asiakkaat"
                                    element={<CustomerPage />}
                                />
                                <Route
                                    path="/laskutus"
                                    element={<BillingPage />}
                                />
                            </Routes>
                        </div>
                    </SortTypeProvider>
                </ToolStateProvider>
            </div>
        </div>
    );
}

export default MainCenterBox;
