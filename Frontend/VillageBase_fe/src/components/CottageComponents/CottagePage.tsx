import styles from "./CottagePage.module.css";

// Fukntion runko
export default function CottagePage() {
    return <div className={styles.cottageBG}>
        <div className={styles.cottageCardsContainer}>

            <div className={styles.item}>
                <div>Nimi</div>
                <div>Sijainti</div>
                <div className="zip">PostiNro</div>
                <button className={styles.cardButton}>Lisätietoja</button>
            </div>

            <div className={styles.item}>
                <div>Nimi</div>
                <div>Sijainti</div>
                <div className="zip">PostiNro</div>
                <button className={styles.cardButton}>Lisätietoja</button>
            </div>

            <div className={styles.item}>
                <div>Nimi</div>
                <div>Sijainti</div>
                <div className="zip">PostiNro</div>
                <button className={styles.cardButton}>Lisätietoja</button>
            </div>

            <div className={styles.item}>
                <div>Nimi</div>
                <div>Sijainti</div>
                <div className="zip">PostiNro</div>
                <button className={styles.cardButton}>Lisätietoja</button>
            </div>

            
            {/* lisätään tarpeen mukaan  */}
        </div>

    </div>;
}
