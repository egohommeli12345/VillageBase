import { RegionInterface } from "./RegionInterface";

export async function RegionFetch() {
    // Fetches all regions from the backend
    const response = await fetch("http://localhost:8080/api/regions/all");
    const region = await response.json();
    return region; // Returns the regions as a JSON object
}

export async function RegionMAXID() {
    const response = await fetch("http://localhost:8080/api/regions/maxid");
    const serviceMaxId = await response.json();
    return serviceMaxId;
}

export async function RegionAdd(newRegion: RegionInterface) {
    const response = await fetch("http://localhost:8080/api/regions/add", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newRegion),
    });
    if (response.ok) {
        alert("Palvelu lisätty onnistuneesti");
    }
}
