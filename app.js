function checkNumber() {
    const number = Number(document.getElementById("number").value);
    let resultElement = document.getElementById("result");

    if (number > 0) {
        resultElement.innerHTML = "Talet är positivt";
        resultElement.classList.add("positive");
        resultElement.classList.remove("negative", "zero");
    } else if (number < 0) {
        resultElement.innerHTML = "Talet är negativt";
        resultElement.classList.add("negative");
        resultElement.classList.remove("positive", "zero");
    } else {
        resultElement.innerHTML = "Talet är noll";
        resultElement.classList.add("zero");
        resultElement.classList.remove("positive", "negative");
    }
}