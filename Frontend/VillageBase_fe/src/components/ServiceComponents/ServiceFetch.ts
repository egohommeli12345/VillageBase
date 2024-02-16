export async function ServiceFetch() {
    // Fetches all services from the backend
    const response = await fetch("http://localhost:8080/api/services/all");
    const service = await response.json();
    return service; // Returns the services as a JSON object
}