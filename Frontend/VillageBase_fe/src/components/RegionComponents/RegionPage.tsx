import styles from "./RegionPage.module.css";
import { RegionInterface } from "./RegionInterface";
import { useEffect, useState } from "react";
import { RegionFetch } from "./RegionFetch";
import { SortItems } from "../SortingComponents/SorterFunc";
import { useSortType } from "../SortingComponents/SortTypeContext";
import { useSearch } from "../SearchComponents/SearchContext";

// Function for RegionPage
export default function RegionPage() {
    // useState hook for mapping the regions to RegionInterface objects
    const [regions, setRegions] = useState<RegionInterface[]>([]);

    // useState hook for searching the regions
    const [filteredData, setFilteredData] = useState<RegionInterface[]>([]);

    // Custom hooks for sortType and searchQuery
    const { sortType } = useSortType();
    const { searchQuery } = useSearch();

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
                <ul className={styles.list}>
                    {filteredData.map((region) => (
                        <li className={styles.listItem} key={region.alue_id}>
                            <div className={styles.itemData}>
                                <div className={styles.itemTitle}>
                                    Alueen ID:
                                </div>
                                <div className={styles.regionId}>
                                    {region.alue_id}
                                </div>

                                <div className={styles.itemTitle}>
                                    Alueen nimi:
                                </div>
                                <div className={styles.regionName}>
                                    {region.nimi}
                                </div>
                                <div className={styles.listBtn}>Valitse</div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
