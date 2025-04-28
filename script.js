// Random background color every few seconds
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Change background color every 5 seconds
setInterval(() => {
    if (!document.body.classList.contains('dark-mode')) { // Only change color if not in dark mode
        document.body.style.backgroundColor = getRandomColor();
    }
}, 5000);

// Light/Dark mode toggle
document.getElementById('toggleTheme').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Form submit animated alert
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent actual submission to show animation
    const submitBtn = document.getElementById('submitBtn');
    submitBtn.innerText = "Submitting...";
    submitBtn.style.backgroundColor = "#0f0"; // Green while submitting
    setTimeout(() => {
        alert('Form submitted successfully!');
        submitBtn.innerText = "Submit"; // Reset back after animation
        submitBtn.style.backgroundColor = "#2575fc";
        this.submit(); // Now actually submit form
    }, 1000); // 1 seconds delay for animation
});
