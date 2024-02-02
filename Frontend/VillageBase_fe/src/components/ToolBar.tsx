import "./ToolBar.css";

export default function ToolBar() {
    return (
        <div className="toolBarBG">
            <div className="toolBar">
                <div className="tool" onClick={handleClick}></div>
                <div className="tool" onClick={handleClick}></div>
                <div className="tool" onClick={handleClick}></div>
                <div className="tool" onClick={handleClick}></div>
                <div className="tool" onClick={handleClick}></div>
                <div className="tool" onClick={handleClick}>
                    Poista
                </div>
            </div>
        </div>
    );
}

function handleClick() {
    alert("Not implemented yet!");
}
