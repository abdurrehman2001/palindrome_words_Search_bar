let search = () => {
    let searchInput = document.getElementById("search");
    let setValue = searchInput.value.toLowerCase()
    if (setValue === "") {
        let main = document.getElementById("main")
        let srch_box = document.getElementById("srch-box")
        let create_empty = `<h1>Please Enter Word</h1><button class="B-btn" onclick="location='index.html'">Try Again</button>`
        srch_box.style.display = "none"
        main.innerHTML = create_empty
        main.classList = "main-box"
    }
    else if (setValue === "muhammad" || setValue === "mustafa" || setValue === "muhammad mustafa" || setValue === "rasulallah" || setValue === "rasul allah") {
        let main = document.getElementById("main")
        let srch_box = document.getElementById("srch-box")
        let create_empty = `<h1>Muhammad mustafa (peace be upon him) is the last prophet  don't put his name on search bar</h1><button class="B-btn" onclick="location='index.html'">Try Other Word</button>`
        srch_box.style.display = "none"
        main.innerHTML = create_empty
        main.classList = "main-box"
    }
    else if (setValue === "allah") {
        let main = document.getElementById("main")
        let srch_box = document.getElementById("srch-box")
        let create_empty = `<h1>Muslim believe on ALLAH so don't type ALLAH on search bar</h1><button class="B-btn" onclick="location='index.html'">Try Other Word</button>`
        srch_box.style.display = "none"
        main.innerHTML = create_empty
        main.classList = "main-box"
    }
    else {
        let searchInput = document.getElementById("search");
        let getCorrectWord = document.getElementById("correct-word");
        let getPalindromeWord = document.getElementById("palindrome-word");
        let firstDivTag = `<h2>Correct Word</h2><p>${searchInput.value}</p>`
        getCorrectWord.innerHTML = firstDivTag
        let setValue = searchInput.value.split("").reverse().join("").toLowerCase()
        let secondDivTag = `<h2>Palindrome Word</h2><p>${setValue}</p>`
        getPalindromeWord.innerHTML = secondDivTag
        getCorrectWord.classList = "one-box"
        getPalindromeWord.classList = "second-box"
        searchInput.value = ""
    }
}