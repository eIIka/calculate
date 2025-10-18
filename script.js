function clr() {
    document.getElementById("result").value = "";
}

function backspace() {
    const result = document.getElementById("result");
    result.value = result.value.slice(0, -1);
}

function element(val) {
    document.getElementById("result").value += val;
}

function res() {
    let x = document.getElementById("result").value;
    try {
        let y = math.evaluate(x);
        document.getElementById("result").value = y;
    } catch (e) {
        document.getElementById("result").value = "Error";
    }
}
