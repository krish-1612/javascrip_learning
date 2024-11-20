function printValue() {
    const num2 = parseInt(document.getElementById('num2').value);
    const num3 = parseInt(document.getElementById('num3').value);
    const sum = num2 + num3;
    document.getElementById('output').innerText = `the sum is: ${sum}`;
}


