import React, { useState } from "react";
import styles from "./AddReservationPage.module.css";

const AddReservationPage = () => {
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [cottage, setCottage] = useState("");
    const [customer, setCustomer] = useState("");
    const [services, setServices] = useState("");
    // Lisätään tarvittaessa lisää

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log(startDate, endDate, cottage, customer, services);
        // Lähetä tiedot backendiin tässä
    };

    return (
        <div className={styles.formTemplate}>
            <h1>Lisää uusi varaus</h1>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.dateContainer}>
                    <label htmlFor="startDate">Varauksen alkupäivä:</label>
                    <input
                        id="startDate"
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                    />
                </div>
                <div className={styles.dateContainer}>
                    <label htmlFor="endDate">Varauksen loppupäivä:</label>
                    <input
                        id="endDate"
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                    />
                </div>
                <div className={styles.inputContainer}>
                    <label htmlFor="cottage">Mökki:</label>
                    <input
                        id="cottage"
                        type="text"
                        value={cottage}
                        onChange={(e) => setCottage(e.target.value)}
                    />
                </div>
                <div className={styles.inputContainer}>
                    <label htmlFor="customer">Asiakas:</label>
                    <input
                        id="customer"
                        type="text"
                        value={customer}
                        onChange={(e) => setCustomer(e.target.value)}
                    />
                </div>
                <div className={styles.inputContainer}>
                    <label htmlFor="services">Palvelut:</label>
                    <input
                        id="services"
                        type="text"
                        value={services}
                        onChange={(e) => setServices(e.target.value)}
                    />
                </div>
                {/* Tarvittaessa lisää kenttiä */}
                <button type="submit">Lisää varaus</button>
            </form>
        </div>
    );
};

export default AddReservationPage;
