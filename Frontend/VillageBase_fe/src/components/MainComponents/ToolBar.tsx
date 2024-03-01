import { useState } from "react";
import styles from "./ToolBar.module.css";
import { useSortType } from "../SortingComponents/SortTypeContext";
import { useSearch } from "../SearchComponents/SearchContext";

const ToolBar = () => {
    const { setSortType } = useSortType();
    const [sortClicked, setSortClicked] = useState(false);
    const { setSearchShowState } = useSearch();

    return (
        <div className={styles.toolBarBG}>
            <div className={styles.toolBar}>
                <div className={styles.tool}>Lisää</div>
                <div className={styles.tool}>Poista</div>
                <div className={styles.tool}>Muokkaa</div>
                <div className={styles.tool} onClick={ShowSearch}>
                    Hae
                </div>
                <div className={styles.sort}>
                    <div className={styles.tool} onClick={ShowSortMenu}>
                        Lajittele
                    </div>
                    {sortClicked ? <SortDropDown /> : null}
                </div>
            </div>
        </div>
    );

    function ShowSortMenu() {
        if (sortClicked) {
            setSortClicked(false);
        } else if (!sortClicked) {
            setSortClicked(true);
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

    function ShowSearch() {
        setSearchShowState((SearchShowState) => !SearchShowState);
    }
};

export default ToolBar;
