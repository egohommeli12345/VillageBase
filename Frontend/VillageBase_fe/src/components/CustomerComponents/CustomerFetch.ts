import { CustomerInterface } from "./CustomerInterface.ts";

export async function CustomerFetch() {
    // Fetches all regions from the backend
    const response = await fetch("http://localhost:8080/api/customers/all");
    const customer = await response.json();
    return customer; // Returns the regions as a JSON object
}

export async function CustomerMAXID() {
    // Fetches the highest cottage ID from the backend
    const response = await fetch("http://localhost:8080/api/customers/maxid");
    const customer = await response.json();
    return customer; // Returns the highest cottage ID as a JSON object
}

export async function AddCustomer(customer: CustomerInterface) {
    // Adds a new cottage to the backend
    const response = await fetch("http://localhost:8080/api/customers/add", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(customer),
    });
    if (response.ok) {
        alert("Asiakas lisätty");
    } else {
        alert("Virhe asiakasta lisättäessä");
    }
}

export async function CustomerDelete(id: number) {
    const response = await fetch(
        `http://localhost:8080/api/customers/delete?id=${id}`,
    );
    if (response.ok) {
        alert("Asiakas poistettu");
    }
}
