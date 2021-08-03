let search = () => {
    let searchInput = document.getElementById("search");
    let getCorrectWord = document.getElementById("correct-word");
    let getPalindromeWord = document.getElementById("palindrome-word");
    let firstDivTag = `<p>${searchInput.value}</p>`
    getCorrectWord.innerHTML = firstDivTag
    // searchInput.value = getCorrectWord00
    let setValue = searchInput.value.split("").reverse().join("")
    let secondDivTag = `<p>${setValue}</p>`
    getPalindromeWord.innerHTML = secondDivTag
    getCorrectWord.classList = "one-box"
    getPalindromeWord.classList = "second-box"
}
