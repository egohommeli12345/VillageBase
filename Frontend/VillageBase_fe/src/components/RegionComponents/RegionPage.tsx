import styles from "./RegionPage.module.css";
import { RegionInterface } from "./RegionInterface";
import { useEffect, useState } from "react";
import { RegionFetch } from "./RegionFetch";

// Function for RegionPage
export default function RegionPage() {
  // useState hook for mapping the regions to RegionInterface objects
  const [regions, setRegions] = useState<RegionInterface[]>([]);
  const [sortedRegions, setSortedRegions] = useState<RegionInterface[]>([]);

  useEffect(() => {
    RegionFetch().then((data) => {
      setRegions(data);
      setSortedRegions(data.toSorted(CompareRegions));
    });
  }, []);

  return (
    <div className={styles.regionBG}>
      <div className={styles.regionTitle}>Alueet</div>
      <div className={styles.regionList}>
        <ul className={styles.list}>
          {sortedRegions.map((region) => (
            <li className={styles.listItem} key={region.alue_id}>
              <div className={styles.itemData}>
                <div className={styles.itemTitle}>Alueen ID:</div>
                <div className={styles.regionId}>{region.alue_id}</div>

                <div className={styles.itemTitle}>Alueen nimi:</div>
                <div className={styles.regionName}>{region.nimi}</div>
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
