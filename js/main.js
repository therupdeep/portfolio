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
    document.getElementsByClassName("navbar").style.margin = "0";
    document.getElementsByClassName("navbar").style.zIndex = "1000";
    document.getElementsByClassName("navbar-collapse").style.backgroundColor = "black";
}