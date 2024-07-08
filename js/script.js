document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            const subMenu = item.querySelector('.sub-menu');
            if (subMenu) {
                e.preventDefault();
                const isVisible = subMenu.style.display === 'block';
                document.querySelectorAll('.sub-menu').forEach(sub => sub.style.display = 'none');
                subMenu.style.display = isVisible ? 'none' : 'block';
            }
        });
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.menu-item')) {
            document.querySelectorAll('.sub-menu').forEach(subMenu => {
                subMenu.style.display = 'none';
            });
        }
    });
});
