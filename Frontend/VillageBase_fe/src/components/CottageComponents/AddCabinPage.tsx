import React, { useEffect, useState } from "react";
import styles from "./AddCabinPage.module.css";
import { AddCottage, CottageMAXID } from "./CottageFetch";
import { CottageInterface } from "./CottageInterface";
import { useToolState } from "../MainComponents/ToolStateContext";
import { PostInterface } from "../PostInterface.ts";
import { AddPost } from "../PostFetch.ts";
import { RegionFetch } from "../RegionComponents/RegionFetch.ts";
import { RegionInterface } from "../RegionComponents/RegionInterface.ts";

const AddCabinPage = () => {
    const [maxId, setMaxId] = useState("");
    const [regionId, setRegionId] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [city, setCity] = useState("");
    const [cottageName, setCottageName] = useState("");
    const [address, setAddress] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [maxPersons, setMaxPersons] = useState("");
    const [equipment, setEquipment] = useState("");
    const [regions, setRegions] = useState<RegionInterface[]>([]);

    const { addBtn, setAddBtn } = useToolState();

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        const newCottage: CottageInterface = {
            mokki_id: Number(maxId ? maxId : 0),
            alue_id: Number(regionId ? regionId : 0),
            postinro: zipCode,
            mokkinimi: cottageName,
            katuosoite: address,
            hinta: Number(price ? price : 0),
            kuvaus: description,
            henkilomaara: Number(maxPersons ? maxPersons : 0),
            varustelu: equipment,
        };

        const newPost: PostInterface = {
            postinro: zipCode,
            toimipaikka: city,
        };

        AddPost(newPost);

        AddCottage(newCottage).then((data) => {
            setAddBtn(!addBtn);
            setMaxId("");
            setRegionId("");
            setZipCode("");
            setCity("");
            setCottageName("");
            setAddress("");
            setPrice("");
            setDescription("");
            setMaxPersons("");
            setEquipment("");
        });
    };

    useEffect(() => {
        CottageMAXID().then((data) => {
            setMaxId(data + 1);
        });
        RegionFetch(setRegions).then((fetchedRegions) => {
            setRegions(fetchedRegions);
        });
    }, []);

    return (
        <div className={styles.formTemplate}>
            <h1> Lisää uusi mökki</h1>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.inputContainer}>
                    <label>Mökin ID:</label>
                    <input type="text" value={maxId} disabled />
                </div>
                <div className={styles.inputContainer}>
                    <label>Alue</label>
                    <select
                        defaultValue={"default"}
                        onChange={(e) => setRegionId(e.target.value)}
                    >
                        <option value={"default"}>Valitse alue</option>
                        {regions.map((region, index) => (
                            <option key={index} value={region.alue_id}>
                                {region.alue_id}, {region.nimi}
                            </option>
                        ))}
                    </select>
                </div>
                <div className={styles.inputContainer}>
                    <label>Postinumero</label>
                    <input
                        type="text"
                        value={zipCode}
                        onChange={(e) => setZipCode(e.target.value)}
                    />
                </div>
                <div className={styles.inputContainer}>
                    <label>Kaupunki</label>
                    <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                </div>
                <div className={styles.inputContainer}>
                    <label>Mökin nimi</label>
                    <input
                        type="text"
                        value={cottageName}
                        onChange={(e) => setCottageName(e.target.value)}
                    />
                </div>
                <div className={styles.inputContainer}>
                    <label>Osoite</label>
                    <input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </div>
                <div className={styles.inputContainer}>
                    <label>Hinta</label>
                    <input
                        type="text"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
                <div className={styles.inputContainer}>
                    <label>Kuvaus</label>
                    <input
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div className={styles.inputContainer}>
                    <label>Henkilömäärä</label>
                    <input
                        type="text"
                        value={maxPersons}
                        onChange={(e) => setMaxPersons(e.target.value)}
                    />
                </div>
                <div className={styles.inputContainer}>
                    <label>Varustelu</label>
                    <input
                        type="text"
                        value={equipment}
                        onChange={(e) => setEquipment(e.target.value)}
                    />
                </div>

                <button type="submit">Lisää mökki</button>
            </form>
        </div>
    );
};

export default AddCabinPage;
