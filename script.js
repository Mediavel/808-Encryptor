let encryptButton = document.getElementById("enButton")
let encryptionField = document.getElementById("enField")
let encryptionKeyfield = document.getElementById("enKeyField")
let customKeyButton = document.getElementById("customKey")
let test = customKeyButton.checked


let decryptButton = document.getElementById("decButton")
let decryptionField = document.getElementById("decField")
let decryptionKeyfield = document.getElementById("decKeyField")


let c = console.log

let alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "!",
    "@",
    "#",
    "$",
    "*",
    "?",
    ";",
    ":",
    ".",
    ",",
    "(",
    ")",
]

function makeKeyProtoOne(min, max){
    min = Math.ceil(min);  
    max = Math.floor(max); 
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



function encryptProtoOne() {
    let key = null
    
    if (customKeyButton.checked){
        key = encryptionKeyfield.value
        key = parseInt(key)
    }else{
        key = makeKeyProtoOne(1, 48);
    }
    // c(`Encryption key: ${key}`);

    let dataToEncrypt = encryptionField.value;
    let encryptedData = '';

    for (let i = 0; i < dataToEncrypt.length; i++) {
        let char = dataToEncrypt[i];
        let index = alphabet.indexOf(char);

        if (index !== -1) {
            c(index, "en index")
            let newIndex = (index + key) % alphabet.length; 
            c(newIndex, "en new index")
            encryptedData += alphabet[newIndex];
        } else {
            encryptedData += char; 
        }
    }
    
    encryptionField.value = encryptedData;
    encryptionKeyfield.value = key
}

function decryptProtoOne() {
    let key = decryptionKeyfield.value
    key = parseInt(key)
    // c(`decryption key: ${key}`, typeof key);

    let dataToDecrypt = decryptionField.value;
    let decryptedData = '';

    for (let i = 0; i < dataToDecrypt.length; i++) {
        let char = dataToDecrypt[i];
        let index = alphabet.indexOf(char);

        if (index !== -1) { // 
            c(index, "dec index")
            let newIndex = (index - -key) % alphabet.length; 
            c(newIndex, "dec new index")
            decryptedData += alphabet[newIndex];
            // c(decryptedData, "we are seeing")
        } else {
            decryptedData += char; 
        }
    }
    
    decryptionField.value = decryptedData;
    decryptionKeyfield.value = key
}


encryptButton.addEventListener("click", ()=>{
    encryptProtoOne()
}) 
decryptButton.addEventListener("click", ()=>{
    decryptProtoOne()
}) 


