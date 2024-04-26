import { useEffect, useState } from "react";
import styles from "./BillingPage.module.css";
import { BillingDelete, BillingFetch, MarkAsPaid } from "./BillingFetch";
import { BillingInterface } from "./BillingInterface";
import { useSortType } from "../SortingComponents/SortTypeContext";
import { SortItems } from "../SortingComponents/SorterFunc";
import { useSearch } from "../MainComponents/SearchContext";
import { useToolState } from "../MainComponents/ToolStateContext";
import AddBillingPage from "./AddBillingPage.tsx";
import { generatePdfInvoice } from "./GenerateInvoice.ts";
import { CottageInterface } from "../CottageComponents/CottageInterface.ts";
import { CustomerInterface } from "../CustomerComponents/CustomerInterface.ts";
import { ReservationInterface } from "../ReservationComponents/ReservationInterface.ts";
import {
    GetReservationById,
    GetReservationServiceListByReservationId,
} from "../ReservationComponents/ReservationFetch.ts";
import { GetCustomerById } from "../CustomerComponents/CustomerFetch.ts";
import { PostInterface } from "../PostInterface.ts";
import { GetPostByZip } from "../PostFetch.ts";
import { GetCottageByReservationId } from "../CottageComponents/CottageFetch.ts";
import { ServiceInterface } from "../ServiceComponents/ServiceInterface.ts";
import { GetServiceListByReservationId } from "../ServiceComponents/ServiceFetch.ts";
import { ReservationServiceInterface } from "../ServiceComponents/ReservationServiceInterface.ts";

// Function for BillingPage
export default function BillingPage() {
    // useContext hook for getting the sortType from the SortTypeContext
    const { sortType, setSortKeys, sortBy } = useSortType();
    const { searchQuery } = useSearch();

    // useState hook for mapping the billings to BillingInterface objects
    const [billings, setBillings] = useState<BillingInterface[]>([]);
    const [filteredData, setFilteredData] = useState<BillingInterface[]>([]);

    const [cottage, setCottage] = useState<CottageInterface>();
    const [customer, setCustomer] = useState<CustomerInterface>();
    const [reservation, setReservation] = useState<ReservationInterface>();
    const [billing, setBilling] = useState<BillingInterface>();

    // State to track the active container
    const [activeContainerId, setActiveContainerId] = useState<number | null>(
        null,
    );

    // Function to mark a billing as paid
    const handleMarkAsPaid = async (lasku_id: number) => {
        const updatedBillings = billings.map((billing) => {
            if (billing.lasku_id === lasku_id) {
                return { ...billing, maksettu: 1 };
            }
            return billing;
        });
        setBillings(updatedBillings);
        await MarkAsPaid(lasku_id);
        window.location.reload();
    };

    const handlePrintPdf = async (billing: BillingInterface) => {
        /*
    Data needed:
    - Invoice ID
    - Payment amount
    - Due date alkupvm
    - Recipient
    - Service name
    - Service price
    - Timeframe for the reservation
    - Total amount
*/
        const reservation: ReservationInterface = await GetReservationById(
            billing.varaus_id,
        );
        const customer: CustomerInterface = await GetCustomerById(
            reservation.asiakas_id,
        );
        const post: PostInterface = await GetPostByZip(customer.postinro);
        const cottage: CottageInterface = await GetCottageByReservationId(
            billing.varaus_id,
        );
        const services: ServiceInterface[] =
            await GetServiceListByReservationId(billing.varaus_id);
        const reservationServices: ReservationServiceInterface[] =
            await GetReservationServiceListByReservationId(billing.varaus_id);
        console.log(reservationServices);

        generatePdfInvoice(
            billing,
            reservation,
            customer,
            post,
            cottage,
            services,
            reservationServices,
        );
    };

    /*useEffect(() => {
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
    }, [mokki_summa, palvelu_summa]);*/

    // Function to toggle the active container
    const makeActive = (id: number) => {
        if (id === activeContainerId) {
            setActiveContainerId(null);
            return;
        }
        setActiveContainerId(id);
    };

    useEffect(() => {
        BillingFetch().then((data) => {
            const sortedData = SortItems(sortType, data, sortBy);
            setBillings(sortedData);
            setSortKeys(Object.keys(sortedData[0]));
        });
    }, [sortType, sortBy]);

    // Search function for filtering the regions
    useEffect(() => {
        setFilteredData(
            billings.filter((item) =>
                Object.values(item).some((value) =>
                    String(value)
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase()),
                ),
            ),
        );
    }, [searchQuery, billings]);

    useEffect(() => {
        setOnLandingPage(true);
    }, []);

    const {
        addBtn,
        deleteBtn,
        editBtn,
        setEditBtn,
        setAddBtn,
        setDeleteBtn,
        setOnLandingPage,
    } = useToolState();

    const handleCloseBtn = () => {
        setEditBtn(false);
        setAddBtn(false);
    };

    useEffect(() => {
        if (activeContainerId !== null && deleteBtn) {
            BillingDelete(activeContainerId);
        }
    }, [deleteBtn]);

    return (
        <div className={styles.billingBG}>
            <div className={addBtn ? styles.addPageBg : styles.hidden}>
                <div className={styles.addPage}>
                    <img
                        className={styles.closeAddPage}
                        src="/closeX.svg"
                        onClick={handleCloseBtn}
                    />
                    <div className={styles.popUpContent}>
                        <AddBillingPage></AddBillingPage>
                    </div>
                </div>
            </div>
            <div className={styles.billingCardsContainer}>
                {filteredData.map((billing) => (
                    <div
                        className={styles.card}
                        key={billing.lasku_id}
                        onClick={() => makeActive(billing.lasku_id)}
                    >
                        <div
                            className={
                                activeContainerId === billing.lasku_id
                                    ? styles.cardHeaderActive
                                    : styles.cardHeader
                            }
                        >
                            Lasku ID: {billing.lasku_id} | Varaus ID:{" "}
                            {billing.varaus_id}
                        </div>

                        <div className={styles.cardBody}>
                            <p>
                                <strong>Summa:</strong> {billing.summa}€
                            </p>
                            <p>
                                <strong>ALV:</strong> {billing.alv}%
                            </p>
                            <p>
                                <strong>Status:</strong>{" "}
                                {billing.maksettu === 1
                                    ? "maksettu"
                                    : "maksamatta"}
                            </p>
                            <div className={styles.buttonContainer}>
                                {billing.maksettu === 0 ? (
                                    <button
                                        className={styles.paidButton}
                                        onClick={() =>
                                            handleMarkAsPaid(billing.lasku_id)
                                        }
                                    >
                                        Merkitse maksetuksi
                                    </button>
                                ) : null}
                                <button
                                    className={styles.pdfButton}
                                    onClick={() => handlePrintPdf(billing)}
                                >
                                    Tulosta PDF lasku
                                </button>
                            </div>
                        </div>
                        {/* <button className={styles.cardButton}>Lisätietoja</button> */}
                    </div>
                ))}
            </div>
        </div>
    );
}
