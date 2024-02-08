import styles from "./RegionPage.module.css";
import { RegionInterface } from "./RegionInterface";
import { useEffect, useState } from "react";
import { RegionFetch } from "./RegionFetch";
import { SortItems } from "../SortingComponents/SorterFunc";
import { useSortType } from "../SortingComponents/SortTypeContext";

// Function for RegionPage
export default function RegionPage() {
    // useState hook for mapping the regions to RegionInterface objects
    const [regions, setRegions] = useState<RegionInterface[]>([]);
    const { sortType } = useSortType();

    useEffect(() => {
        RegionFetch().then((data) => {
            console.log(data);
            setRegions(SortItems(sortType, data, "alue_id"));
        });
    }, [sortType]);

    return (
        <div className={styles.regionBG}>
            <div className={styles.regionTitle}>Alueet</div>
            <div className={styles.regionList}>
                <ul className={styles.list}>
                    {regions.map((region) => (
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

function CompareRegions(a: RegionInterface, b: RegionInterface) {
    return a.alue_id - b.alue_id;
}
