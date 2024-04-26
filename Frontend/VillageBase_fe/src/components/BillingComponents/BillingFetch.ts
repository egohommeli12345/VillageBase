import { BillingInterface } from "./BillingInterface.ts";

export async function BillingFetch() {
    // Fetches all billings from the backend
    const response = await fetch("http://localhost:8080/api/billings/all");
    const billing = await response.json();
    return billing; // Returns the billings as a JSON object
}

export async function BillingDelete(id: number) {
    const response = await fetch(
        `http://localhost:8080/api/billings/delete?id=${id}`,
    );
    if (response.ok) {
        alert("Lasku poistettu onnistuneesti");
    } else {
        alert("Lasku poisto epäonnistui");
    }
}

export async function BillingMAXID() {
    const response = await fetch("http://localhost:8080/api/billings/maxid");
    const billing = await response.json();
    return billing;
}

export async function BillingAdd(bill: BillingInterface) {
    const response = await fetch(`http://localhost:8080/api/billings/add`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(bill),
    });
    if (response.ok) {
        alert("Lasku luotu");
    } else {
        alert("Laskun luonnissa ongelma");
    }
}

export async function GetTotalServicePriceByReservationId(id: number) {
    const response = await fetch(
        `http://localhost:8080/api/reservations/getTotalServicePriceByReservationId?id=${id}`,
    );
    if (response.ok) {
        const totalPrice = await response.json();
        return totalPrice;
    } else {
        return 0;
    }
}
