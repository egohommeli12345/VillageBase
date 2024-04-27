import { RegionInterface } from "./RegionInterface";

export async function RegionFetch(
    setRegions: React.Dispatch<React.SetStateAction<RegionInterface[]>>,
) {
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

export async function RegionAdd(
    newRegion: RegionInterface,
    setRegions: React.Dispatch<React.SetStateAction<RegionInterface[]>>,
) {
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

export async function RegionDelete(
    id: number,
    setRegions: React.Dispatch<React.SetStateAction<RegionInterface[]>>,
) {
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

export async function GetRegionById(id: number) {
    const response = await fetch(
        `http://localhost:8080/api/regions/getregionbyid?id=${id}`,
    );
    if (response.ok) {
        alert("Alueen haku onnistui");
    } else {
        alert("Alueen haussa virhe");
    }
    const region = await response.json();
    return region;
}

export async function RegionEdit(region: RegionInterface) {
    const response = await fetch("http://localhost:8080/api/regions/edit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(region),
    });
    if (response.ok) {
        alert("Aluetta muokattu");
    } else {
        alert("Alueen muokkaamisessa virhe");
    }
}
