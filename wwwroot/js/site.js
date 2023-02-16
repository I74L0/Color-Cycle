var Started = false, interval;

document.getElementById('button').addEventListener("click", function () {
    Started = !Started;

    Prevent_Change(Started);
    if (Started) {
        let red = document.getElementById("red").value;
        let green = document.getElementById("green").value;
        let blue = document.getElementById("blue").value;
        let color = "#" + red + green + blue;

        if (/^#([0-9A-F]{3}){1,2}$/i.test(color)) {
            document.getElementById("color").value = color;
            document.documentElement.style.setProperty('--box-color', color);
            Change_Color(red, green, blue);
            this.innerHTML = "Stop";
        }
        else {
            Started = !Started;
            Prevent_Change(Started)
            this.innerHTML = "Start";
            alert("invalid hexadecimal");
        }
    } else {
        this.innerHTML = "Start";
        clearInterval(interval);
    }
});

function Prevent_Change(Started) {
    let array = document.querySelectorAll(".inputs input");
    array.forEach(element => {
        element.readOnly = Started;
    });
}

function Change_Color(t_red, green, blue) {
    let num_red = parseInt(document.getElementById("red_incr").value);
    let num_green = parseInt(document.getElementById("green_incr").value);
    let num_blue = parseInt(document.getElementById("blue_incr").value);

    let red = parseInt(t_red);

    interval = setInterval(function () {
        red = parseInt(red, 16);
        red = red + num_red;
        red = red.toString(16);

        document.getElementById("red").value = red;
    }, 1000);
}