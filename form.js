// Attach the same submit behaviour to every form on the page
document.querySelectorAll("form").forEach(form => {

    const message = form.querySelector("p");

    form.addEventListener("submit", async (event) => {

        // Prevent the browser submitting normally
        event.preventDefault();

        try {

            await fetch(form.action, {
                method: "POST",
                body: new FormData(form),
                mode: "no-cors"
            });

            if (message) {
                message.textContent = "✓ Thank you! Your submission has been received.";
                message.style.color = "#2e7d32";
            }

            form.reset();

        } catch (error) {

            if (message) {
                message.textContent = "Something went wrong. Please try again.";
                message.style.color = "#c62828";
            }

            console.error(error);

        }

    });

});
