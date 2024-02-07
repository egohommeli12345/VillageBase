export async function RegionFetch() {
    // Fetches all regions from the backend
    const response = await fetch("http://localhost:8080/api/regions/all");
    const region = await response.json();
    return region; // Returns the regions as a JSON object
}
