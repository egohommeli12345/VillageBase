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
    return response;
}
