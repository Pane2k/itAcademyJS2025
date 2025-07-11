const str = "Ехал Грека через реку, видит Грека в реке рак, сунул Грека руку в реку, рак за руку Греку цап"

function countVowels(str) {
    const letters = "уеёыаоэяию"
    const LETTERS_SET = new Set((letters + letters.toUpperCase()).split(""));

    let howMuch = 0;
    for (let i = 0; i < str.length; i++) {
        if (LETTERS_SET.has(str[i])){
            howMuch++
        }
    }
    return howMuch;
}


const userStr = prompt("Введите любую строку", str)
let howMuch = countVowels(userStr)
console.log("Количество гласных: " + howMuch)

