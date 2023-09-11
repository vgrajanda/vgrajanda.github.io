function toggleNavbar() {
    let navbar = document.getElementById("navbar");
    if (navbar.style.width === "0px" || navbar.style.width === "") {
        navbar.style.width = "250px";
    } else {
        navbar.style.width = "0px";
    }
}
