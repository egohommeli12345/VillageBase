import styles from "./ToolBar.module.css";

export default function ToolBar() {
    return (
        <div className={styles.toolBarBG}>
            <div className={styles.toolBar}>
                <div className={styles.tool} onClick={handleClick}>
                    Lisää
                </div>
                <div className={styles.tool} onClick={handleClick}>
                    Hae
                </div>
                <div className={styles.tool} onClick={handleClick}>
                    Muokkaa
                </div>
                <div className={styles.tool} onClick={handleClick}>
                    Poista
                </div>
                <div className={styles.tool} onClick={handleClick}>
                    Hae
                </div>
            </div>
        </div>
    );

    function handleClick() {
        alert("Not implemented yet!");
    }
}
