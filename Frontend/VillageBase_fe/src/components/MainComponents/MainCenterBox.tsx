import styles from "./MainCenterBox.module.css";
import RegionPage from "../RegionComponents/RegionPage";
import { Route, Routes } from "react-router-dom";
import CottagePage from "../CottageComponents/CottagePage";
import CustomerPage from "../CustomerComponents/CustomerPage";
import ReservationPage from "../ReservationComponents/ReservationPage";
import ServicePage from "../ServiceComponents/ServicePage";
import AddCabinPage from "../CottageComponents/AddCabinPage"; // -sale
import AddRegionPage from "../RegionComponents/AddRegionPage"; // -sale
import AddServicePage from "../ServiceComponents/AddServicePage"; // -sale
import AddReservationPage from "../ReservationComponents/AddReservationPage"; // -sale
import BillingPage from "../BillingComponents/BillingPage";
import ReportPage from "../ReportComponents/ReportPage";
import LandingPage from "../LandingComponents/LandingPage";

function MainCenterBox() {
    return (
        <div className={styles.mainbar}>
            <div className={styles.page}>
                <div className={styles.pageContent}>
                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/alueet" element={<RegionPage />} />
                        <Route path="/mokit" element={<CottagePage />} />
                        <Route path="/palvelut" element={<ServicePage />} />
                        <Route
                            path="/varaukset"
                            element={<ReservationPage />}
                        />
                        <Route path="/asiakkaat" element={<CustomerPage />} />
                        <Route path="/laskutus" element={<BillingPage />} />
                        <Route path="/raportit" element={<ReportPage />} />
                        <Route // -sale
                            path="/add-cabin"
                            element={<AddCabinPage />}
                        />
                        <Route path="/add-region" element={<AddRegionPage />} />
                        <Route
                            path="/add-service"
                            element={<AddServicePage />}
                        />
                        <Route
                            path="/add-reservation"
                            element={<AddReservationPage />}
                        />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default MainCenterBox;
