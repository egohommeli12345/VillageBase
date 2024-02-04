import { useNavigate } from "react-router-dom";
import "./MenuBar.css";

export default function MenuBar() {
    const navigate = useNavigate();

    const goToHomePage = () => {
        navigate("/alueet");
    };

    return (
        <div className="menuBarBG">
            <div className="buttons">
                <div className="btn" onClick={goToHomePage}>
                    Alueet
                </div>
                <div className="btn" onClick={goToHomePage}>
                    Mökit
                </div>
                <div className="btn" onClick={goToHomePage}>
                    Palvelut
                </div>
                <div className="btn" onClick={goToHomePage}>
                    Varaukset
                </div>
                <div className="btn" onClick={goToHomePage}>
                    Asiakkaat
                </div>
                <div className="btn" onClick={goToHomePage}>
                    Laskut
                </div>
                <div className="btn" onClick={goToHomePage}>
                    Raportit
                </div>
            </div>
        </div>
    );
}
