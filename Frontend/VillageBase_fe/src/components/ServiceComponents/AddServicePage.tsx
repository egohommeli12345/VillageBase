import React, { useEffect, useState } from "react";
import styles from "./AddServicePage.module.css";
import { ServiceInterface } from "./ServiceInterface";
import { ServiceMAXID } from "./ServiceFetch";
import { useToolState } from "../MainComponents/ToolStateContext";

const AddServicePage = () => {
    const [maxId, setMaxId] = useState<number>(0);
    const [serviceName, setServiceName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    // Lisätään tarvittaessa lisää

    const { addBtn } = useToolState();

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        //  Tässä kohtaa lomakkeen tiedot ovat valmiina lähetettäväksi backendiin
        console.log(serviceName, description, price);
        // Lähetä tiedot backendiin tässä

        const newService: ServiceInterface = {
            palvelu_id: maxId,
            alue_id: 0,
            nimi: serviceName,
            tyyppi: 0,
            kuvaus: description,
            hinta: Number(price),
            alv: 0,
        };
    };

    useEffect(() => {
        ServiceMAXID().then((data) => {
            setMaxId(data + 1);
        });
    }, [addBtn]);

    return (
        <div>
            <div>Lisää uusi palvelu</div>
            <form onSubmit={handleSubmit}>
                <div className={styles.inputContainer}>
                    <label htmlFor="serviceName"></label>
                    <input
                        id="serviceMaxId"
                        className={styles.serviceMaxId}
                        type="text"
                        disabled={true}
                        value={maxId}
                    />
                </div>
                <div className={styles.inputContainer}>
                    <label htmlFor="serviceName"></label>
                    <input
                        id="serviceName"
                        type="text"
                        placeholder="Alueen ID:"
                        value={serviceName}
                        onChange={(e) => setServiceName(e.target.value)}
                    />
                </div>
                <div className={styles.inputContainer}>
                    <label htmlFor="serviceName"></label>
                    <input
                        id="serviceName"
                        type="text"
                        placeholder="Palvelun nimi:"
                        value={serviceName}
                        onChange={(e) => setServiceName(e.target.value)}
                    />
                </div>
                <div className={styles.underline}></div>
                <div className={styles.inputContainer}>
                    <label htmlFor="price"></label>
                    <input
                        id="price"
                        type="text"
                        placeholder="Hinta:"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
                <div className={styles.underline}></div>
                <div className={styles.inputContainer}>
                    <label htmlFor="description"></label>
                    <input
                        id="description"
                        type="text"
                        placeholder="Kuvaus:"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div className={styles.underline}></div>
                {/* <div className={styles.inputContainer}>
                    <label htmlFor="description">Kuvaus:</label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div> */}
                {/* Tarvittaessa lisää kenttiä */}
                <button className={styles.addBtn} type="submit">
                    Lisää palvelu
                </button>
            </form>
        </div>
    );
};

export default AddServicePage;
