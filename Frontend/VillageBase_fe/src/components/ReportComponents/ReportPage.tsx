import jsPDF from "jspdf";
import styles from "./ReportPage.module.css";
import { useEffect } from "react";
import { useToolState } from "../MainComponents/ToolStateContext";

// pdf page is by default A4, units in mm
// A4 = 210mm x 297mm

function ReportPage() {
    useEffect(() => {
        setOnLandingPage(true);
    }, []);

    const {
        addBtn,
        deleteBtn,
        editBtn,
        setEditBtn,
        setAddBtn,
        setDeleteBtn,
        setOnLandingPage,
    } = useToolState();

    const handleCloseBtn = () => {
        setEditBtn(false);
        setAddBtn(false);
        setDeleteBtn(false);
    };

    return (
        <div className={styles.reportBG}>
            <div className={addBtn ? styles.addPageBg : styles.hidden}>
                <div className={styles.addPage}>
                    <img
                        className={styles.closeAddPage}
                        src="/closeX.svg"
                        onClick={handleCloseBtn}
                    />
                    <div className={styles.popUpContent}>
                        {/* <AddServicePage /> */}
                    </div>
                </div>
            </div>
            <div>KONTSAA</div>
        </div>
    );
}

export default ReportPage;
