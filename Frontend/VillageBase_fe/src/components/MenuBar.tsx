import { useNavigate } from "react-router-dom";
import "./MenuBar.css";

export default function MenuBar() {
    const navigate = useNavigate();

    const goToRegionsPage = () => {
        navigate("/alueet");
    };

    return (
        <div className="menuBarBG">
            <div className="buttons">
                <div className="btn" onClick={goToRegionsPage}>
                    Alueet
                </div>
                <div className="btn" onClick={goToRegionsPage}>
                    Mökit
                </div>
                <div className="btn" onClick={goToRegionsPage}>
                    Palvelut
                </div>
                <div className="btn" onClick={goToRegionsPage}>
                    Varaukset
                </div>
                <div className="btn" onClick={goToRegionsPage}>
                    Asiakkaat
                </div>
                <div className="btn" onClick={goToRegionsPage}>
                    Laskutus
                </div>
                <div className="btn" onClick={goToRegionsPage}>
                    Raportit
                </div>
            </div>
        </div>
    );
}
