function printValue() {
    const num2 = parseFloat(document.getElementById('num2').value);
    const num3 = parseFloat(document.getElementById('num3').value);
    const operation = event.submitter.textContent;
    let result;

    switch (operation) {
        case '+':
            result = num2 + num3;
            break;
        case '-':
            result = num2 - num3;
            break;
        case '*':
            result = num2 * num3;
            break;
        case '/':
            result = num2 / num3;
            break;
    }

    document.getElementById('output').textContent = `Result: ${result}`;
}
