export async function ReservationFetch() {
    // Fetches all reservations from the backend
    const response = await fetch("http://localhost:8080/api/reservations/all");
    const reservation = await response.json();
    console.log(reservation);
    return reservation; // Returns the reservations as a JSON object
}

export async function DeleteReservation(id: number) {
    // Deletes a reservation from the backend
    await fetch(`http://localhost:8080/api/reservations/${id}`, {
        method: "DELETE",
    });
}
