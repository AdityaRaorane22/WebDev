document.getElementById("sell-form").addEventListener("submit", async function(event) {
    event.preventDefault();

    const formData = new FormData(this);

    const response = await fetch("/products", {
        method: "POST",
        body: formData
    });

    if (response.ok) {
        alert("Product posted successfully!");
        this.reset();
    } else {
        alert("Failed to post product");
    }
});
