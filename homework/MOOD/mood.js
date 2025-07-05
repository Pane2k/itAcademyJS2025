function randomDiap(n, m) {
    return Math.floor(Math.random() * (m - n + 1)) + n;
}

function mood(colorsCount) {
    console.time("TestTime")
    console.log('цветов: ' + colorsCount);

    // Премещены элементы на 1 в начало массива, убран пустой элемент ''  
    const colors = ['красный', 'оранжевый', 'жёлтый', 'зелёный', 
                    'голубой', 'синий', 'фиолетовый'];
    const ARR_LEN = colors.length // Длинна массива

    try {
        const MAX_TIME_TO_CALC = 1000 // ms на выполнение
        const START_TIME = Date.now() // Время начала выполнения 

        let used = {} // Созданный объект для хранения значений True или False 

        for (let i = 0; i < colorsCount; i++) {
            // Проверка по времени выполнения, нужно если 
            //  пользователь случайно ввел один и тот же цвет два раза. 
            //  Возникает изза проверки по размеру colors и проверки на присудствие цветов 
            //  Для исправления можно изменить строку "used[colors[n]] = true" на "used[n] = true"
            if (Date.now() - START_TIME > MAX_TIME_TO_CALC) {
                throw {
                    name: "TimeToCalculateError",
                    message: `ИСКЛЮЧЕНИЕ: Выполнение фукции было больше чем ${MAX_TIME_TO_CALC} мс, наврядли вы ввели столько цветов, чтобы было так долго. Установите время больше если требуется`
                }
            }
            // Проверка на то что у нас количество ключей у объекта
            //  меньше длинны массива со цветами
            if (Object.keys(used).length === ARR_LEN) {
                throw {
                    name: "OutOfColorsError",
                    message: "Цветов больше нет, больше не могу вывести иначе будет нарушение условий задачи"
                }
            }

            // Медленный способ изза постоянного перезапуска итерации цикла
            // const n = randomDiap(0, ARR_LEN - 1); 

            // Более быстрый способ поиска нового числа, 
            //  лучше вообще явно передавать что числа использовались 
            //  Быстрее предыдущего примерно в 15~8 раз по тестам, без console.log 
            //  (она слишком долго выполняется на массиве из 1000 элементов)
            let n = null
            do {
                // Изменён вызов функции, чтобы можно было указывать 
                //  сколько угодно цветов
                n = randomDiap(0, ARR_LEN - 1);
            } while (colors[n] in used)

            used[colors[n]] = true // установка флага 
            const colorName = colors[n]; // установка цвета
            console.log(colorName);
        }
    }
    catch (ex) {
        if (ex.name === "TimeToCalculateError") {
            // Исключение если слишком долго выполняется код
            console.error(ex.name + ": " + ex.message)
        }
        else if (ex.name === "OutOfColorsError") {
            // Исключение если больше нету цветов
            console.warn(ex.name + ": " + ex.message)
        }
        else {
            // Остаьные исключения
            console.error(ex.name + ": " + ex.message)
        }
    }
    console.timeEnd("TestTime")
}

mood(1000);