import { useEffect, useState } from "react";
import styles from "./CottagePage.module.css";
import { CottageFetch } from "./CottageFetch";
import { CottageInterface } from "./CottageInterface";
import { useSortType } from "../SortingComponents/SortTypeContext";
import { SortItems } from "../SortingComponents/SorterFunc";

// Function for CottagePage
export default function CottagePage() {
    // useContext hook for getting the sortType from the SortTypeContext
    const { sortType } = useSortType();

    // useState hook for mapping the cottages to CottageInterface objects
    const [cottages, setCottages] = useState<CottageInterface[]>([]);

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

    useEffect(() => {
        CottageFetch().then((data) => {
            setCottages(SortItems(sortType, data, "mokki_id"));
        });
    }, [sortType]);

    return (
        <div className={styles.cottageBG}>
            <div className={styles.cottageTitle}>Mökit</div>
            <div className={styles.cottageCardsContainer}>
                {cottages.map((cottage) => (
                    <div
                        className={`${styles.card} ${
                            activeContainerId === cottage.mokki_id
                                ? styles.active
                                : ""
                        }`}
                        key={cottage.mokki_id}
                        onClick={() => makeActive(cottage.mokki_id)}
                    >
                        <div className={styles.cardHeader}>
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
                        {/* <button className={styles.cardButton}>Lisätietoja</button> */}
                    </div>
                ))}
            </div>
        </div>
    );
}
