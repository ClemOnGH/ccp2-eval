const inputs = document.querySelectorAll('#add-book-form input:not([type="submit"])');
const coverImg = document.querySelector('#cover-preview img');

[...inputs].forEach((input) => {
    input.onkeyup = (e) => {
        if (e.target.value) {
            e.target.style.border = '1px solid rgb(53, 181, 61)';
            e.target.style.backgroundColor = 'rgba(66, 227, 77, 0.2)';
        } else {
            e.target.style.border = '1px solid rgba(0,0,0,0.6)';
            e.target.style.backgroundColor = 'rgb(255,255,255)';
        }
        if (e.target.name === 'cover') {
            coverImg.src = e.target.value;
        }
    };
});
