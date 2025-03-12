const cards = document.getElementById('book-cards-container').children;
[...cards].forEach((card) => {
    card.onclick = (e) => {
        window.location.href = `/books/${e.target.dataset.link}`;
    };
});
