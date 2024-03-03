const inputSliderEl = document.getElementById("inputSlider");
const sliderValue = document.getElementById("sliderValue");
const passBox = document.getElementById("passBox");
const lowercase = document.getElementById("lowercase");
const uppercase = document.getElementById("uppercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");
const genBtn = document.getElementById("genBtn");
const copyIcon = document.getElementById("copyIcon");

sliderValue.textContent = inputSliderEl.value;
inputSliderEl.addEventListener("input", () => {
    sliderValue.textContent = inputSliderEl.value;
});

genBtn.addEventListener("click", ()=>{
    passBox.value = generatePassword();
});

let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allNumbers = "0123456789";
let allSymbols = "!@#$%^&*";

function generatePassword(){
    let genPass = "";
    let allChars = "";

    allChars += lowercase.checked ? lowerChars : "";
    allChars += uppercase.checked ? upperChars : "";
    allChars += numbers.checked ? allNumbers : "";
    allChars += symbols.checked ? allSymbols : "";

    let i = 1
    while (i<=inputSliderEl.value) {
        genPass += allChars.charAt(Math.floor(Math.random() * allChars.length));
        i++;
    }


    return genPass;
}

copyIcon.addEventListener("click", ()=>{
    if(passBox.value != "" || passBox.value.length >= 1){
        navigator.clipboard.writeText(passBox.value)
        copyIcon.innerText = "check";
        copyIcon.title = "Password Copied"

        setInterval(() => {
            copyIcon.innerText = "content_copy"
            copyIcon.title = "";
        }, 4000)
    }
});