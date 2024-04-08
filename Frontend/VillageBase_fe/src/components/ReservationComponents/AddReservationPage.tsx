import React, { useEffect, useState } from "react";
import styles from "./AddReservationPage.module.css";
import {
    GetAvailableCottages,
    GetAvailableServices,
} from "./ReservationFetch.ts";
import { CottageInterface } from "../CottageComponents/CottageInterface.ts";

const AddReservationPage = () => {
    // Reservation
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [cottage, setCottage] = useState("default");
    const [customer, setCustomer] = useState("");
    const [services, setServices] = useState("");
    // Customer
    const [zipCode, setZipCode] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    const [cottages, setCottages] = useState<CottageInterface[]>([]);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log("handleSubmit called");
        // Lähetä tiedot backendiin tässä
    };

    const avaibleCottages = () => {
        GetAvailableCottages(startDate, endDate).then((data) => {
            setCottages(data);
        });
        setCottage("default");
    };

    /*const availableServices = () => {
        GetAvailableServices(cottage).then((data) => {
            console.log(data);
        });
    };*/

    // For development purposes, logs the selected cottage
    useEffect(() => {
        console.log(cottage);
    }, [cottage]);

    return (
        <div className={styles.formTemplate}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.inputs}>
                    <h2>Mökki</h2>
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
                    <button type={"button"} onClick={avaibleCottages}>
                        Hae vapaat mökit
                    </button>
                    <div className={styles.inputContainer}>
                        <label htmlFor="cottages">Mökki:</label>
                        <select
                            name="cottages"
                            id="cottages"
                            value={cottage}
                            onChange={(e) => setCottage(e.target.value)}
                        >
                            <option value="default">Valitse mökki</option>
                            {cottages.map((cottage) => (
                                <option
                                    key={cottage.mokki_id}
                                    value={cottage.mokki_id}
                                >
                                    {cottage.mokkinimi}, ID: {cottage.mokki_id}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className={styles.inputs}>
                    <h2>Palvelut</h2>
                    <div className={styles.checkBoxContainer}>
                        <div className={styles.checkbox}>
                            <input type="checkbox" />
                            <label>Siivous</label>
                        </div>
                        <div className={styles.checkbox}>
                            <input type="checkbox" />
                            <label>Porosafari</label>
                        </div>
                        <div className={styles.checkbox}>
                            <input type="checkbox" />
                            <label>Keilaus</label>
                        </div>
                        <div className={styles.checkbox}>
                            <input type="checkbox" />
                            <label>Olutmaistelu</label>
                        </div>
                    </div>
                </div>
                <div className={styles.inputs}>
                    <h2>Asiakas</h2>
                    {/*<div className={styles.inputContainer}>
                        <input type="text" disabled value={maxId} />
                    </div>*/}
                    <div className={styles.inputContainer}>
                        <label>Valitse asiakas:</label>
                        {/* Haetaan asiakkaat tietokannasta ja listataan ne tähän */}
                        <select name="cars" id="cars">
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>
                    </div>
                    <div className={styles.inputContainer}>
                        <label>Asiakkaan etunimi:</label>
                        <input
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
                    <div className={styles.inputContainer}>
                        <label>Asiakkaan sukunimi:</label>
                        <input
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                    <div className={styles.inputContainer}>
                        <label>Osoite:</label>
                        <input
                            type="text"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>
                    <div className={styles.inputContainer}>
                        <label>Postinumero:</label>
                        <input
                            type="text"
                            value={zipCode}
                            onChange={(e) => setZipCode(e.target.value)}
                        />
                    </div>
                    <div className={styles.inputContainer}>
                        <label>Puhelin:</label>
                        <input
                            type="text"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <div className={styles.inputContainer}>
                        <label>Sähköposti:</label>
                        <input
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    {/* Tarvittaessa lisää kenttiä */}
                </div>
                <button type="submit">Lisää varaus</button>
            </form>
        </div>
    );
};

export default AddReservationPage;
