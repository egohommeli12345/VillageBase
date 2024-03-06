import styles from "./ReservationPage.module.css";
import { ReservationInterface } from "./ReservationInterface";
import { useEffect, useState } from "react";
import { ReservationFetch } from "./ReservationFetch";
import { SortItems } from "../SortingComponents/SorterFunc";
import { useSortType } from "../SortingComponents/SortTypeContext";
import { useSearch } from "../MainComponents/SearchContext";

// Function for ReservationPage
export default function ReservationPage() {
    // Custom hooks for sortType and searchQuery
    const { sortType } = useSortType();
    const { searchQuery } = useSearch();

    // useState hook for searching the reservations
    const [filteredData, setFilteredData] = useState<ReservationInterface[]>(
        []
    );

    // useState hook for mapping the reservations to ReservationInterface objects
    const [reservations, setReservations] = useState<ReservationInterface[]>(
        []
    );

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

    // Fetching the reservation data and sorting it by the sortType
    useEffect(() => {
        ReservationFetch().then((data) => {
            setReservations(SortItems(sortType, data, "varaus_id"));
        });
    }, [sortType]);

    // Search function for filtering the reservations
    useEffect(() => {
        setFilteredData(
            reservations.filter((item) =>
                Object.values(item).some((value) =>
                    String(value)
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase())
                )
            )
        );
    }, [searchQuery, reservations]);

    return (
        <div className={styles.reservationBG}>
            <div className={styles.reservationTitle}>Varaukset</div>
            <div className={styles.reservationList}>
                <div className={styles.reservationCardsContainer}>
                    {filteredData.map((reservation) => (
                        <div
                            className={`${styles.card} ${
                                activeContainerId === reservation.varaus_id
                                    ? styles.active
                                    : ""
                            }`}
                            key={reservation.varaus_id}
                            onClick={() => makeActive(reservation.varaus_id)}
                        >
                            <div className={styles.cardHeader}>
                                Varaus {reservation.varaus_id}
                            </div>
                            <div className={styles.cardBody}>
                                <p>
                                    <strong>Asiakas ID:</strong>{" "}
                                    {reservation.asiakas_id}
                                </p>
                                <p>
                                    <strong>Mökki ID:</strong>{" "}
                                    {reservation.mokki_mokki_id} 
                                </p>
                                <p>
                                    <strong>Varauspäivä:</strong>{" "}
                                    {reservation.varattu_pvm}
                                </p>
                                <p>
                                    <strong>Vahvistuspäivä:</strong>{" "}
                                    {reservation.vahvistus_pvm}
                                </p>
                                <p>
                                    <strong>Ajankohta:</strong>{" "}
                                    {reservation.varattu_alkupvm} -{" "}
                                    {reservation.varattu_loppupvm}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
