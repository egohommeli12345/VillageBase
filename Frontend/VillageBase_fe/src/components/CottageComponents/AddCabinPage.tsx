import React, { useState } from "react";
import styles from "./AddCabinPage.module.css";

const AddCabinPage = () => {
    const [cabinName, setCabinName] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    // Lisätään tarvittaessa lisää

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        //  Tässä kohtaa lomakkeen tiedot ovat valmiina lähetettäväksi backendiin
        console.log(cabinName, location, description, price);
        // Lähetä tiedot backendiin tässä
    };

    return (
        <div className={styles.cabinBR}>
            <div>Lisää uusi mökki</div>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.contentDiv}>
                    <label htmlFor="cabinName">Mökin nimi:</label>
                    <input
                        id="cabinName"
                        type="text"
                        value={cabinName}
                        onChange={(e) => setCabinName(e.target.value)}
                    />
                </div>
                <div className={styles.contentDiv}>
                    <label htmlFor="location">Sijainti:</label>
                    <input
                        id="location"
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                </div>
                <div className={styles.contentDiv}>
                    <label htmlFor="description">Kuvaus:</label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div className={styles.contentDiv}>
                    <label htmlFor="price">Hinta:</label>
                    <input
                        id="price"
                        type="text"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
                {/* Tarvittaessa lisää kenttiä */}
                <button type="submit">Lisää mökki</button>
            </form>
        </div>
    );
};

export default AddCabinPage;