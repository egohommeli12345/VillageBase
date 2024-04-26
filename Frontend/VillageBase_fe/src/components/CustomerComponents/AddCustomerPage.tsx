import React, { useEffect, useState } from "react";
import styles from "./AddCustomerPage.module.css";
import { useToolState } from "../MainComponents/ToolStateContext.tsx";
import { CustomerInterface } from "./CustomerInterface.ts";
import { AddCustomer, CustomerMAXID } from "./CustomerFetch.ts";
import { PostInterface } from "../PostInterface.ts";
import { AddPost } from "../PostFetch.ts";

const AddCustomerPage = () => {
    const [maxId, setMaxId] = useState();
    const [zipCode, setZipCode] = useState("");
    const [city, setCity] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    // Tarvittaessa lisää kenttiä

    const { addBtn, setAddBtn } = useToolState();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        const newPost: PostInterface = {
            postinro: zipCode,
            toimipaikka: city,
        };

        await AddPost(newPost);

        const newCustomer: CustomerInterface = {
            asiakas_id: Number(maxId ? maxId : 0),
            postinro: zipCode,
            etunimi: firstName,
            sukunimi: lastName,
            lahiosoite: address,
            email: email,
            puhelinnro: phone,
        };

        await AddCustomer(newCustomer).then(() => {
            setAddBtn(!addBtn);
            setFirstName("");
            setLastName("");
            setAddress("");
            setZipCode("");
            setPhone("");
            setEmail("");
        });
        window.location.reload();
    };

    useEffect(() => {
        CustomerMAXID().then((data) => {
            setMaxId(data + 1);
        });
    }, [addBtn]);

    return (
        <div className={styles.formTemplate}>
            <h1>Lisää uusi asiakas</h1>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.inputContainer}>
                    <input type="text" disabled value={maxId} />
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
                    <label>Kaupunki:</label>
                    <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
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
                <button type="submit">Lisää asiakas</button>
            </form>
        </div>
    );
};

export default AddCustomerPage;
