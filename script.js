// Select the hero rows, feature rows, color cards, and about section
const heroRows = document.querySelectorAll('.hero-row');
const featureRows = document.querySelectorAll('.feature-row');
const colorItems = document.querySelectorAll('.colorItem');
const aboutSection = document.querySelector('#about');

// Function to handle scroll animation
const handleScrollAnimation = () => {
    // Animate hero rows
    heroRows.forEach(row => {
        const rect = row.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            row.classList.add('in-view'); // Add class when in view
        } else {
            row.classList.remove('in-view'); // Remove class when out of view
        }
    });

    // Animate feature rows
    featureRows.forEach(row => {
        const rect = row.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            row.classList.add('in-view'); // Add class when in view
        } else {
            row.classList.remove('in-view'); // Remove class when out of view
        }
    });

    // Animate color items
    colorItems.forEach(item => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            item.classList.add('in-view'); // Add class when in view
        } else {
            item.classList.remove('in-view'); // Remove class when out of view
        }
    });

    // Animate About section
    const aboutRect = aboutSection.getBoundingClientRect();
    if (aboutRect.top < window.innerHeight && aboutRect.bottom > 0) {
        aboutSection.classList.add('in-view'); // Add class when in view
    } else {
        aboutSection.classList.remove('in-view'); // Remove class when out of view
    }
};

// Add scroll event listener
window.addEventListener('scroll', handleScrollAnimation);

// Call it initially to handle any elements already in view
handleScrollAnimation();
