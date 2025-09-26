function clr() {
    document.getElementById("result").value = "";
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

document.getElementById("result").addEventListener("keyup", function(event) {
    const allowedKeys = ['0','1','2','3','4','5','6','7','8','9','+','-','*','/','.'];
    if (allowedKeys.includes(event.key)) {
        document.getElementById("result").value += event.key;
    } else if (event.key === "Enter") {
        res();
    }
});
