var typed = new Typed('#typed', {
    strings: [
        'Web Developer',
        'Freelancer'
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
    loopCount: 10,
});

function togglerFunction() {
    document.getElementsByClassName("navbar")[0].style.zIndex = "1000";
    document.getElementsByClassName("navbar-collapse")[0].style.backgroundColor = "black";
}
