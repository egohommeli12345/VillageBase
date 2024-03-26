import { useEffect, useState } from "react";
import styles from "./BillingPage.module.css";
import { BillingFetch } from "./BillingFetch";
import { BillingInterface } from "./BillingInterface";
import { useSortType } from "../SortingComponents/SortTypeContext";
import { SortItems } from "../SortingComponents/SorterFunc";
import { useSearch } from "../MainComponents/SearchContext";
import { useToolState } from "../MainComponents/ToolStateContext";

// Function for BillingPage
export default function BillingPage() {
    // useContext hook for getting the sortType from the SortTypeContext
    const { sortType } = useSortType();
    const { searchQuery } = useSearch();

    // useState hook for mapping the billings to BillingInterface objects
    const [billings, setBillings] = useState<BillingInterface[]>([]);
    const [filteredData, setFilteredData] = useState<BillingInterface[]>([]);

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

    // Search function for filtering the regions
    useEffect(() => {
        setFilteredData(
            billings.filter((item) =>
                Object.values(item).some((value) =>
                    String(value)
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase())
                )
            )
        );
    }, [searchQuery, billings]);

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
        setDeleteBtn(false);
    };

    return (
        <div className={styles.billingBG}>
            <div className={addBtn ? styles.addPageBg : styles.hidden}>
                <div className={styles.addPage}>
                    <img
                        className={styles.closeAddPage}
                        src="/closeX.svg"
                        onClick={handleCloseBtn}
                    />
                    <div className={styles.popUpContent}>
                        {/* <AddServicePage /> */}
                    </div>
                </div>
            </div>
            <div className={styles.billingCardsContainer}>
                {filteredData.map((billing) => (
                    <div
                        className={styles.card}
                        key={billing.lasku_id}
                        onClick={() => makeActive(billing.lasku_id)}
                    >
                        <div
                            className={
                                activeContainerId === billing.lasku_id
                                    ? styles.cardHeaderActive
                                    : styles.cardHeader
                            }
                        >
                            Lasku ID: {billing.lasku_id} | Varaus ID:{" "}
                            {billing.varaus_id}
                        </div>

                        <div className={styles.cardBody}>
                            <p>
                                <strong>Laskun päivämäärä:</strong>{" "}
                                {billing.lasku_pvm}
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
                                <strong>Viitenumero:</strong>{" "}
                                {billing.viitenumero}
                            </p>
                            <p>
                                <strong>Status:</strong>{" "}
                                {billing.maksettu === 1
                                    ? "maksettu"
                                    : "maksamatta"}
                            </p>
                        </div>
                        {/* <button className={styles.cardButton}>Lisätietoja</button> */}
                    </div>
                ))}
            </div>
        </div>
    );
}
