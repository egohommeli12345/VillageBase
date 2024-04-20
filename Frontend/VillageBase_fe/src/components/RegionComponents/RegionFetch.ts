import { RegionInterface } from "./RegionInterface";

export async function RegionFetch(setRegions: React.Dispatch<React.SetStateAction<RegionInterface[]>>) {
    // Fetches all regions from the backend
    const response = await fetch("http://localhost:8080/api/regions/all");
    const region = await response.json();
    setRegions(region);
    return region; // Returns the regions as a JSON object
}

export async function RegionMAXID() {
    const response = await fetch("http://localhost:8080/api/regions/maxid");
    const serviceMaxId = await response.json();
    return serviceMaxId;
}

export async function RegionAdd(newRegion: RegionInterface, setRegions: React.Dispatch<React.SetStateAction<RegionInterface[]>>) {
    const response = await fetch("http://localhost:8080/api/regions/add", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newRegion),
    });
    if (response.ok) {
        alert("Alue lisätty onnistuneesti");
        await RegionFetch(setRegions);
    }
}

export async function RegionDelete(id: number, setRegions: React.Dispatch<React.SetStateAction<RegionInterface[]>>) {
    const response = await fetch(
        `http://localhost:8080/api/regions/delete?id=${id}`,
    );
    if (response.ok) {
        alert("Alue poistettu onnistuneesti");       
        await RegionFetch(setRegions);
    } else {
        alert("Alueen poisto epäonnistui");
    }
}
