import { useEffect } from "react";
import styles from "./LandingPage.module.css";
import { useToolState } from "../MainComponents/ToolStateContext";

function LandingPage() {
    const { setOnLandingPage } = useToolState();

    useEffect(() => {
        setOnLandingPage(false);
    }, []);
    return (
        <div className={styles.landingBG}>
            <div className={styles.landingContent}>
                <h1>Landing Page</h1>
            </div>
        </div>
    );
}

export default LandingPage;
