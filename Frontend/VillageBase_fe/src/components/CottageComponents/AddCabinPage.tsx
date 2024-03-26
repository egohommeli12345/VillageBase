import React, { useState } from "react";
import styles from "./AddCabinPage.module.css";

const AddCabinPage = () => {
    const [cabinName, setCabinName] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    // Lisätään tarvittaessa lisää

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log(cabinName, location, description, price);
    };

    return (
        <div className={styles.formTemplate}>
            <h1> Lisää uusi mökki</h1>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.inputContainer}>
                    <label htmlFor="cabinName">Mökin nimi:</label>
                    <input
                        id="cabinName"
                        type="text"
                        value={cabinName}
                        onChange={(e) => setCabinName(e.target.value)}
                    />
                </div>
                <div className={styles.inputContainer}>
                    <label htmlFor="location">Sijainti:</label>
                    <input
                        id="location"
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                </div>
                <div className={styles.inputContainer}>
                    <label htmlFor="description">Kuvaus:</label>
                    <input
                        id="description"
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div className={styles.inputContainer}>
                    <label htmlFor="price">Hinta:</label>
                    <input
                        id="price"
                        type="text"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
                <button type="submit">Lisää mökki</button>
            </form>
        </div>
    );
};

export default AddCabinPage;
