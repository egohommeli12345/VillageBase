export async function ReservationFetch() {
    // Fetches all reservations from the backend
    const response = await fetch("http://localhost:8080/api/reservations/all");
    const reservation = await response.json();
    return reservation; // Returns the reservations as a JSON object
}

export async function DeleteReservation(id: number) {
    // Deletes a reservation from the backend
    await fetch(`http://localhost:8080/api/reservations/${id}`, {
        method: "DELETE",
    });
}

export async function GetAvailableCottages(startDate: string, endDate: string) {
    // Fetches all available cottages from the backend
    const response = await fetch(
        "http://localhost:8080/api/reservations/available-cottages",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ startDate, endDate }),
        },
    );
    if (!response.ok) {
        alert("Virhe haettaessa mökkejä: " + response.statusText);
        return null;
    }
    const cottages = await response.json();
    return cottages;
}

export async function GetAvailableServices(mokki_id: number) {
    const response = await fetch(
        `http://localhost:8080/api/services/cottage?id=${mokki_id}`,
    );
    const services = await response.json();
    return services;
}
