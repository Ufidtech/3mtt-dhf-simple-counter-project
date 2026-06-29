let count = 0;

// 2. Grabbing the Elements
const display = document.getElementById('display');
const increaseBtn = document.getElementById('increaseBtn');
const decreaseBtn = document.getElementById('decreaseBtn');
const resetBtn = document.getElementById('resetBtn');


// Increase action
increaseBtn.addEventListener('click', function () {
    count++;
    display.textContent = count;
});

// Decrease action
decreaseBtn.addEventListener('click', function () {

    if (count > 0) {
        count--;
        display.textContent = count;
    }
    else {
        alert("Count cannot go below zero!");
    }
});

// Reset action
resetBtn.addEventListener('click', function () {
    count = 0;
    display.textContent = count;
});