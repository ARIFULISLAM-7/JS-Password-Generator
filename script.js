let inputslider = document.getElementById("inputslider");
let slidervalue  = document.getElementById("slidervalue");
let passbox  = document.getElementById("passbox");
let lowercase  = document.getElementById("lowercase");
let uppercase  = document.getElementById("uppercase");
let numbers  = document.getElementById("numbers");
let symbols  = document.getElementById("symbols");
let genBtn  = document.getElementById("genBtn");
let copyicon = document.getElementById("copy_icon");

// showing inputslider value.
slidervalue.textContent = inputslider.value;
inputslider.addEventListener('input', () => {
    slidervalue.textContent = inputslider.value;
});

genBtn.addEventListener('click', () => {
    passbox.value = generatePassword();
});

let upperChars = "ABCEDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let allnumbers = "0123456789";
let allsymbols = "~!@#$%^&*";

// function to generate password.
function generatePassword(){
    let genPassword = "";
    let allChars = "";

    allChars += lowercase.checked ? lowerChars : "";
    allChars += uppercase.checked ? upperChars : "";
    allChars += numbers.checked ? allnumbers : "";
    allChars += symbols.checked ? allsymbols : "";

    if (allChars == "" || allChars.length == 0) {
        return genPassword;
    }

    let i = 1; 
    while (i <= inputslider.value){
    genPassword += allChars.charAt(Math.floor(Math.random() 
    * allChars.length));
    i++;
    }
    return genPassword;
}
copyicon.addEventListener('click', () => {
    if (passbox.value != "" || passbox.value.length >= 1){
    navigator.clipboard.writeText(passbox.value);
    copyicon.innerText = "👍🏻";
    copyicon.title = "Password Copied";
    
    setTimeout(() => {
        copyicon.innerText = "content_copy"
        copyicon.title = "";
    }, 3000)
    }
}); 