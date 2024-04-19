import { CottageInterface } from "./CottageInterface";

export async function CottageFetch() {
    // Fetches all cottages from the backend
    const response = await fetch("http://localhost:8080/api/cottages/all");
    const cottage = await response.json();
    return cottage; // Returns the cottages as a JSON object
}

export async function CottageMAXID() {
    // Fetches the highest cottage ID from the backend
    const response = await fetch("http://localhost:8080/api/cottages/maxid");
    const cottage = await response.json();
    return cottage; // Returns the highest cottage ID as a JSON object
}

export async function AddCottage(cottage: CottageInterface) {
    // Adds a new cottage to the backend
    const response = await fetch("http://localhost:8080/api/cottages/add", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(cottage),
    });
    if (response.ok) {
        alert("Mökki lisätty onnistuneesti");
    }
}

export async function CottageDelete(id: number) {
    const response = await fetch(
        `http://localhost:8080/api/cottages/delete?id=${id}`,
    );
    if (response.ok) {
        alert("Mökki poistettu onnistuneesti");
    } else {
        alert("Mökin poisto epäonnistui");
    }
}
