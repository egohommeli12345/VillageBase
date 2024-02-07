import styles from "./RegionPage.module.css";
import { RegionInterface } from "./RegionInterface";
import { useEffect, useState } from "react";
import { RegionFetch } from "./RegionFetch";

// Function for RegionPage
export default function RegionPage() {
    // useState hook for mapping the regions to RegionInterface objects
    const [regions, setRegions] = useState<RegionInterface[]>([]);

    useEffect(() => {
        RegionFetch().then((data) => {
            setRegions(data);
        });
    }, []);

    return (
        <div className={styles.regionBG}>
            <div className={styles.regionTitle}>Alueet</div>
            <div className={styles.regionList}>
                <ul className={styles.list}>
                    {regions.map((region) => (
                        <li className={styles.listItem} key={region.alue_id}>
                            <div className={styles.regionId}>
                                Alueen ID:
                                {region.alue_id}
                            </div>
                            <div className={styles.regionName}>
                                Alueen nimi:
                                {region.nimi}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
