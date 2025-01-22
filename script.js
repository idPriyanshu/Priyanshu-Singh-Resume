document.getElementById("download-btn").addEventListener("click", function () {
    const resume = document.getElementById("resume").innerText; // Extract text content from the resume element

    // Create a Blob object with the text content
    const blob = new Blob([resume], { type: "text/plain" });
    const filename = "Priyanshu-Singh-Resume.txt";

    // Create a link element to download the file
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;

    // Programmatically click the link to trigger the download
    link.click();

    // Clean up the URL object
    URL.revokeObjectURL(link.href);
});
