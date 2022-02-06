let display = document.getElementById(`display`);

let buttons = Array.from(document.getElementsByClassName(`button`));

buttons.map((button) => {
    button.addEventListener(`click`, (e) => {
        switch (e.target.innerText) {
            case `C`:
                display.innerText = "";
                historyDisplay.innerText = "";
                break;
            case "↶":
                display.innerText = display.innerText.slice(0, -1);
                break;
            case "х²":
                // let resultX2 =
                display.innerText = display.innerText + "²";
                break;
            case "√":
                let result = eval(display.innerText);
                // display.innerText = result;
                display.innerText = Math.sqrt(result);
                historyDisplay.innerText = result + "√" + `=` + Math.sqrt(result);

                break;
            case `=`:
                try {
                    if (display.innerText.includes("²")) {
                        display.innerText = display.innerText.replace("²", "**2");
                    }
                    result = eval(display.innerText);
                    console.log(display.innerText);
                    // historyDisplay.innerText = display.innerText + `=` + result;
                    // display.innerText = result;
                } catch (error) {
                    display.innerText = "Error!";
                }
                break;

            default:
                display.innerText += e.target.innerText;
        }
    });
});