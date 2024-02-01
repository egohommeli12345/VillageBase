// import React from 'react';
import "./MainCenterBox.css";

function MainCenterBox() {
    return (
        <div className="container">
            <div className="sidebar">
                <h1>Sidebar</h1>
                <h2>Tähän tulee  linkkejä</h2>
                <div className="links">
                    <h4>eka</h4>
                    <h4>toka</h4>
                    <h4>kolmas</h4>
                    <h4>neljäs</h4>
                    <h4>viides</h4>
                </div>
            </div>
            <div className="mainbar">
                <h1>Mainbar</h1>
                <div className="content">
                    <h2>Tähän tulee jotain KONTSAAA</h2>
                </div>
            </div>
        </div>
    );
}

export default MainCenterBox;
