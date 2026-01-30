function runScan() {
    const output = document.getElementById("output");
    output.innerHTML = "🔍 Initializing security scan...";

    setTimeout(() => {
        output.innerHTML += "<br>📡 Collecting logs from IAM & SIEM...";
    }, 1000);

    setTimeout(() => {
        output.innerHTML += "<br>🤖 ML Model analyzing insider threats...";
    }, 2000);

    setTimeout(() => {
        output.innerHTML += "<br>⚠️ Threat Detected: Suspicious login attempt";
    }, 3000);

    setTimeout(() => {
        output.innerHTML += "<br>✅ Scan Complete: System Secured";
    }, 4000);
}
