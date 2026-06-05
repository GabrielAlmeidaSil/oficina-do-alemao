const toggler = document.querySelector('.navbar-toggler');
const icon = toggler.querySelector('i');
const menu = document.getElementById('menuMobile');

menu.addEventListener('show.bs.collapse', () => {
    icon.classList.replace('bi-list', 'bi-x');
});

menu.addEventListener('hide.bs.collapse', () => {
    icon.classList.replace('bi-x', 'bi-list');
});

document.querySelectorAll('#menuMobile .nav-link').forEach(link => {
    link.addEventListener('click', () => {
        bootstrap.Collapse.getInstance(menu)?.hide();
    });
});
