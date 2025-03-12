const headerBtns = document.querySelectorAll('header div');
headerBtns.forEach((btn) => {
    btn.onclick = (e) => {
        if (e.target.id === 'header-books') {
            window.location.href = '/books';
        } else if (e.target.id === 'header-dashboard') {
            window.location.href = '/dashboard';
        } else if (e.target.id === 'header-add-book') {
            window.location.href = '/books/add';
        }
    };
});
