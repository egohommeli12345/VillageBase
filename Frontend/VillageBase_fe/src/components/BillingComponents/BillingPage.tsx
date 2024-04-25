import { useEffect, useState } from "react";
import styles from "./BillingPage.module.css";
import { BillingDelete, BillingFetch } from "./BillingFetch";
import { BillingInterface } from "./BillingInterface";
import { useSortType } from "../SortingComponents/SortTypeContext";
import { SortItems } from "../SortingComponents/SorterFunc";
import { useSearch } from "../MainComponents/SearchContext";
import { useToolState } from "../MainComponents/ToolStateContext";

// Function for BillingPage
export default function BillingPage() {
    // useContext hook for getting the sortType from the SortTypeContext
    const { sortType, setSortKeys, sortBy } = useSortType();
    const { searchQuery } = useSearch();

    // useState hook for mapping the billings to BillingInterface objects
    const [billings, setBillings] = useState<BillingInterface[]>([]);
    const [filteredData, setFilteredData] = useState<BillingInterface[]>([]);

    // State to track the active container
    const [activeContainerId, setActiveContainerId] = useState<number | null>(
        null
    );

    // Lisätty
    const handleMarkAsPaid = (lasku_id: number) => {
        const updatedBillings = billings.map((billing) => {
            if (billing.lasku_id === lasku_id) {
                return { ...billing, maksettu: 1 };
            }
            return billing;
        });
        setBillings(updatedBillings);
    };

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
            const sortedData = SortItems(sortType, data, sortBy);
            setBillings(sortedData);
            setSortKeys(Object.keys(sortedData[0]));
        });
    }, [sortType, sortBy]);

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
    };

    useEffect(() => {
        if (activeContainerId !== null) {
            BillingDelete(activeContainerId);
        }
    }, [deleteBtn]);

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
                            {billing.maksettu === 0 ? (
                                <button
                                    className={styles.paidButton}
                                    onClick={() =>
                                        handleMarkAsPaid(billing.lasku_id)
                                    }
                                >
                                    Merkitse maksetuksi
                                </button>
                            ) : null}
                        </div>
                        {/* <button className={styles.cardButton}>Lisätietoja</button> */}
                    </div>
                ))}
            </div>
        </div>
    );
}
