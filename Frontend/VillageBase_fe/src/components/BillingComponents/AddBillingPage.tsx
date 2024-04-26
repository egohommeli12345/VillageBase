import styles from "./AddBillingPage.module.css";
import { FormEvent, useEffect, useState } from "react";
import {
    GetReservationById,
    ReservationFetch,
} from "../ReservationComponents/ReservationFetch.ts";
import { ReservationInterface } from "../ReservationComponents/ReservationInterface.ts";
import { BillingInterface } from "./BillingInterface.ts";
import {
    BillingAdd,
    BillingMAXID,
    GetTotalServicePriceByReservationId,
} from "./BillingFetch.ts";
import { DateParser } from "../ReservationComponents/DatetimeBuilder.ts";
import { GetCottageByCottageId } from "../CottageComponents/CottageFetch.ts";
import { CottageInterface } from "../CottageComponents/CottageInterface.ts";

const AddBillingPage = () => {
    const [reservations, setReservations] = useState<ReservationInterface[]>(
        [],
    );
    const [reservation, setReservation] = useState<ReservationInterface>();
    const [cottage, setCottage] = useState<CottageInterface>();
    const [MAXID_lasku, setMAXID_lasku] = useState("");
    const [alv, setAlv] = useState<number>(0);
    const [summa, setSumma] = useState<number>();
    const [varaus_id, setVaraus_id] = useState<number>();

    const [mokki_summa, setMokki_summa] = useState<number>();
    const [palvelu_summa, setPalvelu_summa] = useState<number>();

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();

        console.log("summa ", summa);
        console.log("mokkisumma ", mokki_summa);
        console.log("palvelusumma ", palvelu_summa);

        const bill: BillingInterface = {
            lasku_id: Number(MAXID_lasku ? MAXID_lasku : 0),
            varaus_id: varaus_id ? varaus_id : 0,
            summa: summa ? summa : 0,
            alv: alv ? alv : 0,
            maksettu: 0,
        };
        console.log(bill);
        console.log(JSON.stringify(bill));

        await BillingAdd(bill);
        window.location.reload();
    };

    useEffect(() => {
        ReservationFetch().then((data) => {
            setReservations(data);
        });
        BillingMAXID().then((data) => {
            setMAXID_lasku(data + 1);
        });
    }, []);

    useEffect(() => {
        if (varaus_id) {
            // Do the fetch only if varaus_id is defined
            GetReservationById(varaus_id).then((data) => {
                setReservation(data);
            });
            GetCottageByCottageId(varaus_id).then((data) => {
                setCottage(data);
            });
            GetTotalServicePriceByReservationId(varaus_id).then((data) => {
                setPalvelu_summa(data);
            });
        }
    }, [varaus_id]);

    useEffect(() => {
        if (reservation && cottage) {
            const length: number = DateParser(
                reservation.varattu_alkupvm,
                reservation.varattu_loppupvm,
            );

            setMokki_summa(length * cottage.hinta);
        }
    }, [reservation, cottage]);

    useEffect(() => {
        if (mokki_summa && palvelu_summa) {
            setSumma(mokki_summa + palvelu_summa);
        } else {
            setSumma(mokki_summa);
        }
    }, [mokki_summa, palvelu_summa]);

    return (
        <div className={styles.formTemplate}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.inputContainer}>
                    <label htmlFor="varaus_id">Varaus ID:</label>
                    <select
                        id={"varaus_id"}
                        onChange={(e) => setVaraus_id(parseInt(e.target.value))}
                        value={varaus_id}
                    >
                        <option>Valitse varaus</option>
                        {reservations.map((reservation) => (
                            <option
                                key={reservation.varaus_id}
                                value={reservation.varaus_id}
                            >
                                ID: {reservation.varaus_id}
                            </option>
                        ))}
                    </select>
                </div>
                <div className={styles.inputContainer}>
                    <label htmlFor="varaus_id">Alv: {alv} %</label>
                    <input
                        type={"range"}
                        min={0}
                        max={30}
                        step={2}
                        onChange={(e) => setAlv(parseInt(e.target.value))}
                        value={alv}
                    ></input>
                </div>
                <div className={styles.inputContainer}></div>
                {/* Tarvittaessa lisää kenttiä */}
                <button type="submit">Luo lasku</button>
            </form>
        </div>
    );
};

export default AddBillingPage;
