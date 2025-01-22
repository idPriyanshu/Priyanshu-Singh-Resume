document.getElementById("download-btn").addEventListener("click", function () {
    const resume = document.getElementById("resume");

    // Initialize jsPDF with desired options
    const pdf = new jsPDF({
        unit: 'mm',
        format: 'a3',
        orientation: 'portrait',
    });

    // Use the html method to convert HTML to PDF
    pdf.html(resume, {
        callback: function (doc) {
            // Save the generated PDF
            doc.save('Priyanshu-Singh-Resume.pdf');
        },
        x: 10, // Adjust the X position of the content in the PDF
        y: 10, // Adjust the Y position of the content in the PDF
        html2canvas: {
            scale: 1.5, // Adjust scale for better resolution
            letterRendering: true, // Helps render text more clearly
        },
        autoPaging: true, // Automatically adds new pages if the content overflows
        margin: [9, 9], // Set margins for the content in the PDF
    });
});
