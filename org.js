console.log("Welcome to the my org");
document.querySelector(".cross").style.display = "none";
document.querySelector(".hamburger").addEventListener("click", () => {
    document.querySelector(".sidebar").classList.toggle("sidebargo");

    if (document.querySelector(".sidebar").classList.contains("sidebargo")) {
        document.querySelector(".cross").style.display = "none";
        document.querySelector(".ham").style.display = "inline";
    }
    else {
        document.querySelector(".ham").style.display = "none";
        setTimeout(() => {
            document.querySelector(".cross").style.display = "inline";
        }, 400);
    }
});
