import styles from "./CustomerPage.module.css";
import { CustomerInterface } from "./CustomerInterface";
import { useEffect, useState } from "react";
import { CustomerFetch } from "./CustomerFetch";
import { useSearch } from "../SearchComponents/SearchContext";
import { useSortType } from "../SortingComponents/SortTypeContext";
import { SortItems } from "../SortingComponents/SorterFunc";

// Function for CustomerPage
export default function CustomerPage() {
    // useState hook for mapping the customers to CustomerInterface objects
    const [customers, setCustomers] = useState<CustomerInterface[]>([]);
    const [filteredData, setFilteredData] = useState<CustomerInterface[]>([]);

    // State to track the active customer card
    const [activeCustomerId, setActiveCustomerId] = useState<number | null>(
        null
    );

    // Custom hooks for sortType and searchQuery
    const { sortType } = useSortType();
    const { searchQuery } = useSearch();

    // Function to set the active customer card
    const makeActive = (id: number) => {
        setActiveCustomerId(id);
    };

    useEffect(() => {
        CustomerFetch().then((data) => {
            setCustomers(data);
            setCustomers(SortItems(sortType, data, "asiakas_id"));
        });
    }, []);

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

    return (
        <div className={styles.customerBG}>
            <div className={styles.customerTitle}>Asiakkaat</div>
            <div className={styles.customerCardsContainer}>
                {filteredData.map((customer) => (
                    <div
                        className={`${styles.card} ${
                            activeCustomerId === customer.asiakas_id
                                ? styles.active
                                : ""
                        }`}
                        key={customer.asiakas_id}
                        onClick={() => makeActive(customer.asiakas_id)}
                    >
                        <div className={styles.cardHeader}>
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
