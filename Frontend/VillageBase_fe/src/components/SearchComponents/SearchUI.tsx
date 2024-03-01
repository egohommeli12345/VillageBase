import styles from "./SearchUI.module.css";
import { useSearch } from "./SearchContext";

export default function SearchUI() {
    const { setSearchQuery } = useSearch();
    return (
        <div>
            <div className={styles.searchUI}>
                <input
                    className={styles.searchQueryInput}
                    placeholder="Hae"
                    onChange={(e) => {
                        setSearchQuery(e.target.value);
                    }}
                ></input>
            </div>
        </div>
    );
}
