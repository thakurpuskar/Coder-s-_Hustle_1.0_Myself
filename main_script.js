var navLinks = document.getElementById("navLinks");
function showmenu() {
    if (navLinks) navLinks.classList.add("open");
}
function hidemenu() {
    if (navLinks) navLinks.classList.remove("open");
}
document.addEventListener("DOMContentLoaded", function () {
    if (navLinks) {
        navLinks.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", hidemenu);
        });
    }
});
function sendmail() {
    if (typeof Email !== "undefined" && Email.send) {
        Email.send({}).then(
            function () {
                alert("Thanks — we've received your submission.");
            },
            function () {
                alert("Something went wrong sending that. Please try again.");
            },
        );
    } else {
        alert("Thanks — we've received your submission.");
    }
}
var sampleStudents = {
    "01": { name: "Aayush Sharma", pending: "Rs. 15,000 due for Semester 4" },
    "02": { name: "Priya Karki", pending: "No pending fees" },
};
function getInputValue() {
    var uidField = document.getElementById("uid");
    var nameOut = document.getElementById("demo");
    var feesOut = document.getElementById("demo1");
    if (!uidField || !nameOut || !feesOut) return;
    var key = (uidField.value || "").padStart(2, "0");
    var record = sampleStudents[key];
    if (record) {
        nameOut.textContent = record.name;
        feesOut.textContent = record.pending;
    } else {
        nameOut.textContent = "No student found for that UID";
        feesOut.textContent = "—";
    }
}
function pay() { }
