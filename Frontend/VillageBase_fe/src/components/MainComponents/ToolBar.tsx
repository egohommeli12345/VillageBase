import { useEffect, useState, useRef } from "react"; // Lisätty useRef -sale
import styles from "./ToolBar.module.css";
import { useSortType } from "../SortingComponents/SortTypeContext";
import { useSearch } from "./SearchContext";
import { Link } from "react-router-dom"; // Link to the Add page -sale
import { useToolState } from "./ToolStateContext";

const ToolBar = () => {
    const {
        deleteBtn,
        setDeleteBtn,
        editBtn,
        setEditBtn,
        addBtn,
        setAddBtn,
        onLandingPage,
    } = useToolState();
    const { setSortType } = useSortType();
    const [sortClicked, setSortClicked] = useState(false);
    const { setSearchShowState, SearchShowState, setSearchQuery } = useSearch();
    //const toolBarRef = useRef(null); // Ref for the toolbar-div -sale
    const toolBarRef = useRef<HTMLDivElement>(null); // Tyypitetty ref DOM-elementille -sale
    // Ref for the input field
    const inputRef = useRef<HTMLInputElement>(null);

    //1. HUOM!! Tarkoitus on luoda tapa, jolla voidaan sulkea dropdown-valikko, kun käyttäjä klikkaa muualle kuin dropdown-valikko tai toolbar-diviin

    useEffect(() => {
        // Sulkee dropdown-valikon, jos klikattu elementti ei ole toolbar-divin sisällä
        function handleClickOutside(event: MouseEvent) {
            if (
                toolBarRef.current &&
                !toolBarRef.current.contains(event.target as Node)
            ) {
                setSortClicked(false);
                setSearchShowState(false);
            }
        }

        // Lisätään click-event listener kun komponentti on mountattu
        document.addEventListener("mousedown", handleClickOutside);

        // Poistetaan event listener, kun komponentti unmountataan
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [toolBarRef]);

    return (
        <div
            className={
                onLandingPage ? styles.toolBarBG : styles.toolBarBGHidden
            }
            ref={toolBarRef}
        >
            <div className={styles.toolBar}>
                <div className={styles.add}>
                    <div className={styles.tool} onClick={handleAdd}>
                        Uusi
                    </div>
                </div>

                <div className={styles.tool} onClick={handleDelete}>
                    Poista
                </div>
                <div className={styles.tool} onClick={handleEdit}>
                    Muokkaa
                </div>

                <div className={styles.tool} onClick={handleSearch}>
                    Hae
                </div>
                <div
                    className={
                        SearchShowState
                            ? styles.searchUI
                            : styles.searchUIHidden
                    }
                >
                    <div className={styles.inputContainer}>
                        <input
                            className={styles.searchQueryInput}
                            ref={inputRef}
                            placeholder="Hae..."
                            onChange={(e) => {
                                setSearchQuery(e.target.value);
                            }}
                        ></input>
                    </div>
                </div>

                <div className={styles.tool} onClick={handleSort}>
                    Lajittele
                </div>
                <div
                    className={
                        sortClicked ? styles.sortMenu : styles.sortMenuHidden
                    }
                >
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
            </div>
        </div>
    );

    function AddDropDown() {
        return (
            <div className={styles.addMenu}>
                <Link to="/add-region" className={styles.addMenuItem}>
                    Alue
                </Link>
                <Link to="/add-cabin" className={styles.addMenuItem}>
                    Mökki
                </Link>
                <Link to="/add-service" className={styles.addMenuItem}>
                    Palvelu
                </Link>
                <Link to="/add-reservation" className={styles.addMenuItem}>
                    Varaus
                </Link>
                {/* Lisää muita kohtia täällä */}
            </div>
        );
    }

    function handleSort() {
        setSortClicked(!sortClicked);
    }

    function handleAdd() {
        setAddBtn(!addBtn);
    }

    function handleDelete() {
        setDeleteBtn(!deleteBtn);
    }

    function handleEdit() {
        setEditBtn(!editBtn);
    }

    function handleSearch() {
        setSearchShowState(!SearchShowState);
        console.log(SearchShowState);
        if (!SearchShowState) {
            inputRef.current?.focus();
            inputRef.current?.select();
        } else {
            setSearchQuery("");
        }
    }
};

export default ToolBar;
