var Started = false, interval;

// Start or stop the program
document.getElementById('button').addEventListener("click", function () {
    Started = !Started;
    Prevent_Change(Started);

    // Start the program
    if (Started) {
        let red = document.getElementById("red").value;
        let green = document.getElementById("green").value;
        let blue = document.getElementById("blue").value;
        let color = "#" + red + green + blue;

        // Check if the hexadecimal number is valid
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
    }
    // Stop the program
    else {
        this.innerHTML = "Start";
        clearInterval(interval);
    }
});

// Prevent the inputs to be changed when the program is started
function Prevent_Change(Started) {
    let array = document.querySelectorAll(".inputs input:not(#color)");
    array.forEach(element => {
        element.readOnly = Started;
    });
}

// Change the RGB color
function Change_Color(red, green, blue) {

    // Get increment value
    let num_red = parseInt(document.getElementById("red_incr").value);
    let num_green = parseInt(document.getElementById("green_incr").value);
    let num_blue = parseInt(document.getElementById("blue_incr").value);

    interval = setInterval(function () {

        // Pass hex to decimal
        red = parseInt(red, 16);
        green = parseInt(green, 16);
        blue = parseInt(blue, 16);

        // Increment decimal
        red = (red + num_red) % 256;
        green = (green + num_green) % 256;
        blue = (blue + num_blue) % 256;

        // Pass decimal back to hex
        red = red.toString(16);
        green = green.toString(16);
        blue = blue.toString(16);

        // Add zero if length is 1
        if (red.length < 2) {
            red = "0" + red;
        }
        if (green.length < 2) {
            green = "0" + green;
        }
        if (blue.length < 2) {
            blue = "0" + blue;
        }

        // Display in input box
        document.getElementById("red").value = red;
        document.getElementById("green").value = green;
        document.getElementById("blue").value = blue;

        // Change in the input and box color
        let color = "#" + red + green + blue;
        document.getElementById("color").value = color;
        document.documentElement.style.setProperty('--box-color', color);
    }, document.getElementById("interval").value);
}