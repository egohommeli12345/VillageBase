import React, { useState } from "react";
import styles from "./AddCustomerPage.module.css";
//import { CustomerInterface } from "./CustomerInterface";

const AddCustomerPage = () => {
    const [maxId, setMaxId] = useState("");
    const [customerName, setCustomerName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [birthDate, setBirthDate] = useState("");
    // Tarvittaessa lisää kenttiä

    // const { addBtn, setAddBtn } = useToolState();

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        // const newCustomer: CustomerInterface = {
        //     asiakas_id: Number(maxId ? maxId : 0),
        //     nimi: customerName,
        //     osoite: address,
        //     puhelin: phone,
        //     email: email,
        //     syntymaaika: birthDate,
        // };

        // asiakas_id: number;
        // postinro: string;
        // etunimi: string;
        // sukunimi: string;
        // lahiosoite: string;
        // email: string;
        // puhelinnro: string;

        // CustomerAdd(newCustomer).then((data) => {
        //     console.log(data);
        //     setAddBtn(!addBtn);
        //     setCustomerName("");
        //     setAddress("");
        //     setPhone("");
        //     setEmail("");
        //     setBirthDate("");
        // });
    };

    // useEffect(() => {
    //     CustomerMAXID().then((data) => {
    //         setMaxId(data + 1);
    //     });
    // }, [addBtn]);

    return (
        <div className={styles.formTemplate}>
            <h1>Lisää uusi asiakas</h1>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.inputContainer}>
                    <input
                        className={styles.customerMaxId}
                        type="text"
                        disabled={true}
                        value={maxId}
                    />
                </div>
                {/* <div className={styles.inputContainer}>
                    <input
                        type="text"
                        placeholder="Asiakkaan ID"
                        value={areaId}
                        onChange={(e) => setAreaId(e.target.value)}
                    />
                </div> */}
                <div className={styles.inputContainer}>
                    <label htmlFor="customerName">Asiakkaan nimi:</label>
                    <input
                        type="text"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                    />
                </div>
                <div className={styles.inputContainer}>
                    <label htmlFor="address">Osoite:</label>
                    <input
                        id="address"
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </div>
                <div className={styles.inputContainer}>
                    <label htmlFor="phone">Puhelin:</label>
                    <input
                        id="phone"
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
                <div className={styles.inputContainer}>
                    <label htmlFor="email">Sähköposti:</label>
                    <input
                        id="email"
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className={styles.inputContainer}>
                    <label htmlFor="birthDate">Syntymäaika:</label>
                    <input
                        id="birthDate"
                        type="text"
                        value={birthDate}
                        onChange={(e) => setBirthDate(e.target.value)}
                    />
                </div>
                <button type="submit">Lisää asiakas</button>
            </form>
        </div>
    );
};

export default AddCustomerPage;
