import { useEffect, useState } from "react";
import styles from "./ToolBar.module.css";

export default function ToolBar() {
    const [clicked, setClicked] = useState(false);

    return (
        <div className={styles.toolBarBG}>
            <div className={styles.toolBar}>
                <div className={styles.tool} onClick={handleClick}>
                    Lisää
                </div>
                <div className={styles.tool} onClick={handleClick}>
                    Hae
                </div>
                <div className={styles.tool} onClick={handleClick}>
                    Muokkaa
                </div>
                <div className={styles.tool} onClick={handleClick}>
                    Poista
                </div>
                <div className={styles.sort}>
                    <div className={styles.tool} onClick={handleSortClick}>
                        Lajittele
                    </div>
                    {clicked ? <SortDropDown /> : null}
                </div>
            </div>
        </div>
    );

    function handleClick() {
        alert("Not implemented yet!");
    }

    function SortDropDown() {
        return (
            <div className={styles.dropDown}>
                <div className={styles.dropDownItem} onClick={handleClick}>
                    Laskeva
                </div>
                <div className={styles.dropDownItem} onClick={handleClick}>
                    Kasvava
                </div>
            </div>
        );
    }

    function handleSortClick() {
        if (clicked) {
            setClicked(false);
        } else if (!clicked) {
            setClicked(true);
        }
    }
}
