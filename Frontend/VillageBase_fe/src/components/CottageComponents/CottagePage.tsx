import { useEffect, useState } from "react";
import styles from "./CottagePage.module.css";
import { CottageFetch } from "./CottageFetch";
import { CottageInterface } from "./CottageInterface";

// Function for CottagePage
export default function CottagePage() {
  // useState hook for mapping the cottages to CottageInterface objects
  const [cottages, setCottages] = useState<CottageInterface[]>([]);
  const [sortedCottages, setSortedCottages] = useState<CottageInterface[]>([]);

  useEffect(() => {
    CottageFetch().then((data) => {
      setCottages(data);
      setSortedCottages(data.sort(CompareCottages));
    });
  }, []);

  return (
    <div className={styles.cottageBG}>
      <div className={styles.cottageTitle}>Mökit</div>
      <div className={styles.cottageCardsContainer}>
        {sortedCottages.map((cottage) => (
          <div className={styles.card} key={cottage.mokki_id}>
            <div className={styles.cardHeader}>
              {cottage.mokkinimi} {cottage.mokki_id}
            </div>
            <div className={styles.cardBody}>
              <p><strong>Osoite:</strong> {cottage.katuosoite}, {cottage.postinro}</p>
              <p><strong>Hinta:</strong> {cottage.hinta}€/yö</p>
              <p><strong>Kuvaus:</strong> {cottage.kuvaus}</p>
              <p><strong>Henkilömäärä:</strong> {cottage.henkilomaara} henkilöä</p>
              <p><strong>Varustelu:</strong> {cottage.varustelu}</p>
            </div>
            <button className={styles.cardButton}>Lisätietoja</button>
          </div>
        ))}
      </div>
    </div>
  );
}

function CompareCottages(a: CottageInterface, b: CottageInterface) {
  return a.mokki_id - b.mokki_id;
}
