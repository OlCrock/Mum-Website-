// Get the form and message element
const form = document.getElementById("applicationForm");
const message = document.getElementById("formMessage");

// Listen for the form being submitted
form.addEventListener("submit", async function (event) {

    // Stop the browser going to another page
    event.preventDefault();

    // Create form data
    const formData = new FormData(form);

    try {

        // Send data to Google Forms
        await fetch(form.action, {
            method: "POST",
            body: formData,
            mode: "no-cors"
        });

        // Success message
        message.textContent = "✓ Thank you! Your application has been submitted.";
        message.style.color = "#2e7d32";

        // Clear the form
        form.reset();

    } catch (error) {

        // Error message
        message.textContent = "Something went wrong. Please try again.";
        message.style.color = "#c62828";

        console.error(error);
    }

});
