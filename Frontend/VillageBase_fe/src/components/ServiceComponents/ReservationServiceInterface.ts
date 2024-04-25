export interface ReservationServiceInterface {
    // typed variables
    varaus_id: number;
    palvelu_id: number;
    lkm: number;
}

export interface ReservationServiceInterface1 {
    // typed variables
    id: ReservationServiceIdInterface;
    lkm: number;
}

export interface ReservationServiceIdInterface {
    varaus_id: number;
    palvelu_id: number;
}
