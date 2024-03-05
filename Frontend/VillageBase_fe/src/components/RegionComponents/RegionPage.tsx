import { useEffect, useState } from "react";
import styles from "./RegionPage.module.css";
import { RegionFetch } from "./RegionFetch";
import { RegionInterface } from "./RegionInterface";
import { useSortType } from "../SortingComponents/SortTypeContext";
import { SortItems } from "../SortingComponents/SorterFunc";
import { useSearch } from "../MainComponents/SearchContext";

// Function for RegionPage
export default function RegionPage() {
    // Custom hooks for sortType and searchQuery
    const { sortType } = useSortType();
    const { searchQuery } = useSearch();

    // useState hook for searching the regions
    const [filteredData, setFilteredData] = useState<RegionInterface[]>([]);

    // useState hook for mapping the regions to RegionInterface objects
    const [regions, setRegions] = useState<RegionInterface[]>([]);

    // State to track the active container
    const [activeContainerId, setActiveContainerId] = useState<number | null>(
        null
    );

    // Function to toggle the active container
    const makeActive = (id: number) => {
        if (id === activeContainerId) {
            setActiveContainerId(null);
            return;
        }
        setActiveContainerId(id);
    };

    // Fetching the region data and sorting it by the sortType
    useEffect(() => {
        RegionFetch().then((data) => {
            const sortedData = SortItems(sortType, data, "alue_id");
            setRegions(sortedData);
        });
    }, [sortType]);

    // Search function for filtering the regions
    useEffect(() => {
        setFilteredData(
            regions.filter((item) =>
                Object.values(item).some((value) =>
                    String(value)
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase())
                )
            )
        );
    }, [searchQuery, regions]);

    return (
        <div className={styles.regionBG}>
            <div className={styles.regionTitle}>Alueet</div>
            <div className={styles.regionList}>
                <div className={styles.regionCardsContainer}>
                    {filteredData.map((region) => (
                        <div
                            className={`${styles.card} ${
                                activeContainerId === region.alue_id
                                    ? styles.active
                                    : ""
                            }`}
                            key={region.alue_id}
                            onClick={() => makeActive(region.alue_id)}
                        >
                            <div className={styles.cardHeader}>
                                {region.nimi} {region.alue_id}
                            </div>
                            <div className={styles.cardBody}>
                                <p>
                                    <strong>Alueen nimi:</strong> {region.nimi}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
