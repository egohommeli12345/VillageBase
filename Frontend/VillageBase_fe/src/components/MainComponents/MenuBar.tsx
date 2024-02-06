import { useNavigate } from "react-router-dom";
import "./MenuBar.css";

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
        <div className="menuBarBG">
            <div className="buttons">
                <div className="btn" onClick={goToRegionsPage}>
                    Alueet
                </div>
                <div className="btn" onClick={goToCottagesPage}>
                    Mökit
                </div>
                <div className="btn" onClick={goToServicesPage}>
                    Palvelut
                </div>
                <div className="btn" onClick={goToReservationsPage}>
                    Varaukset
                </div>
                <div className="btn" onClick={goToCustomersPage}>
                    Asiakkaat
                </div>
                <div className="btn" onClick={goToBillingPage}>
                    Laskutus
                </div>
                <div className="btn" onClick={goToReportsPage}>
                    Raportit
                </div>
            </div>
        </div>
    );
}
