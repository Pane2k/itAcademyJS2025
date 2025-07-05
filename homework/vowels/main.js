const str = "Ехал Грека через реку, видит Грека в реке рак, сунул Грека руку в реку, рак за руку Греку цап"

function countVowels(str) {
    

    // == МЕТОД ПОЛУЧЕНИЯ ЦИФРОВОГО ЗНАЧЕНИЯ БУКВ В UTF-8 == 
    // const letters = "уеёыаоэяию" // гласные буквы
    // let intLetters = []
    // for (let i = 0; i < letters.length; i++) {
    //     intLetters[i] = Number(letters.charCodeAt(i)); // получение символа
    //     intLetters[i+letters.length] = Number(letters.charCodeAt(i)-32) // смещение на 32 символа для получения больших букв 
    // }

    // == ГОТОВЫЙ МАССИВ ЦИФРОВЫХ ЗНАЧЕНИЙ ДЛЯ ОПТИМИЗАЦИИ ==
    // const intLetters = [
    //     1091, 1077, 1105, 1099, 1072, 1086, 1101, 1103, 1080, 1102,
    //     1059, 1045, 1073, 1067, 1040, 1054, 1069, 1071, 1048, 1070
    // ]
    

    // Сделали из значений массива сет для сложности алгоритма O(n) - очень эффективный метод
    const LETTERS_SET = new Set([
        1091, 1077, 1105, 1099, 1072, 1086, 1101, 1103, 1080, 1102,
        1059, 1045, 1073, 1067, 1040, 1054, 1069, 1071, 1048, 1070
    ]);
    let howMuch = 0;
    console.time("set");
    for (let i = 0; i < str.length; i++) {
        // Проверяем есть ли в set нужное нам значение
        if (LETTERS_SET.has(str.charCodeAt(i))) {
            howMuch++;
        }
    }
    console.timeEnd("set");
    return howMuch;
}

let howMuch = countVowels(str)
console.log("Количество гласных: " + howMuch)
alert(`В строке "${str}" содерижится ${howMuch} гласных букв`)
