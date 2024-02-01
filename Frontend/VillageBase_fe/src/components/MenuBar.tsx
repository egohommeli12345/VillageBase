import "./MenuBar.css";

export default function MenuBar() {
  return (
    <div className="menuBarBG">
      <div className="buttons">
        <a className="button">Alueet ja mökit</a>
        <a className="button">Palvelut</a>
        <a className="button">Majoitusvaraukset</a>
        <a className="button">Asiakkaat</a>
        <a className="button">Laskutus</a>
        <a className="button">Raportit</a>

        <div className="search-container">
          {" "}
          {/* Lisätty tämä divi hakuelementeille */}
          <input type="text" className="search-input" placeholder="Etsi" />
          <button type="submit" className="search-button">
            Etsi
          </button>
        </div>
      </div>
    </div>
  );
}
