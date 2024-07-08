// script.js
document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu-item > a');

    menuItems.forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault();

            const parent = item.parentElement;
            const subMenu = parent.querySelector('.submenu');

            // Fermer tous les autres sous-menus
            document.querySelectorAll('.menu-item').forEach(el => {
                if (el !== parent) {
                    el.classList.remove('active');
                    const subMenu = el.querySelector('.submenu');
                    if (subMenu) subMenu.style.display = 'none';
                }
            });

            // Toggle le sous-menu de l'élément cliqué
            if (parent.classList.contains('active')) {
                parent.classList.remove('active');
                subMenu.style.display = 'none';
            } else {
                parent.classList.add('active');
                subMenu.style.display = 'block';
            }
        });
    });

    // Fermer les sous-menus lorsqu'on clique en dehors du menu
    document.addEventListener('click', function(event) {
        if (!event.target.closest('nav')) {
            document.querySelectorAll('.menu-item').forEach(el => {
                el.classList.remove('active');
                const subMenu = el.querySelector('.submenu');
                if (subMenu) subMenu.style.display = 'none';
            });
        }
    });
});

