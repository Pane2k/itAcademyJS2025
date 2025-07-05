function randomDiap(n, m) {
    return Math.floor(Math.random() * (m - n + 1)) + n;
}

function mood(colorsCount) {
    console.time("TestTime")
    console.log('цветов: ' + colorsCount);

    const colors = ['','красный', 'оранжевый', 'жёлтый', 
            'зелёный', 'голубой', 'синий', 'фиолетовый'];
    const ARR_LEN = colors.length 
    
    let used = {}

    for (let i = 0; i < colorsCount; i++) {
        if (Object.keys(used).length === ARR_LEN - 1) {
            console.warn("БОЛЬШЕ НЕТ ЦВЕТОВ!!!"); break
        }
        const n = randomDiap(1, ARR_LEN - 1);
        if (n in used) {
            i--
            continue
        }
        used[n] = true // установка флага 
        const colorName = colors[n]; // установка цвета
        console.log(colorName);
    }
        
}

mood(3);