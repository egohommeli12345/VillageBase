import { useEffect, useState } from "react";
import styles from "./CottagePage.module.css";
import { CottageDelete, CottageFetch } from "./CottageFetch";
import { CottageInterface } from "./CottageInterface";
import { useSortType } from "../SortingComponents/SortTypeContext";
import { SortItems } from "../SortingComponents/SorterFunc";
import { useSearch } from "../MainComponents/SearchContext";
import { useToolState } from "../MainComponents/ToolStateContext";
import AddCabinPage from "./AddCabinPage";
import { CustomerDelete } from "../CustomerComponents/CustomerFetch.ts";

// Function for CottagePage
export default function CottagePage() {
    // Custom hooks for sortType and searchQuery
    const { sortType, setSortKeys, sortBy } = useSortType();
    const { searchQuery } = useSearch();

    // useState hook for searching the cottages
    const [filteredData, setFilteredData] = useState<CottageInterface[]>([]);

    // useState hook for mapping the cottages to CottageInterface objects
    const [cottages, setCottages] = useState<CottageInterface[]>([]);

    // State to track the active container
    const [activeContainerId, setActiveContainerId] = useState<number | null>(
        null,
    );

    // Function to toggle the active container
    const makeActive = (id: number) => {
        if (id === activeContainerId) {
            setActiveContainerId(null);
            return;
        }
        setActiveContainerId(id);
    };

    // Fetching the cottage data and sorting it by the sortType
    useEffect(() => {
        CottageFetch().then((data) => {
            const sortedData = SortItems(sortType, data, sortBy);
            setCottages(sortedData);
            setSortKeys(Object.keys(sortedData[0]));
        });
    }, [sortType, sortBy]);

    // Search function for filtering the cottages
    useEffect(() => {
        setFilteredData(
            cottages.filter((item) =>
                Object.values(item).some((value) =>
                    String(value)
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase()),
                ),
            ),
        );
    }, [searchQuery, cottages]);

    useEffect(() => {
        setOnLandingPage(true);
    }, []);

    const {
        addBtn,
        deleteBtn,
        editBtn,
        setEditBtn,
        setAddBtn,
        setDeleteBtn,
        setOnLandingPage,
    } = useToolState();

    const handleCloseBtn = () => {
        setEditBtn(false);
        setAddBtn(false);
    };

    useEffect(() => {
        if (activeContainerId !== null) {
            CottageDelete(activeContainerId);
        }
    }, [deleteBtn]);

    return (
        <div className={styles.cottageBG}>
            <div className={addBtn ? styles.addPageBg : styles.hidden}>
                <div className={styles.addPage}>
                    <img
                        className={styles.closeAddPage}
                        src="/closeX.svg"
                        onClick={handleCloseBtn}
                    />
                    <div className={styles.popUpContent}>
                        <AddCabinPage />
                    </div>
                </div>
            </div>
            <div className={styles.cottageCardsContainer}>
                {filteredData.map((cottage) => (
                    <div
                        className={styles.card}
                        key={cottage.mokki_id}
                        onClick={() => makeActive(cottage.mokki_id)}
                    >
                        <div
                            className={
                                activeContainerId === cottage.mokki_id
                                    ? styles.cardHeaderActive
                                    : styles.cardHeader
                            }
                        >
                            {cottage.mokkinimi} {cottage.mokki_id}
                        </div>
                        <div className={styles.cardBody}>
                            <p>
                                <strong>Osoite:</strong> {cottage.katuosoite},{" "}
                                {cottage.postinro}
                            </p>
                            <p>
                                <strong>Hinta:</strong> {cottage.hinta}€/yö
                            </p>
                            <p>
                                <strong>Kuvaus:</strong> {cottage.kuvaus}
                            </p>
                            <p>
                                <strong>Henkilömäärä:</strong>{" "}
                                {cottage.henkilomaara} henkilöä
                            </p>
                            <p>
                                <strong>Varustelu:</strong> {cottage.varustelu}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
