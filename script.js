document.getElementById("download-btn").addEventListener("click", function () {
    const resume = document.getElementById("resume");

    // Set options for html2pdf
    const options = {
        margin: [10, 10], // Adjust top, left, bottom, right margins
        filename: 'Priyanshu-Singh-Resume.pdf',
        image: { type: 'jpeg', quality: 3 }, // Higher quality image
        html2canvas: {
            scale: 3, // Increase scale for better resolution (you can try scale: 3 or scale: 1.5 for different results)
            letterRendering: true, // Helps to render text more clearly
            useCORS: true // If your content includes images, set this to allow cross-origin content to be captured
        },
        jsPDF: { unit: 'mm', format: 'a3', orientation: 'portrait' }
    };

    // Generate the PDF with the options set
    html2pdf().from(resume).set(options).save();
});
