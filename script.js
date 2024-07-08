/* Base styles */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
}

.container {
    width: 80%;
    margin: auto;
    overflow: hidden;
}

header {
    background: #007BFF;
    color: white;
    padding-top: 30px;
    min-height: 70px;
    border-bottom: #333 3px solid;
}

header .logo-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    margin-bottom: 20px;
}

header h1 {
    margin: 10px 0 0 0;
    font-size: 2em;
}

header .logo {
    max-width: 350px;
    width: 100%;
    height: auto;
    margin-bottom: 20px;
}

nav ul.main-menu {
    padding: 0;
    list-style: none;
    text-align: center;
    display: flex;
    justify-content: center;
    background: #f4f4f4;
    margin: 0;
    flex-wrap: wrap;
}

nav ul.main-menu li.menu-item {
    position: relative;
    margin: 5px;
}

nav ul.main-menu li.menu-item a {
    display: block;
    padding: 10px 20px;
    color: black;
    text-decoration: none;
    background: #e0e0e0;
    border: 1px solid #ccc;
    transition: background 0.3s;
}

nav ul.main-menu li.menu-item a:hover {
    background: #b0c4de;
}

nav ul.main-menu li.menu-item ul.submenu {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    background: white;
    list-style: none;
    padding: 0;
    border: 1px solid #ccc;
    width: 200px;
    z-index: 1000;
}

nav ul.main-menu li.menu-item ul.submenu li a {
    padding: 10px;
    border-bottom: 1px solid #ddd;
}

nav ul.main-menu li.menu-item ul.submenu li a:hover {
    background: #b0c4de;
}

nav ul.main-menu li.menu-item.active ul.submenu {
    display: block;
}

.intro, .vision, .principles {
    background: #E3F2FD;
    padding: 20px;
    margin: 20px 0;
    text-align: justify;
    border: 1px solid #ccc;
    border-radius: 5px;
}

section .container {
    text-align: center;
}

section ul {
    list-style: none;
    padding: 0;
    text-align: left;
}

section ul li {
    padding: 10px 0;
    text-align: justify;
}

footer {
    background: #333;
    color: white;
    text-align: center;
    padding: 10px 0;
}

.btn {
    display: inline-block;
    padding: 10px 20px;
    background: #007BFF;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    margin-top: 10px;
}

.btn:hover {
    background: #0056b3;
}

/* Responsive styles */
@media (max-width: 768px) {
    .container {
        width: 100%;
        padding: 0 10px;
    }

    nav ul.main-menu {
        flex-direction: column;
    }
    
    nav ul.main-menu li.menu-item ul.submenu {
        position: static;
    }
    
    nav ul.main-menu li.menu-item ul.submenu li a {
        border-bottom: 1px solid #ccc;
    }
    
    nav ul.main-menu li.menu-item ul.submenu li a:hover {
        background: #e0e0e0;
    }

    header h1 {
        font-size: 1.5em;
    }

    header .logo {
        max-width: 100px;
    }

    .intro, .vision, .principles {
        margin: 10px 0;
    }
}

/* Desktop styles */
@media (min-width: 769px) {
    .content {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .intro, .vision, .principles {
        flex: 1 1 calc(33.333% - 20px);
        margin: 10px;
    }
}
