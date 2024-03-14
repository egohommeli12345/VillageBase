import { useNavigate } from "react-router-dom";
import styles from "./MenuBar.module.css";
import ToolBar from "./ToolBar";

export default function MenuBar() {
    const navigate = useNavigate();

    const goToRegionsPage = () => {
        navigate("/alueet");
    };
    const goToCottagesPage = () => {
        navigate("/mokit");
    };
    const goToServicesPage = () => {
        navigate("/palvelut");
    };
    const goToReservationsPage = () => {
        navigate("/varaukset");
    };
    const goToCustomersPage = () => {
        navigate("/asiakkaat");
    };
    const goToBillingPage = () => {
        navigate("/laskutus");
    };
    const goToReportsPage = () => {
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
