import { useEffect, useState } from "react";
import styles from "./CustomerPage.module.css";
import { CustomerFetch } from "./CustomerFetch";
import { CustomerInterface } from "./CustomerInterface";
import { useSortType } from "../SortingComponents/SortTypeContext";
import { SortItems } from "../SortingComponents/SorterFunc";
import { useSearch } from "../MainComponents/SearchContext";
import { useToolState } from "../MainComponents/ToolStateContext";
import AddCustomerPage from "./AddCustomerPage";

// Function for CustomerPage
export default function CustomerPage() {
    // Custom hooks for sortType and searchQuery
    const { sortType } = useSortType();
    const { searchQuery } = useSearch();
<<<<<<< HEAD
=======
    const {
        setOnLandingPage,
        addBtn,
        deleteBtn,
        editBtn,
        setEditBtn,
        setAddBtn,
        setDeleteBtn,
    } = useToolState();
>>>>>>> refs/remotes/origin/main

    // useState hook for searching the customers
    const [filteredData, setFilteredData] = useState<CustomerInterface[]>([]);

    // useState hook for mapping the customers to CustomerInterface objects
    const [customers, setCustomers] = useState<CustomerInterface[]>([]);

    // State to track the active customer card
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
        CustomerFetch().then((data) => {
            const sortedData = SortItems(sortType, data, "asiakas_id");
            setCustomers(sortedData);
        });
    }, [sortType]);

    // Search function for filtering the customers
    useEffect(() => {
        setFilteredData(
            customers.filter((item) =>
                Object.values(item).some((value) =>
                    String(value)
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase())
                )
            )
        );
    }, [searchQuery, customers]);

    const handleCloseBtn = () => {
        setEditBtn(false);
        setAddBtn(false);
        setDeleteBtn(false);
    };

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
        <div className={styles.customerBG}>
            <div className={addBtn ? styles.addPageBg : styles.hidden}>
                <div className={styles.addPage}>
                    <img
                        className={styles.closeAddPage}
                        src="/closeX.svg"
                        onClick={handleCloseBtn}
                    />
                    <div className={styles.popUpContent}>
<<<<<<< HEAD
                        {/* <AddServicePage /> */}
                    </div>
                </div>
            </div>
=======
                        <AddCustomerPage />
                    </div>
                </div>
            </div>

>>>>>>> refs/remotes/origin/main
            <div className={styles.customerCardsContainer}>
                {filteredData.map((customer) => (
                    <div
                        className={styles.card}
                        key={customer.asiakas_id}
                        onClick={() => makeActive(customer.asiakas_id)}
                    >
                        <div
                            className={
                                activeContainerId === customer.asiakas_id
                                    ? styles.cardHeaderActive
                                    : styles.cardHeader
                            }
                        >
                            {customer.etunimi} {customer.sukunimi}
                        </div>
                        <div className={styles.cardBody}>
                            <p>
                                <strong>Asiakas ID:</strong>{" "}
                                {customer.asiakas_id}
                            </p>
                            <p>
                                <strong>Osoite:</strong> {customer.lahiosoite},{" "}
                                {customer.postinro}
                            </p>
                            <p>
                                <strong>Email:</strong> {customer.email}
                            </p>
                            <p>
                                <strong>Puhelin:</strong> {customer.puhelinnro}
                            </p>
                            {/* You can add more customer details here if needed */}
                        </div>
                        {/* <button className={styles.cardButton}>Lisätietoja</button> */}
                    </div>
                ))}
            </div>
        </div>
    );
}
