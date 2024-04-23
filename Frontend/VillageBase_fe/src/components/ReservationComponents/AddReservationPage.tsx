import React, { useEffect, useState } from "react";
import styles from "./AddReservationPage.module.css";
import { GetAvailableCottages, ReservationMAXID } from "./ReservationFetch.ts";
import {
    CustomerFetch,
    CustomerMAXID,
} from "../CustomerComponents/CustomerFetch.ts";
import { CottageInterface } from "../CottageComponents/CottageInterface.ts";
import { CustomerInterface } from "../CustomerComponents/CustomerInterface.ts";
import { GetServiceByRegionId } from "../ServiceComponents/ServiceFetch.ts";
import { ServiceInterface } from "../ServiceComponents/ServiceInterface.ts";
import { ReservationInterface } from "./ReservationInterface.ts";
import { DatetimeBuilder } from "./DatetimeBuilder.ts";

const AddReservationPage = () => {
    const [maxIdReservation, setMaxIdReservation] = useState<number>();
    const [maxIdCustomer, setMaxIdCustomer] = useState<number>();
    /*const [reservedDate, setReservedDate] = useState("");*/
    const [startDate, setStartDate] = useState("");
    const [startTime, setStartTime] = useState("");
    const [endDate, setEndDate] = useState("");
    const [endTime, setEndTime] = useState("");
    const [cottage, setCottage] = useState("default");
    const [customer, setCustomer] = useState<number>();
    const [zipCode, setZipCode] = useState("");
    const [city, setCity] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    const [services, setServices] = useState<ServiceInterface[]>([]);
    const [cottages, setCottages] = useState<CottageInterface[]>([]);
    const [customers, setCustomers] = useState<CustomerInterface[]>([]);
    const [customerDropdown, setCustomerDropdown] = useState<number>(-1);
    const [disabled, setDisabled] = useState(false);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        const newCurrentDateTime: Date = new Date();
        const formattedCurrentDateTime: string = DatetimeBuilder(
            newCurrentDateTime.getUTCFullYear().toString(),
            newCurrentDateTime.getUTCMonth().toString(),
            newCurrentDateTime.getUTCDate().toString(),
            newCurrentDateTime.getUTCHours().toString(),
            newCurrentDateTime.getUTCMinutes().toString(),
            newCurrentDateTime.getUTCSeconds().toString(),
        );

        console.log(formattedCurrentDateTime);

        const newReservation: ReservationInterface = {
            varaus_id: maxIdReservation ? maxIdReservation : 0,
            asiakas_id: customer ? customer : 0,
            mokki_mokki_id: parseInt(cottage),
            varattu_pvm: formattedCurrentDateTime,
            vahvistus_pvm: formattedCurrentDateTime,
            varattu_alkupvm: startDate,
            varattu_loppupvm: endDate,
        };

        console.log(newReservation);
        console.log(startTime);
    };

    const avaibleCottages = () => {
        GetAvailableCottages(startDate, endDate).then((data) => {
            setCottages(data);
        });
        setCottage("default");
    };

    const availableServices = () => {
        if (cottage != "default") {
            GetServiceByRegionId(parseInt(cottage)).then((data) => {
                setServices(data);
            });
        } else {
            alert("Valitse ensin mökki");
        }
    };

    const getCustomers = () => {
        CustomerFetch().then((data) => {
            setCustomers(data);
        });
    };

    useEffect(() => {
        ReservationMAXID().then((data) => {
            setMaxIdReservation(data);
        });
        CustomerMAXID().then((data) => {
            setMaxIdCustomer(data);
        });
    }, []);

    useEffect(() => {
        if (customerDropdown !== -1) {
            setDisabled(true);
            setCustomer(customerDropdown);
        } else if (customerDropdown === -1) {
            setDisabled(false);
            setCustomer(maxIdCustomer);
        }
    }, [customerDropdown, customer, maxIdCustomer]);

    return (
        <div className={styles.formTemplate}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.inputs}>
                    <h2>Mökki</h2>
                    <p>
                        *Varauksen vahvistuspäiväksi tulee päivä, jolloin varaus
                        luodaan
                    </p>
                    <div className={styles.inputContainer}>
                        <label htmlFor="maxId">Varauksen ID:</label>
                        <input
                            id="maxId"
                            type="text"
                            value={maxIdReservation}
                            disabled={true}
                        />
                    </div>
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
                    <div className={styles.dateContainer}>
                        <label htmlFor="startTime">
                            Varauksen alkukellonaika: (valitse aika
                            nuolinäppäimillä)
                        </label>
                        <input
                            id="startTime"
                            type="time"
                            value={startTime}
                            onChange={(e) => setStartTime(e.target.value)}
                        />
                    </div>
                    <div className={styles.dateContainer}>
                        <label htmlFor="endTime">
                            Varauksen loppukellonaika: (valitse aika
                            nuolinäppäimillä)
                        </label>
                        <input
                            id="endTime"
                            type="time"
                            value={endTime}
                            onChange={(e) => setEndTime(e.target.value)}
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
                        <button onClick={availableServices} type={"button"}>
                            Hae palvelut
                        </button>
                        {services?.map((service) => (
                            <div className={styles.checkbox}>
                                <input type={"checkbox"} />
                                <label>{service.nimi}</label>
                            </div>
                        ))}
                        {services.length < 1 ? (
                            <p>Palveluita ei saatavilla</p>
                        ) : null}
                    </div>
                </div>
                <div className={styles.inputs} id={"customerForm"}>
                    <h2>Asiakas</h2>
                    <div className={styles.inputContainer}>
                        <label>Valitse olemassa oleva asiakas:</label>
                        <button type="button" onClick={getCustomers}>
                            Hae asiakkaat
                        </button>
                        {/* Haetaan asiakkaat tietokannasta ja listataan ne tähän */}
                        <select
                            name="customers"
                            id="customers"
                            onChange={(e) =>
                                setCustomerDropdown(parseInt(e.target.value))
                            }
                        >
                            <option value={-1}>Valitse asiakas</option>
                            {customers.map((customer) => (
                                <option
                                    key={customer.asiakas_id}
                                    value={customer.asiakas_id}
                                >
                                    {customer.etunimi} {customer.sukunimi}, ID:{" "}
                                    {customer.asiakas_id}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className={styles.inputContainer}>
                        <input type="text" disabled value={maxIdCustomer} />
                    </div>
                    <div className={styles.inputContainer}>
                        <label>Asiakkaan etunimi:</label>
                        <input
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            disabled={disabled}
                        />
                    </div>
                    <div className={styles.inputContainer}>
                        <label>Asiakkaan sukunimi:</label>
                        <input
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            disabled={disabled}
                        />
                    </div>
                    <div className={styles.inputContainer}>
                        <label>Osoite:</label>
                        <input
                            type="text"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            disabled={disabled}
                        />
                    </div>
                    <div className={styles.inputContainer}>
                        <label>Postinumero:</label>
                        <input
                            type="text"
                            value={zipCode}
                            onChange={(e) => setZipCode(e.target.value)}
                            disabled={disabled}
                        />
                    </div>
                    <div className={styles.inputContainer}>
                        <label>Kaupunki:</label>
                        <input
                            type="text"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            disabled={disabled}
                        />
                    </div>
                    <div className={styles.inputContainer}>
                        <label>Puhelin:</label>
                        <input
                            type="text"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            disabled={disabled}
                        />
                    </div>
                    <div className={styles.inputContainer}>
                        <label>Sähköposti:</label>
                        <input
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            disabled={disabled}
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
