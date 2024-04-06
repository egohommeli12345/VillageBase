import { useNavigate } from "react-router-dom";
import styles from "./MenuBar.module.css";
import ToolBar from "./ToolBar";
import { useSearch } from "./SearchContext";
export default function MenuBar() {
    const navigate = useNavigate();

    const { setSearchQuery } = useSearch();
    const goToRegionsPage = () => {
        setSearchQuery("");
        navigate("/alueet");
    };
    const goToCottagesPage = () => {
        setSearchQuery("");
        navigate("/mokit");
    };
    const goToServicesPage = () => {
        setSearchQuery("");
        navigate("/palvelut");
    };
    const goToReservationsPage = () => {
        setSearchQuery("");
        navigate("/varaukset");
    };
    const goToCustomersPage = () => {
        setSearchQuery("");
        navigate("/asiakkaat");
    };
    const goToBillingPage = () => {
        setSearchQuery("");
        navigate("/laskutus");
    };
    const goToReportsPage = () => {
        setSearchQuery("");
        navigate("/raportit");
    };

    return (
        <div className={styles.menuBar}>
            <div className={styles.menuBarBG}>
                <div className={styles.buttons}>
                    <div className={styles.btn} onClick={goToRegionsPage}>
                        Alueet
                    </div>
                    <div className={styles.btn} onClick={goToCottagesPage}>
                        Mökit
                    </div>
                    <div className={styles.btn} onClick={goToServicesPage}>
                        Palvelut
                    </div>
                    <div className={styles.btn} onClick={goToReservationsPage}>
                        Varaukset
                    </div>
                    <div className={styles.btn} onClick={goToCustomersPage}>
                        Asiakkaat
                    </div>
                    <div className={styles.btn} onClick={goToBillingPage}>
                        Laskutus
                    </div>
                    <div className={styles.btn} onClick={goToReportsPage}>
                        Raportit
                    </div>
                </div>
            </div>
            <ToolBar />
        </div>
    );
}
