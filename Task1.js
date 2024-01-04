window.addEventListener('scroll', function () {
    changeNavbarColor();
});

function changeNavbarColor() {
    var navbar = document.getElementById("navbar");
    var body = document.body;
    var html = document.documentElement;

    if (body.scrollTop > 20 || html.scrollTop > 20) {
        navbar.style.backgroundColor = "#555";
        document.body.style.backgroundColor = "rgba(255, 0, 0, 0.801)";
    } else {
        navbar.style.backgroundColor = "#333";
        document.body.style.backgroundColor = "#f4f4f4";
    }
}


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

var navbar = document.getElementById("navbar");
navbar.addEventListener('mouseenter', function () {
    navbar.style.backgroundColor = "rgba(255, 0, 0, 0.801)";
});

navbar.addEventListener('mouseleave', function () {
    
    if (!(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)) {
        navbar.style.backgroundColor = "#333";
    }
});