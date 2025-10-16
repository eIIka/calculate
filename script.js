function clr() {
    document.getElementById("result").value = "";
}

function element(val) {
    const display = document.getElementById("result");

    // Якщо зараз показано "Error" — очищаємо перед додаванням нового символу
    if (display.value === "Error") {
        display.value = "";
    }

    display.value += val;
}

function res() {
    const display = document.getElementById("result");
    const x = display.value;

    try {
        const y = math.evaluate(x);
        display.value = y;
    } catch (e) {
        display.value = "Error";
    }
}

// Додаємо очищення при натисканні клавіш
document.getElementById("result").addEventListener("keyup", function(event) {
    const display = document.getElementById("result");
    const allowedKeys = ['0','1','2','3','4','5','6','7','8','9','+','-','*','/','.'];

    // Якщо користувач починає нове введення після помилки — очищаємо поле
    if (display.value === "Error" && allowedKeys.includes(event.key)) {
        display.value = "";
    }

    if (allowedKeys.includes(event.key)) {
        display.value += event.key;
    } else if (event.key === "Enter") {
        res();
    }
});
