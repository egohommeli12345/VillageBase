import jsPDF from "jspdf";

// Needs to be refactored to use the data from the database
/*
    Data needed:
    - Invoice ID
    - Payment amount
    - Due date
    - Recipient
    - Service name
    - Service price
    - Timeframe for the reservation
    - Total amount
*/

export const generatePdfInvoice = () => {
    const doc = new jsPDF();

    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();

    const rowHeight = 5;
    const columnWidth = 5;
    let x = 0;
    let y = 0;

    doc.setFontSize(28);
    doc.setFont("Helvetica", "bold");

    x = 25;
    y = 25;
    doc.text("VillageNewbies", x, y);
    doc.setFont("Helvetica", "normal");
    doc.text("LASKU", pageWidth - x, y, { align: "right" });
    doc.setFontSize(12);
    doc.text("# 1234", pageWidth - x, 33, { align: "right" });

    y = 50;

    doc.text(
        ["Lähettäjä:", "VillageNewbies", "Kylätie 24, 12345", "Kylälä"],
        x,
        y
    );
    y = 80;
    doc.text(
        ["Saaja:", "Manu Maksaja", "Maksukatu 0€, 00000", "Köyhälä"],
        x,
        y
    );

    y = 75;
    x = pageWidth - 70;
    doc.text("Päivämäärä:", x, y, { align: "right" });
    doc.text("01.01.2024", x + 5, y);
    y += 10;
    doc.text("Eräpäivä:", x, y, { align: "right" });
    doc.text("01.02.2024", x + 5, y);
    y += 10;
    doc.text("Summa:", x, y, { align: "right" });
    doc.text("884.00 €", x + 5, y);

    y = 110;

    doc.line(10, y, pageWidth - 10, y);
    y += 10;
    x = 25;

    doc.text("Palvelut", x, y);
    doc.text("Määrä", x * 4, y);
    doc.text("Yksikköhinta", x * 5, y);
    doc.text("Summa", pageWidth - x, y, { align: "right" });
    y += 5;

    doc.line(10, y, pageWidth - 10, y);
    y += 10;

    doc.text("Mökki:", x, y);
    y += 5;
    doc.text("Lakeside Haven", x, y);
    y += 5;
    doc.text("2024.06.01 14.00 - 2024.06.08 10.00", x, y);
    doc.text("8", x * 4, y);
    doc.text("95.50 €", x * 5, y);
    doc.text("764.00 €", pageWidth - x, y, { align: "right" });
    y += 10;
    doc.text("Lisäpalvelu:", x, y);
    y += 5;
    doc.text("Lake Excursions", x, y);
    doc.text("3", x * 4, y);
    doc.text("40.00 €", x * 5, y);
    doc.text("120.00 €", pageWidth - x, y, { align: "right" });
    y += 10;

    doc.line(10, y, pageWidth - 10, y);
    y += 10;

    doc.text("884.00 €", pageWidth - x, y, { align: "right" });

    y += 10;

    doc.line(10, y, pageWidth - 10, y);

    doc.save("vb_invoice_template.pdf");
};

const debugPdfInvoice = () => {
    const debug = new jsPDF();
    debug.text("Hello world!", 25, 25);
    console.log(debug.internal.pageSize.getHeight());
};
