export async function CottageFetch() {
    // Fetches all cottages from the backend
    const response = await fetch("http://localhost:8080/api/cottages/all");
    const cottage = await response.json();
    return cottage; // Returns the cottages as a JSON object
}
