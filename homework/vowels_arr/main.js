const str = "Ехал Грека через реку, видит Грека в реке рак, сунул Грека руку в реку, рак за руку Греку цап"

const vowels = "уеёыаоэяию"
// function countVowels(str) {
//     const letters = "уеёыаоэяию"
//     const LETTERS_SET = new Set((letters + letters.toUpperCase()).split(""));

//     let howMuch = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (LETTERS_SET.has(str[i])){
//             howMuch++
//         }
//     }
//     return howMuch;
// }

function countVowelsWithForEach(str){
    const lowerCaseStr = str.toLowerCase().split('')
    const vowelsLetters = new Set("уеёыаоэяию")

    let howMuchVowels = 0
    
    lowerCaseStr.forEach(element => {
        if(vowelsLetters.has(element)) 
            howMuchVowels++
        }
    )
    return howMuchVowels
}

function countVowelsWithFilter(str){
    const lowerCaseStr = str.toLowerCase().split('')
    const vowelsLetters = new Set("уеёыаоэяию")

    let howMuchVowels = lowerCaseStr.filter(letter => vowelsLetters.has(letter)).length
    return howMuchVowels
}

function countVowelsWithReduce(str){
    const lowerCaseStr = str.toLowerCase().split('')
    const vowelsLetters = new Set("уеёыаоэяию")
    
    return lowerCaseStr.reduce((howMuchVowels, letter) => {
        if(vowelsLetters.has(letter)){
            return howMuchVowels + 1
        }
        return howMuchVowels
    }, 0)
}



const userStr = prompt("Введите любую строку", str)

let withForEach = countVowelsWithForEach(userStr)
let withFilter  = countVowelsWithFilter( userStr)
let withReduce  = countVowelsWithReduce( userStr)

console.log(withForEach)
console.log(withFilter)
console.log(withReduce)
alert('Количество гласных ' + '\n' 
    + 'c forEach: ' + withForEach + '\n'
    + 'с filter: ' + withFilter + '\n'
    + 'с reduce: ' + withReduce)

