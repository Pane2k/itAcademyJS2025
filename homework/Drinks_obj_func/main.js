const drinkStorage = new ObjStorageFunc()

// Заранее заготовленные напитки
drinkStorage.addValue('Мохито', {
    isAlcoholic: true,
    ingredients: ['Белый ром', 'Сахар', 'Лайм', 'Содовая', 'Мята', 'Лед'],
    recipe: 'В высоком стакане смешайте мяту и сахар. Добавьте сок лайма и разомните. Наполните стакан льдом, влейте ром и содовую. Перемешайте.'
});

drinkStorage.addValue('Домашний лимонад', {
    isAlcoholic: false,
    ingredients: ['Лимон', 'Сахар', 'Вода', 'Лед'],
    recipe: 'Смешайте свежевыжатый лимонный сок с сахаром и водой. Охладите. Подавайте со льдом и долькой лимона.'
});

drinkStorage.addValue('Кофе Латте', {
    isAlcoholic: false,
    ingredients: ['Эспрессо', 'Молоко'],
    recipe: 'Приготовьте порцию эспрессо. Взбейте горячее молоко до образования пенки. Аккуратно влейте взбитое молоко в эспрессо.'
});

drinkStorage.addValue('Маргарита', {
    isAlcoholic: true,
    ingredients: ['Текила', 'Апельсиновый ликер (Куантро)', 'Сок лайма', 'Соль', 'Лед'],
    recipe: 'Смочите края бокала соком лайма и окуните в соль. В шейкере со льдом смешайте текилу, апельсиновый ликер и сок лайма. Процедите в бокал.'
});

drinkStorage.addValue('Зеленый чай с жасмином', {
    isAlcoholic: false,
    ingredients: ['Зеленый чай с жасмином', 'Горячая вода'],
    recipe: 'Залейте чайные листья горячей водой (около 80°C). Дайте настояться 2-3 минуты. Процедите и подавайте горячим.'
});



function checkStr(str){
    if(str === null) throw new Error('cancel')
    if(str === '') throw new Error('emptyStr')
}

// Методы вызыва пользователем
function userSetNewDrink(storage = drinkStorage){
    try{
        const drinkName = prompt('Введите название напитка', 'Сбитень')
        checkStr(drinkName)

        const isAlcoholic = confirm('Напиток алкогольный?')
        
        let ingredients = prompt('Введите ингредиенты через запятую', 'Вода, Мёд, Корица, Гвоздика, Имбирь, Мускатный орех')
        checkStr(ingredients)
        ingredients = ingredients.split(',')
        
        const recipe = prompt('Введите рецепт', 'Растворить мёд в горячей воде. Добавить все специи и довести до кипения. Варить на медленном огне 10-15 минут, затем дать настояться под крышкой еще 30 минут. Процедить и подавать горячим.')
        checkStr(recipe)
        
        storage.addValue(drinkName, {isAlcoholic, ingredients, recipe})
    }
    catch (ex){
        if(ex.message === 'cancel'){
            alert("Ввод был прерван, напиток не сохранен")
        }
        else if(ex.message === 'emptyStr'){
            alert("Вы ввели пустую строку, напиток не сохранен")
        }
        else {
            console.error("Произошла непредвиденная ошибка:", ex);
        }
    }
}

function userGetDrink(storage = drinkStorage){
    try{
        const drinkName = prompt('Введите название напитка который хотите получить:', 'Сбитень')
        checkStr(drinkName)

        const storageValueData = storage.getValue(drinkName)
        console.log(storageValueData)
        if(storageValueData === undefined) throw new Error('notExist')
    alert(
`Напиток ${drinkName}
Алкогольный: ${storageValueData.isAlcoholic?'да':'нет'}
Ингредиенты: ${storageValueData.ingredients}
Рецепт приготовления:
${storageValueData.recipe}`)
    }
    catch (ex){
        if(ex.message === 'cancel'){
            alert("Ввод был прерван")
        }
        else if(ex.message === 'emptyStr'){
            alert("Вы ввели пустую строку")
        }
        else if(ex.message ==='notExist'){
            alert('Данного напитка не существует')
        }
        else {
            console.error("Произошла непредвиденная ошибка:", ex);
        }
        
    }
}

function userDeleteDrink(storage = drinkStorage){
    try{
        const drinkName = prompt('Введите название напитка который хотите удалить:', 'Сбитень')
        checkStr(drinkName)

        let delRes = storage.deleteValue(drinkName)
        if(delRes){
            alert('Напиток ' + drinkName + ' удален успешно')
        }
        else{
            alert('Данного напитка не существует')
        }
    }
    catch(ex){
        if(ex.message === 'cancel'){
            alert("Ввод был прерван, напиток не удален")
        }
        else {
            console.error("Произошла непредвиденная ошибка:", ex);
        }
    }
}

function userGetAllDrinks(storage = drinkStorage){
    const allDrinks = storage.getKeys()
    alert('Список напитков:\n' + allDrinks.map(drink => '   ' + drink).join('\n'))
}