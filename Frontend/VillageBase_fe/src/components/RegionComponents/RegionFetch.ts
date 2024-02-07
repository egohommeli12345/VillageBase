
async function RegionFetch() {
    // Fetches all regions from the backend
    const response = await fetch("http://localhost:8080/api/region/all");
    const region = await response.json();
    console.log(region);
}