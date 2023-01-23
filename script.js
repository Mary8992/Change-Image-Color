const bgColors = document.getElementById("bgColors");

function randomcolor() {
    return Math.floor(Math.random() * 255);
}

bgColors.addEventListener("click", () => {
    bgColors.style.backgroundColor =
        "rgba(" +
        randomcolor() +
        ", " +
        randomcolor() +
        ", " +
        randomcolor() +
        ")";
});