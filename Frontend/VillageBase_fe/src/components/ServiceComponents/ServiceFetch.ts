import { ServiceInterface } from "./ServiceInterface";

export async function ServiceFetch() {
    // Fetches all services from the backend
    const response = await fetch("http://localhost:8080/api/services/all");
    const service = await response.json();
    return service; // Returns the services as a JSON object
}

export async function ServiceMAXID() {
    const response = await fetch("http://localhost:8080/api/services/maxid");
    const serviceMaxId = await response.json();
    return serviceMaxId;
}

export async function ServiceAdd(newService: ServiceInterface) {
    const response = await fetch("http://localhost:8080/api/services/add", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newService),
    });
    if (response.ok) {
        alert("Palvelu lisätty onnistuneesti");
    }
}

export async function ServiceDelete(id: number) {
    const response = await fetch(
        `http://localhost:8080/api/services/delete?id=${id}`,
    );
    if (response.ok) {
        alert("Palvelu poistettu onnistuneesti");
    } else {
        alert("Palvelun poisto epäonnistui");
    }
}

export async function GetServiceByRegionId(id: number) {
    const response = await fetch(
        `http://localhost:8080/api/services/getbyregionid?id=${id}`,
    );
    const services = await response.json();
    if (response.ok) {
        return services;
    } else {
        alert("Virhe palveluiden haussa");
    }
}
