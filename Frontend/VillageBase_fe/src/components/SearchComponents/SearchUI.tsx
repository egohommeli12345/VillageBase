import React, { useState } from "react";
import styles from "./SearchUI.module.css";
import { useSearch } from "./SearchContext";

export default function SearchUI() {
    const { SearchShowState } = useSearch();

    interface Address {
        street: string;
        city: string;
        postalCode: string;
    }
    const data = [
        {
            street: "123 Main St",
            city: "Cityville",
            postalCode: "12345",
        },
        {
            street: "456 Elm St",
            city: "Townsville",
            postalCode: "54321",
        },
        {
            street: "789 Oak St",
            city: "Villageton",
            postalCode: "98765",
        },
        {
            street: "1011 Pine St",
            city: "Hamletville",
            postalCode: "24680",
        },
        {
            street: "1213 Maple St",
            city: "Boroughburg",
            postalCode: "13579",
        },
        {
            street: "1415 Cedar St",
            city: "Villageburg",
            postalCode: "86420",
        },
        {
            street: "1617 Birch St",
            city: "Townburg",
            postalCode: "97531",
        },
        {
            street: "1819 Walnut St",
            city: "Citytown",
            postalCode: "50678",
        },
        {
            street: "2021 Oak St",
            city: "Villagetown",
            postalCode: "90762",
        },
        {
            street: "2223 Pine St",
            city: "Countyburg",
            postalCode: "38475",
        },
    ] as Address[];

    // Main search functionality
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        // Search query
        const search = e.target.value;

        // The data from where to search
        const address = document.querySelectorAll(`.${styles.address}`);

        address.forEach((address) => {
            if (
                address.textContent
                    ?.toLowerCase()
                    .includes(search.toLowerCase())
            ) {
                address.classList.remove(styles.hide);
            } else {
                address.classList.add(styles.hide);
            }
        });
    };

    return (
        <div>
            <div className={styles.searchUI}>
                <input
                    className={styles.searchQueryInput}
                    placeholder="Hae"
                    onChange={(e) => {
                        handleSearch(e);
                    }}
                ></input>
            </div>
        </div>
    );
}
