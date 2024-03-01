import { useEffect, useState } from "react";
import styles from "./BillingPage.module.css";
import { BillingFetch } from "./BillingFetch";
import { BillingInterface } from "./BillingInterface";
import { useSortType } from "../SortingComponents/SortTypeContext";
import { SortItems } from "../SortingComponents/SorterFunc";


// Function for BillingPage
export default function BillingPage() {
    // useContext hook for getting the sortType from the SortTypeContext
    const { sortType } = useSortType();

    // useState hook for mapping the billings to BillingInterface objects
    const [billings, setBillings] = useState<BillingInterface[]>([]);

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
        BillingFetch().then((data) => {
            setBillings(SortItems(sortType, data, "lasku_id"));
        });
    }, [sortType]);

    return (
        <div className={styles.billingBG}>
            <div className={styles.billingTitle}>Laskut</div>
            <div className={styles.billingCardsContainer}>
                {billings.map((billing) => (
                    <div
                        className={`${styles.card} ${
                            activeContainerId === billing.lasku_id
                                ? styles.active
                                : ""
                        }`}
                        key={billing.lasku_id}
                        onClick={() => makeActive(billing.lasku_id)}
                    >
                        <div className={styles.cardHeader}>
                            {billing.lasku_id}
                        </div>
                        <div className={styles.cardBody}>
                            <p>
                                <strong>Laskun päivämäärä:</strong> {billing.lasku_pvm}
                            </p>
                            <p>
                                <strong>Eräpäivä:</strong> {billing.erapaiva}
                            </p>
                            <p>
                                <strong>Summa:</strong> {billing.summa}€
                            </p>
                            <p>
                                <strong>ALV:</strong> {billing.alv}%
                            </p>
                            <p>
                                <strong>Viitenumero:</strong> {billing.viitenumero}
                            </p>
                            <p>
                                <strong>Status:</strong> {billing.status}
                            </p>
                            </div>
                            {/* <button className={styles.cardButton}>Lisätietoja</button> */}
                        </div>
                ))}
            </div>
        </div>
    );
}