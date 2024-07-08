// script.js
document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu-item > a');

    menuItems.forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault();

            const parent = item.parentElement;
            const subMenu = parent.querySelector('.submenu');

            if (parent.classList.contains('active')) {
                parent.classList.remove('active');
                subMenu.style.display = 'none';
            } else {
                document.querySelectorAll('.menu-item').forEach(el => {
                    el.classList.remove('active');
                    const subMenu = el.querySelector('.submenu');
                    if (subMenu) subMenu.style.display = 'none';
                });
                parent.classList.add('active');
                subMenu.style.display = 'block';
            }
        });
    });
});

