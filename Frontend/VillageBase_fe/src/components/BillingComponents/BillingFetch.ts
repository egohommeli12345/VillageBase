export async function BillingFetch() {
    // Fetches all billings from the backend
    const response = await fetch("http://localhost:8080/api/billings/all");
    const billing = await response.json();
    return billing; // Returns the billings as a JSON object
}