import styles from "./AddBillingPage.module.css";
import { useEffect, useState } from "react";
import { ReservationFetch } from "../ReservationComponents/ReservationFetch.ts";
import { ReservationInterface } from "../ReservationComponents/ReservationInterface.ts";

const AddBillingPage = () => {
    const [reservations, setReservations] = useState<ReservationInterface[]>(
        [],
    );

    const handleSubmit = () => {};

    useEffect(() => {
        ReservationFetch().then((data) => {
            setReservations(data);
        });
    }, []);
    return (
        <div className={styles.formTemplate}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.inputContainer}>
                    <label htmlFor="varaus_id">Varaus ID:</label>
                    <select id={"varaus_id"}>
                        <option>Valitse varaus</option>
                        {reservations.map((reservation) => (
                            <option key={reservation.varaus_id}>
                                {reservation.varaus_id}
                            </option>
                        ))}
                    </select>
                </div>
                <div className={styles.inputContainer}></div>
                {/* Tarvittaessa lisää kenttiä */}
                <button type="submit">Luo lasku</button>
            </form>
        </div>
    );
};

export default AddBillingPage;
