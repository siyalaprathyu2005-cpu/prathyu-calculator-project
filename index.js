const links = document.querySelectorAll("nav a");

links.forEach(link => {
    link.addEventListener("click", function () {
        alert("Opening " + this.innerText + " Section");
    });
});