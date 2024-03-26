import React, { useEffect, useState } from "react";
import styles from "./AddServicePage.module.css";
import { ServiceInterface } from "./ServiceInterface";
import { ServiceMAXID } from "./ServiceFetch";
import { useToolState } from "../MainComponents/ToolStateContext";
import { ServiceAdd } from "./ServiceFetch";

const AddServicePage = () => {
    const [maxId, setMaxId] = useState("");
    const [serviceName, setServiceName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [areaId, setAreaId] = useState("");
    const [type, setType] = useState("");
    const [vat, setVat] = useState("");
    // Lisätään tarvittaessa lisää

    const { addBtn, setAddBtn } = useToolState();

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        const newService: ServiceInterface = {
            palvelu_id: Number(maxId ? maxId : 0),
            alue_id: Number(areaId ? areaId : 0),
            nimi: serviceName,
            tyyppi: Number(type ? type : 0),
            kuvaus: description,
            hinta: Number(price ? price : 0),
            alv: Number(vat ? vat : 0),
        };

        ServiceAdd(newService).then((data) => {
            console.log(data);
            setAddBtn(!addBtn);
            setServiceName("");
            setDescription("");
            setPrice("");
            setAreaId("");
            setType("");
            setVat("");
        });
    };

    useEffect(() => {
        ServiceMAXID().then((data) => {
            setMaxId(data + 1);
        });
    }, [addBtn]);

    return (
        <div className={styles.formTemplate}>
            <div>Lisää uusi palvelu</div>
            <form onSubmit={handleSubmit}>
                <div className={styles.inputContainer}>
                    <input
                        className={styles.serviceMaxId}
                        type="text"
                        disabled={true}
                        value={maxId}
                    />
                </div>
                <div className={styles.inputContainer}>
                    <input
                        type="text"
                        placeholder="Alueen ID:"
                        value={areaId}
                        onChange={(e) => setAreaId(e.target.value)}
                    />
                </div>
                <div className={styles.inputContainer}>
                    <input
                        type="text"
                        placeholder="Palvelun nimi:"
                        value={serviceName}
                        onChange={(e) => setServiceName(e.target.value)}
                    />
                </div>
                <div className={styles.inputContainer}>
                    <input
                        type="text"
                        placeholder="Hinta:"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
                <div className={styles.inputContainer}>
                    <input
                        type="text"
                        placeholder="Kuvaus:"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div className={styles.inputContainer}>
                    <input
                        type="text"
                        placeholder="Palvelun tyyppi:"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                    />
                </div>
                <div className={styles.inputContainer}>
                    <input
                        type="text"
                        placeholder="Alv (%):"
                        value={vat}
                        onChange={(e) => setVat(e.target.value)}
                    />
                </div>
                <button className={styles.addBtn} type="submit">
                    Lisää palvelu
                </button>
            </form>
        </div>
    );
};

export default AddServicePage;
