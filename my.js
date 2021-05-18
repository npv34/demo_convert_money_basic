function convertMoney() {
    //lay gia tri tu cac o input
    let amount = document.getElementById('amount').value;
    let fromCurrent = document.getElementById('from-current').value;
    let toCurrent = document.getElementById('to-current').value;

    // Math.floor lam tron so
    result = Math.floor(amount * toCurrent / fromCurrent);

    // thay doi noi dung phan tu html dung innerHTML
    document.getElementById('result').innerHTML = "Result: " + result;

}