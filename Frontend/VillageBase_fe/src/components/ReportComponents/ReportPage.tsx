import jsPDF from "jspdf";
import styles from "./ReportPage.module.css";
import { useEffect, useState } from "react";
import { useToolState } from "../MainComponents/ToolStateContext";

// pdf page is by default A4, units in mm
// A4 = 210mm x 297mm

interface Report {
    id: number;
    title: string;
    created: string;
}

// Raporttilistan mock-data
const mockReports: Report[] = [
    { id: 1, title: "Raportti 1", created: "2024-04-24" },
    { id: 2, title: "Raportti 2", created: "2024-04-25" },
    // Lisää raportteja...
];

function ReportPage() {
    useEffect(() => {
        setOnLandingPage(true);
    }, []);

    const [reports, setReports] = useState<Report[]>(mockReports); // Oletus Raporttilista

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

    // Funktio joka luo ja avaa uuden PDF-raportin
    const handleDownloadPdf = (report: Report) => {
        const doc = new jsPDF();

        doc.text(`Raportti: ${report.title}`, 10, 10);
        doc.text(`Luotu: ${report.created}`, 10, 20);
        // Lisää raportin sisältö tähän

        // Tallentaa PDF:n raportin otsikolla
        doc.save(`${report.title}.pdf`);
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
                {/* Raporttilistan esittely */}
                <div className={styles.reportList}>
                    {reports.map((report) => (
                        <div key={report.id} className={styles.reportItem}>
                            <span>{report.title}</span>
                            <span>{report.created}</span>
                            <button
                                className={styles.pdfButton}
                                onClick={() => handleDownloadPdf(report)}
                            >
                                Lataa PDF
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            <div>KONTSAA</div>
        </div>
    );
}

export default ReportPage;
