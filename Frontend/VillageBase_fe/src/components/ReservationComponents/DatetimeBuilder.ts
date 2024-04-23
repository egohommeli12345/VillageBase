export function DatetimeBuilder(
    year: string,
    month: string,
    day: string,
    hours: string,
    minutes: string,
    seconds?: string,
) {
    if (seconds === undefined || seconds === "") {
        seconds = "00";
    }
    if (month.length < 2) {
        month = "0" + month;
    }
    if (day.length < 2) {
        day = "0" + day;
    }
    if (hours.length < 2) {
        hours = "0" + hours;
    }
    if (minutes.length < 2) {
        minutes = "0" + minutes;
    }
    if (seconds.length < 2 && seconds != "") {
        seconds = "0" + seconds;
    } else {
        seconds = "00";
    }

    return (
        year +
        "-" +
        month +
        "-" +
        day +
        " " +
        hours +
        ":" +
        minutes +
        ":" +
        seconds
    );
}
