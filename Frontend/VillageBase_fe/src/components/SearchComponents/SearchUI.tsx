import styles from "./SearchUI.module.css";
import { useSearch } from "./SearchContext";
export default function SearchUI() {
    const { SearchShowState, setSearchQuery } = useSearch();
    return (
        <div>
            <div
                className={
                    SearchShowState ? styles.searchUI : styles.searchUIHidden
                }
            >
                <div className={styles.inputContainer}>
                    <input
                        className={styles.searchQueryInput}
                        placeholder="Hae..."
                        onChange={(e) => {
                            setSearchQuery(e.target.value);
                        }}
                    ></input>
                </div>
            </div>
        </div>
    );
}
