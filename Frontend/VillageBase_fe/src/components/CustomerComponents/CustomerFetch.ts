export async function CustomerFetch() {
    // Fetches all regions from the backend
    const response = await fetch("http://localhost:8080/api/customers/all");
    const customer = await response.json();
    return customer; // Returns the regions as a JSON object
}