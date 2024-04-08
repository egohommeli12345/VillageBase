import { useNavigate } from "react-router-dom";
import styles from "./MenuBar.module.css";
import ToolBar from "./ToolBar";
import { useSearch } from "./SearchContext";
import { useSortType } from "../SortingComponents/SortTypeContext.tsx";
export default function MenuBar() {
    const navigate = useNavigate();

    const { setSearchQuery } = useSearch();
    const { setSortBy, setSortType, sortBy } = useSortType();
    const goToRegionsPage = () => {
        setSearchQuery("");
        setSortBy("");
        setSortType("default");
        navigate("/alueet");
    };
    const goToCottagesPage = () => {
        setSearchQuery("");
        setSortBy("");
        setSortType("default");
        navigate("/mokit");
    };
    const goToServicesPage = () => {
        setSearchQuery("");
        setSortBy("");
        setSortType("default");
        navigate("/palvelut");
    };
    const goToReservationsPage = () => {
        setSearchQuery("");
        setSortBy("");
        setSortType("default");
        navigate("/varaukset");
    };
    const goToCustomersPage = () => {
        setSearchQuery("");
        setSortBy("");
        setSortType("default");
        navigate("/asiakkaat");
    };
    const goToBillingPage = () => {
        setSearchQuery("");
        setSortBy("");
        setSortType("default");
        navigate("/laskutus");
    };
    const goToReportsPage = () => {
        setSearchQuery("");
        setSortBy("");
        setSortType("default");
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
