import {
    ReservationServiceInterface,
    ReservationServiceInterface1,
} from "../ServiceComponents/ReservationServiceInterface.ts";

export async function ReservationFetch() {
    // Fetches all reservations from the backend
    const response = await fetch("http://localhost:8080/api/reservations/all");
    const reservation = await response.json();
    return reservation; // Returns the reservations as a JSON object
}

export async function ReservationMAXID() {
    const response = await fetch(
        "http://localhost:8080/api/reservations/maxid",
    );
    const MAXID: number = await response.json();
    return MAXID;
}

export async function GetAvailableCottages(startDate: string, endDate: string) {
    // Fetches all available cottages from the backend
    const response = await fetch(
        "http://localhost:8080/api/reservations/available-cottages",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ startDate, endDate }),
        },
    );
    if (!response.ok) {
        alert("Virhe haettaessa mökkejä: " + response.statusText);
        return null;
    }
    const cottages = await response.json();
    return cottages;
}

export async function GetAvailableServices(mokki_id: number) {
    const response = await fetch(
        `http://localhost:8080/api/services/cottage?id=${mokki_id}`,
    );
    const services = await response.json();
    return services;
}

export async function ReservationDelete(id: number) {
    const response = await fetch(
        `http://localhost:8080/api/reservations/delete?id=${id}`,
    );
    if (response.ok) {
        alert("Varaus poistettu onnistuneesti");
    } else {
        alert("Varauksen poisto epäonnistui");
    }
}

export async function ReservationServiceAdd(
    reservationServices: ReservationServiceInterface1[],
) {
    const json: string = '["id":{"varaus_id":1,"palvelu_id":3},"lkm":2]';
    console.log(JSON.stringify(reservationServices) + "TESTI");
    const response = await fetch(
        `http://localhost:8080/api/reservations/reservationserviceadd`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(reservationServices),
        },
    );
    if (response.ok) {
        console.log("Varauksen palvelut lisätty");
    } else {
        alert("Varauksen palveluita lisättäessä virhe");
    }
}
