// select the button using its class
const tasteButtons = document.querySelectorAll('.containerBtn');

tasteButtons.forEach(button => {
    button.addEventListener('click', function() {
        const flipCardInner = button.closest('.flip-card-inner');
        flipCardInner.classList.toggle('flipped');
    });
    
})

// Select all "CANCEL" buttons
const cancelButtons = document.querySelectorAll('.cancelBtn');

// Add click event to each "CANCEL" button
cancelButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Find the parent container of the clicked "CANCEL" button
        const flipCardInner = button.closest('.flip-card-inner');
        flipCardInner.classList.remove('flipped'); // Remove 'flipped' to flip it back
    });
});