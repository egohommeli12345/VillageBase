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

export function DateParser(dateTimeString: string, dateTimeString2: string) {
    const [dateParts, timeParts] = dateTimeString.split(" ");
    const [year, month, day] = dateParts.split("-").map(Number);
    const [hours, minutes, seconds] = timeParts.split(":").map(Number);

    const [dateParts2, timeParts2] = dateTimeString2.split(" ");
    const [year2, month2, day2] = dateParts2.split("-").map(Number);
    const [hours2, minutes2, seconds2] = timeParts2.split(":").map(Number);
    const newDate: Date = new Date(
        year,
        month - 1,
        day,
        hours,
        minutes,
        seconds,
    );
    const newDate2: Date = new Date(
        year2,
        month2 - 1,
        day2,
        hours2,
        minutes2,
        seconds2,
    );
    return BetweenDates([newDate, newDate2]);
}

export function BetweenDates(dates: Date[]) {
    const differenceInTime = dates[1].getTime() - dates[0].getTime();
    const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));
    return differenceInDays;
}
