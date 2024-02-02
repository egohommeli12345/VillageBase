import "./MenuBar.css";

export default function MenuBar() {
    return (
        <div className="menuBarBG">
            <div className="buttons">
                <div className="btn" onClick={handleClick}>
                    Alueet
                </div>
                <div className="btn" onClick={handleClick}>
                    Mökit
                </div>
                <div className="btn" onClick={handleClick}>
                    Palvelut
                </div>
                <div className="btn" onClick={handleClick}>
                    Varaukset
                </div>
                <div className="btn" onClick={handleClick}>
                    Asiakkaat
                </div>
                <div className="btn" onClick={handleClick}>
                    Laskut
                </div>
                <div className="btn" onClick={handleClick}>
                    Raportit
                </div>
            </div>
        </div>
    );
}

function handleClick() {
    alert("Not implemented yet!");
}
