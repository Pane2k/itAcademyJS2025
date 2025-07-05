const str = "Ехал Грека через реку, видит Грека в реке рак, сунул Грека руку в реку, рак за руку Греку цап"

function countVowels(str) {
    const letters = "уеёыаоэяию"
    const LETTERS_SET = new Set((letters + letters.toUpperCase()).split(""));

    let howMuch = 0;
    for (let i = 0; i < str.length; i++) {
        LETTERS_SET.has(str[i]) ? howMuch++ : 0
    }
    return howMuch;
}

let howMuch = countVowels(str)
console.log("Количество гласных: " + howMuch)
alert(`В строке "${str}" содерижится ${howMuch} гласных букв`)
