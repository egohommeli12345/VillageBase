import { useState } from "react";
import styles from "./ToolBar.module.css";
import { useSortType } from "../SortingComponents/SortTypeContext";

const ToolBar = () => {
    const { setSortType } = useSortType();
    const [clicked, setClicked] = useState(false);

    return (
        <div className={styles.toolBarBG}>
            <div className={styles.toolBar}>
                <div className={styles.tool}>Lisää</div>
                <div className={styles.tool}>Poista</div>
                <div className={styles.tool}>Muokkaa</div>
                <div className={styles.tool}>Hae</div>
                <div className={styles.sort}>
                    <div className={styles.tool} onClick={ShowSortMenu}>
                        Lajittele
                    </div>
                    {clicked ? <SortDropDown /> : null}
                </div>
            </div>
        </div>
    );

    function ShowSortMenu() {
        if (clicked) {
            setClicked(false);
        } else if (!clicked) {
            setClicked(true);
        }
    }

    function SortDropDown() {
        return (
            <div className={styles.sortMenu}>
                <div
                    className={styles.sortMenuItem}
                    onClick={() => setSortType("default")}
                >
                    Alkup.
                </div>
                <div
                    className={styles.sortMenuItem}
                    onClick={() => setSortType("ascending")}
                >
                    Kasvava
                </div>
                <div
                    className={styles.sortMenuItem}
                    onClick={() => setSortType("descending")}
                >
                    Laskeva
                </div>
            </div>
        );
    }
};

export default ToolBar;
