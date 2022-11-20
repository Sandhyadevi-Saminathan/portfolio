let skills = document.getElementsByClassName("tab-links");
let content = document.getElementsByClassName("tab-contents");
function opentab(tabname) {
    for (s of skills) {
        s.classList.remove("active-link")
    }
    for (b of content) {
        b.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
let side = document.getElementById("sidemenu");
function openmenu() {
    side.style.right = "0";
}
function closemenu() {
    side.style.right = "-200px";
}