let search = () => {
    let searchInput = document.getElementById("search");
    if (searchInput.value === "") {
        // alert("Enter Word")
        let main = document.getElementById("main")
        let srch_box = document.getElementById("srch-box")
        let create_text = `<h1>Please Enter Word</h1> <button onclick="goBack(this)">Go Back</button>`
        srch_box.style.display = "none"
        main.innerHTML = create_text
        main.classList = "main-box"
    }
    else {
        let getCorrectWord = document.getElementById("correct-word");
        let getPalindromeWord = document.getElementById("palindrome-word");
        let firstDivTag = `<h2>Correct Word</h2><p>${searchInput.value}</p>`
        getCorrectWord.innerHTML = firstDivTag
        let setValue = searchInput.value.split("").reverse().join("")
        let secondDivTag = `<h2>Palindrome Word</h2><p>${setValue}</p>`
        getPalindromeWord.innerHTML = secondDivTag
        getCorrectWord.classList = "one-box"
        getPalindromeWord.classList = "second-box"
    }
}
let goBack = (e) => {
    let srch_box = document.getElementById("srch-box")
    
    // srch_box.style.display = "inline-block"
}

// let goBack = () => {
//     let srch_box = document.getElementById("srch-box")
//     srch_box.style.display = "inline-block"
// }
