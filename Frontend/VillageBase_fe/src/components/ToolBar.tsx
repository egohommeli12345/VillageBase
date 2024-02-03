import "./ToolBar.css";

export default function ToolBar() {
  return (
    <div className="toolBarBG">
      <div className="toolBar">
        <div className="tool" onClick={handleClick}>
          Lisää
        </div>
        <div className="tool" onClick={handleClick}>
          Hae
        </div>
        <div className="tool" onClick={handleClick}>
          Muokkaa
        </div>
        <div className="tool" onClick={handleClick}>
          Poista
        </div>
      </div>
    </div>
  );

  function handleClick() {
    alert("Not implemented yet!");
  }
}
