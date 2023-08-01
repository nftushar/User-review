

// Get all star elements
const stars = document.querySelectorAll('.stars label');

// Add event listeners to each star element
stars.forEach(star => {
    star.addEventListener('mouseover', () => handleHover(star));
    star.addEventListener('mouseleave', () => handleLeave(star));
    star.addEventListener('click', () => handleClick(star));
});

function handleHover(star) {
    // Get the index of the hovered star
    const starIndex = Array.from(stars).indexOf(star);

    // Add 'active' class to all stars up to the hovered star
    for (let i = 0; i <= starIndex; i++) {
        stars[i].classList.add('active');
    }

    // Remove 'active' class from stars after the hovered star
    for (let i = starIndex + 1; i < stars.length; i++) {
        stars[i].classList.remove('active');
    }
}

function handleLeave(star) {
    // Remove 'active' class from all stars when leaving
    stars.forEach(star => star.classList.remove('active'));
}

function handleClick(star) {
    // Get the index of the clicked star
    const starIndex = Array.from(stars).indexOf(star);

    // Add 'active' class to all stars up to the clicked star
    for (let i = 0; i <= starIndex; i++) {
        stars[i].classList.add('active');
    }

    // Remove 'active' class from stars after the clicked star
    for (let i = starIndex + 1; i < stars.length; i++) {
        stars[i].classList.remove('active');
    }

    // Set the rating for the selected radio input
    document.querySelector(`#star-${starIndex + 1}`).checked = true;

    // Set the color of active stars
    stars.forEach((star, index) => {
        if (index <= starIndex) {
            star.style.color = '#fd4';
        } else {
            star.style.color = '#ccc';
        }
    });
}


const textElement = document.querySelector('.footer .text');
const numbElement = document.querySelector('.footer .numb');

stars.forEach((star, index) => {
    star.addEventListener('click', () => handleRating(index + 1));
});

function handleRating(rating) {
    const textContent = getRatingText(rating);
    textElement.textContent = textContent;
    numbElement.textContent = `${rating} out of 5`;
}

function getRatingText(rating) {
    switch (rating) {
        default:
            return "Rate your experience";
        case 1:
            return "I just hate it";
        case 2:
            return "I don't like it";
        case 3:
            return "This is awesome";
        case 4:
            return "I just like it";
        case 5:
            return "I just love it";
        
    }
}