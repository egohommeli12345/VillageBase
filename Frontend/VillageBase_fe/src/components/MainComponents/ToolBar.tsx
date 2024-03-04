import { useState } from "react";
import styles from "./ToolBar.module.css";
import { useSortType } from "../SortingComponents/SortTypeContext";
import { useSearch } from "../SearchComponents/SearchContext";
import { Link } from "react-router-dom"; // Link to the Add page -sale
import AddCabinPage from "../CottageComponents/AddCabinPage";


const ToolBar = () => {
    const { setSortType } = useSortType();
    const [sortClicked, setSortClicked] = useState(false);
    const [addClicked, setAddClicked] = useState(false); // New space for the addClicked state -sale
    const { setSearchShowState } = useSearch();

    return (
        <div className={styles.toolBarBG}>
            <div className={styles.toolBar}>

                        
                <div className={styles.add}>  {/* -sale */}
                    <div className={styles.tool} onClick={toggleAddClicked}>
                        Lisää
                    </div>
                    {addClicked ? <AddDropDown /> : null} 
                </div>
                
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

    function toggleAddClicked() {
        setAddClicked(!addClicked);
    }

    function AddDropDown() {
        return (
            <div className={styles.addMenu}>
                <Link to="/add-cabin" className={styles.addMenuItem}>
                    Mökki
                </Link>
                {/* Lisää muita kohtia täällä */}
            </div>
        );
    }

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
