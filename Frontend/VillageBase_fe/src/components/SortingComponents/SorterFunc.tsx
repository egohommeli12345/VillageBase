export function SortItems(sortType: string, data: any[], sortBy: any) {
    switch (sortType) {
        case "default":
            console.log("default");
            break;
        case "ascending":
            console.log("ascending");
            data.sort((a, b) => {
                return a[sortBy] - b[sortBy];
            });
            break;
        case "descending":
            console.log("descending");
            data.sort((a, b) => {
                return b[sortBy] - a[sortBy];
            });
            break;
    }
    console.log(data);
    return data;
}
