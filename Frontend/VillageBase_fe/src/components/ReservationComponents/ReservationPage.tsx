import styles from "./ReservationPage.module.css";
import { ReservationInterface } from "./ReservationInterface";
import { useEffect, useState } from "react";
import { ReservationFetch } from "./ReservationFetch";
import { SortItems } from "../SortingComponents/SorterFunc";
import { useSortType } from "../SortingComponents/SortTypeContext";
import { useSearch } from "../MainComponents/SearchContext";

// Function for ReservationPage
export default function ReservationPage() {
    // useState hook for mapping the reservations to ReservationInterface objects
    const [reservations, setReservations] = useState<ReservationInterface[]>(
        []
    );
    const [filteredData, setFilteredData] = useState<ReservationInterface[]>(
        []
    );

    const { sortType } = useSortType();
    const { searchQuery } = useSearch();

    useEffect(() => {
        ReservationFetch().then((fetchedData) => {
            // Tarkistetaan, että saatu data on oikeassa muodossa ja oletetaan, että se on ReservationInterface[] tyyppiä.
            if (Array.isArray(fetchedData)) {
                // Tässä luodaan initialData muuttuja
                const initialData = fetchedData.map((item) => ({
                    ...item, // Oletetaan, että item on jo ReservationInterface-tyyppinen objekti.
                    showDetails: false, // Lisätään showDetails-ominaisuus
                }));
                // Nyt initialData on määritelty ja sitä voidaan käyttää SortItems-funktion kanssa
                setReservations(SortItems(sortType, initialData, "varaus_id"));
            } else {
                // Jos saatu data ei ole oikeassa muodossa, voit käsitellä virheen tai asettaa tyhjän taulukon
                console.error("Data fetched is not an array:", fetchedData);
                setReservations([]);
            }
        });
    }, [sortType]);

    // This function handles showing or hiding additional information
    const toggleDetails = (varaus_id: number) => {
        setReservations(
            reservations.map((reservation) =>
                reservation.varaus_id === varaus_id
                    ? { ...reservation, showDetails: !reservation.showDetails }
                    : reservation
            )
        );
    };

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
                <ul className={styles.list}>
                    {filteredData.map((reservation) => (
                        <li
                            className={styles.listItem}
                            key={reservation.varaus_id}
                        >
                            <div className={styles.itemData}>
                                {/* Varaus ID */}
                                <div className={styles.itemTitle}>
                                    <p>
                                        <strong>Varaus ID:</strong>
                                    </p>
                                </div>
                                <div className={styles.reservationId}>
                                    {reservation.varaus_id}
                                </div>

                                {/* Asiakas ID */}
                                <div className={styles.itemTitle}>
                                    <p>
                                        <strong>Asiakas:</strong>
                                    </p>
                                </div>
                                <div className={styles.reservationName}>
                                    {reservation.asiakas_id}
                                </div>

                                {/* Mökki ID */}
                                <div className={styles.itemTitle}>
                                    <p>
                                        <strong>Mökki:</strong>
                                    </p>
                                </div>
                                <div className={styles.reservationCottage}>
                                    {reservation.mokki_mokki_id}
                                </div>

                                {/* Ajankohta */}
                                <div className={styles.itemTitle}>
                                    <p>
                                        <strong>Ajankohta:</strong>
                                    </p>
                                </div>
                                <div className={styles.reservationTime}>
                                    {reservation.varattu_alkupvm} -{" "}
                                    {reservation.varattu_loppupvm}
                                </div>

                                {/* Lisätiedot-painike, joka avaa lisätieto-osion */}
                                <div
                                    className={styles.moreBtn}
                                    onClick={() =>
                                        toggleDetails(reservation.varaus_id)
                                    }
                                >
                                    Lisätiedot
                                </div>

                                {/* Lisätietojen osio, joka avautuu, kun moreBtn-painiketta klikataan */}
                                {reservation.showDetails && (
                                    <div className={styles.itemTitle}>
                                        <p>
                                            <strong>Lisätiedot:</strong>
                                        </p>
                                    </div>
                                )}

                                {/* Valitse-painike */}
                                <div className={styles.listBtn}>Valitse</div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
