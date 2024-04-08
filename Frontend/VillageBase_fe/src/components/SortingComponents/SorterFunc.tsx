export function SortItems(sortType: string, data: any[], sortBy: string) {
    switch (sortType) {
        case "default":
            break;
        case "ascending":
            if (sortBy == "") break;
            data.sort((a, b) => {
                const valA = +a[sortBy];
                const valB = +b[sortBy];
                if (!isNaN(valA) && !isNaN(valB)) {
                    // Both values are effectively numbers, sort numerically.
                    return valA - valB;
                } else {
                    // At least one value isn't a valid number, sort as strings.
                    return a[sortBy].localeCompare(b[sortBy]);
                }
            });
            break;
        case "descending":
            if (sortBy == "") break;
            data.sort((a, b) => {
                const valA = +a[sortBy];
                const valB = +b[sortBy];
                if (!isNaN(valA) && !isNaN(valB)) {
                    // Both values are effectively numbers, sort numerically.
                    return valB - valA;
                } else {
                    // At least one value isn't a valid number, sort as strings.
                    return b[sortBy].localeCompare(a[sortBy]);
                }
            });
            break;
    }
    return data;
}
