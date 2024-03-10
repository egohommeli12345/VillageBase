import { useEffect, useState } from "react";
import styles from "./ServicePage.module.css";
import { ServiceFetch } from "./ServiceFetch";
import { ServiceInterface } from "./ServiceInterface";
import { useSortType } from "../SortingComponents/SortTypeContext";
import { SortItems } from "../SortingComponents/SorterFunc";
import { useSearch } from "../MainComponents/SearchContext";
import { useToolState } from "../MainComponents/ToolStateContext";
import AddServicePage from "./AddServicePage";

// Function for ServicePage
export default function ServicePage() {
    const { sortType } = useSortType();
    const { searchQuery } = useSearch();
    const { addBtn, deleteBtn, editBtn, setEditBtn, setAddBtn, setDeleteBtn } =
        useToolState();
    // useState hook for mapping the services to ServiceInterface objects
    const [services, setServices] = useState<ServiceInterface[]>([]);
    const [filteredData, setFilteredData] = useState<ServiceInterface[]>([]);

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
        ServiceFetch().then((data) => {
            setServices(SortItems(sortType, data, "palvelu_id"));
        });
    }, [sortType]);

    useEffect(() => {
        setFilteredData(
            services.filter((item) =>
                Object.values(item).some((value) =>
                    String(value)
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase())
                )
            )
        );
    }, [searchQuery, services]);

    const handleCloseBtn = () => {
        setEditBtn(false);
        setAddBtn(false);
        setDeleteBtn(false);
    };

    return (
        <div className={styles.serviceBG}>
            <div className={addBtn ? styles.addServiceBg : styles.hidden}>
                <div className={styles.addService}>
                    <img
                        className={styles.closeAddService}
                        src="/closeX.svg"
                        onClick={handleCloseBtn}
                    />
                    <div className={styles.popUpContent}>
                        <AddServicePage />
                    </div>
                </div>
            </div>
            <div className={styles.serviceCardsContainer}>
                {filteredData.map((service) => (
                    <div
                        className={styles.card}
                        key={service.palvelu_id}
                        onClick={() => makeActive(service.palvelu_id)}
                    >
                        <div
                            className={
                                activeContainerId === service.palvelu_id
                                    ? styles.cardHeaderActive
                                    : styles.cardHeader
                            }
                        >
                            {service.nimi} {service.palvelu_id}
                        </div>
                        <div className={styles.cardBody}>
                            <p>
                                <strong>Hinta:</strong> {service.hinta}€
                            </p>
                            <p>
                                <strong>Kuvaus:</strong> {service.kuvaus}
                            </p>
                        </div>
                        {/* <button className={styles.cardButton}>Lisätietoja</button> */}
                    </div>
                ))}
            </div>
        </div>
    );
}
