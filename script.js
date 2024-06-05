// script.js

document.addEventListener("DOMContentLoaded", () => {
    const submitBtn = document.getElementById("submitBtn");

    submitBtn.addEventListener("click", () => {
        const email = document.getElementById("FormControlInput1").value;
        const message = document.getElementById("FormControlTextarea1").value;

        if (email && message) {
            alert("Thank you for your message!");
            // Reset form
            document.getElementById("FormControlInput1").value = "";
            document.getElementById("FormControlTextarea1").value = "";
            // Close modal
            let modal = bootstrap.Modal.getInstance(document.getElementById('ContactUs'));
            modal.hide();
        } else {
            alert("Please fill out all fields.");
        }
    });
});
