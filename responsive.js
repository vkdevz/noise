// responsive.js
document.addEventListener("DOMContentLoaded", function () {
    // Function to check if the screen is mobile
    const isMobile = window.innerWidth <= 768; // Adjust the breakpoint for mobile devices

    if (isMobile) {
        // Move images above their corresponding text for features and colors sections
        const featureRows = document.querySelectorAll(".feature-row");
        featureRows.forEach(row => {
            const image = row.querySelector(".feature-image");
            const text = row.querySelector(".feature-text");

            if (image && text) {
                row.insertBefore(image, text); // Move image above text
            }
        });

        // Resize color items
        const colorItems = document.querySelectorAll(".colorItem");
        colorItems.forEach(item => {
            item.style.width = "80px"; // Smaller size for color items
            const img = item.querySelector("img");
            if (img) {
                img.style.width = "100%"; // Adjust image size within the item
            }
        });

        // Call the function to align the "buyNow" button
        alignBuyNow();
    }

    // Function to ensure "buyNow" is placed below the image in the hero section
    function alignBuyNow() {
        const hero = document.getElementById('hero');
        const buyNow = document.getElementById('buyNow');
        const heroImage = document.getElementById('righthero'); // Assuming this contains the image

        // Check if the button is not already positioned correctly
        if (hero && buyNow && heroImage) {
            // Append the buyNow button after the hero image
            hero.appendChild(buyNow);
        }
    }

    // Optionally, you can also call the functions on window resize
    window.addEventListener("resize", function () {
        if (window.innerWidth <= 768) {
            // Re-run alignment functions
            alignBuyNow();
        }
    });
});
