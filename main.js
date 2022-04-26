function generateColor() {
    let chxs = "1234567890ABCDEF";
    let symbol = '#';

    for (var i = 0; i < 6; i++) {
        symbol = symbol + chxs[Math.floor(Math.random() * 16)]
    }
    document.body.style.background = symbol;
    document.getElementById("hex").innerText = symbol;

}