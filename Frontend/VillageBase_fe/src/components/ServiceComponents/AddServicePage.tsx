import React, { useEffect, useState } from "react";
import styles from "./AddServicePage.module.css";
import { ServiceInterface } from "./ServiceInterface";
import { ServiceMAXID } from "./ServiceFetch";
import { useToolState } from "../MainComponents/ToolStateContext";
import { ServiceAdd } from "./ServiceFetch";
import { RegionInterface } from "../RegionComponents/RegionInterface.ts";
import { RegionFetch } from "../RegionComponents/RegionFetch.ts";

const AddServicePage = () => {
    const [maxId, setMaxId] = useState("");
    const [serviceName, setServiceName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [regionId, setRegionId] = useState("");
    const [regions, setRegions] = useState<RegionInterface[]>([]);
    const [type, setType] = useState("");
    const [vat, setVat] = useState("");
    // Lisätään tarvittaessa lisää

    const { addBtn, setAddBtn } = useToolState();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        const newService: ServiceInterface = {
            palvelu_id: Number(maxId ? maxId : 0),
            alue_id: Number(regionId ? regionId : 0),
            nimi: serviceName,
            tyyppi: Number(type ? type : 0),
            kuvaus: description,
            hinta: Number(price ? price : 0),
            alv: Number(vat ? vat : 0),
        };

        await ServiceAdd(newService).then((data) => {
            console.log(data);
            setAddBtn(!addBtn);
            setServiceName("");
            setDescription("");
            setPrice("");
            setRegionId("");
            setType("");
            setVat("");
        });
        window.location.reload();
    };

    useEffect(() => {
        ServiceMAXID().then((data) => {
            setMaxId(data + 1);
        });
        RegionFetch(setRegions).then((fetchedRegions) => {
            setRegions(fetchedRegions);
        });
    }, [addBtn]);

    return (
        <div className={styles.formTemplate}>
            <h1>Lisää uusi palvelu</h1>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.inputContainer}>
                    <label htmlFor="serviceMaxId">Palvelun ID:</label>
                    <input type="text" disabled value={maxId} />
                </div>
                <div className={styles.inputContainer}>
                    <label htmlFor="regionId">Alueen ID:</label>
                    <select
                        defaultValue={"default"}
                        onChange={(e) => setRegionId(e.target.value)}
                    >
                        <option value={"default"}>Valitse alue</option>
                        {regions.map((region) => (
                            <option value={region.alue_id}>
                                {region.alue_id}, {region.nimi}
                            </option>
                        ))}
                    </select>
                </div>
                <div className={styles.inputContainer}>
                    <label htmlFor="serviceName">Palvelun tiedot:</label>
                    <input
                        type="text"
                        value={serviceName}
                        onChange={(e) => setServiceName(e.target.value)}
                    />
                </div>
                <div className={styles.inputContainer}>
                    <label htmlFor="price">Hinta:</label>
                    <input
                        type="text"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
                <div className={styles.inputContainer}>
                    <label htmlFor="description">Kuvaus:</label>
                    <input
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div className={styles.inputContainer}>
                    <label htmlFor="type">Tyyppi:</label>
                    <input
                        type="text"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                    />
                </div>
                <div className={styles.inputContainer}>
                    <label htmlFor="vat">ALV %:</label>
                    <input
                        type="text"
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
