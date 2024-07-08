document.addEventListener("DOMContentLoaded", function() {
    fetch('logo.html')
        .then(response => response.text())
        .then(data => document.getElementById("logo-container").innerHTML = data);

    fetch('menu.html')
        .then(response => response.text())
        .then(data => document.getElementById("menu-container").innerHTML = data);
});
