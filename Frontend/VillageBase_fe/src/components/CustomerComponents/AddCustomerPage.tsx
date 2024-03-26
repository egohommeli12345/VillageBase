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
        <div className={styles.customerBR}>
            <div className={styles.title}>Lisää uusi asiakas</div>
            <form className={styles.form} onSubmit={handleSubmit}>
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
                    <input
                        type="text"
                        placeholder="Asiakkaan nimi:"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                    />
                </div>

                <div className={styles.inputContainer}>
                    <input
                        id="address"
                        placeholder="Osoite:"
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </div>
                <div className={styles.inputContainer}>
                    <input
                        id="phone"
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
                <div className={styles.inputContainer}>
                    <input
                        id="email"
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className={styles.inputContainer}>
                    <input
                        id="birthDate"
                        type="text"
                        value={birthDate}
                        onChange={(e) => setBirthDate(e.target.value)}
                    />
                </div>
                {/* Tarvittaessa lisää kenttiä */}
                <button type="submit">Lisää asiakas</button>
            </form>
        </div>
    );
};

export default AddCustomerPage;
