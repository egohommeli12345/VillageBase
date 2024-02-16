import styles from "./ReservationPage.module.css";
import { ReservationInterface } from "./ReservationInterface";
import { useEffect, useState } from "react";
import { ReservationFetch } from "./ReservationFetch";
import { SortItems } from "../SortingComponents/SorterFunc";
import { useSortType } from "../SortingComponents/SortTypeContext";

// Function for ReservationPage
export default function ReservationPage() {
    // useState hook for mapping the reservations to ReservationInterface objects
    const [reservations, setReservations] = useState<ReservationInterface[]>([]);
    const { sortType } = useSortType();

    useEffect(() => {
        ReservationFetch().then((data) => {
            console.log(data);
            setReservations(SortItems(sortType, data, "varaus_id"));
        });
    }, [sortType]);

    return (
        <div className={styles.reservationBG}>
            <div className={styles.reservationTitle}>Varaukset</div>
            <div className={styles.reservationList}>
                <ul className={styles.list}>
                    {reservations.map((reservation) => (
                        <li className={styles.listItem} key={reservation.varaus_id}>
                            <div className={styles.itemData}>
                                <div className={styles.itemTitle}>
                                    Varaus ID:
                                </div>
                                <div className={styles.reservationId}>
                                    {reservation.varaus_id}
                                </div>

                                <div className={styles.itemTitle}>
                                    Asiakkaan nimi:
                                </div>
                                <div className={styles.reservationName}>
                                    {reservation.asiakas_id}
                                </div>
                                <div className={styles.listBtn}>Valitse</div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}