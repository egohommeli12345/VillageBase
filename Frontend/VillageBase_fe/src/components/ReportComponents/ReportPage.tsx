import jsPDF from "jspdf";
import styles from "./ReportPage.module.css";
import { useEffect } from "react";
import { useToolState } from "../MainComponents/ToolStateContext";

// pdf page is by default A4, units in mm
// A4 = 210mm x 297mm

function ReportPage() {
    const { setOnLandingPage } = useToolState();

    useEffect(() => {
        setOnLandingPage(true);
    }, []);

    return (
        <div className={styles.reportBG}>
            <div>KONTSAA</div>
        </div>
    );
}

export default ReportPage;
