let Started = false;

document.getElementById('button').addEventListener("click", function () {
    Started = !Started;
    if (Started) {
        this.innerHTML = "Stop";
        Change_Color();
    } else {
        this.innerHTML = "Start";
    }
});

function Change_Color() {
    let red = document.getElementById("red").value;
    let green = document.getElementById("green").value;
    let blue = document.getElementById("blue").value;
    let t = "#" + red + green + blue;
    document.documentElement.style.setProperty('--box-color', t);
}