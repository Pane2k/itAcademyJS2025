const formDef1 = [
    {
        label: "Название сайта:",
        kind: "longtext",
        name: "sitename",
    },
    { label: "URL сайта:", kind: "longtext", name: "siteurl" },
    {
        label: "Посетителей в сутки:",
        kind: "number",
        name: "visitors",
    },
    {
        label: "E-mail для связи:",
        kind: "shorttext",
        name: "email",
    },
    {
        label: "Рубрика каталога:",
        kind: "dropdown",
        name: "division",
        variants: [
            { text: "здоровье", value: 1 },
            { text: "домашний уют", value: 2 },
            { text: "бытовая техника", value: 3 },
        ],
    },
    {
        label: "Размещение:",
        kind: "radio",
        name: "payment",
        variants: [
            { text: "бесплатное", value: 1 },
            { text: "платное", value: 2 },
            { text: "VIP", value: 3 },
        ],
    },
    { label: "Разрешить отзывы:", kind: "check", name: "votes" },
    { label: "Описание сайта:", kind: "memo", name: "description" },
    { caption: "Опубликовать", kind: "submit" },
];

const formDef2 = [
    { label: "Фамилия:", kind: "longtext", name: "lastname" },
    { label: "Имя:", kind: "longtext", name: "firstname" },
    { label: "Отчество:", kind: "longtext", name: "secondname" },
    { label: "Возраст:", kind: "number", name: "age" },
    { caption: "Зарегистрироваться", kind: "submit" },
];

const dyn_form = document.getElementById('dyn_form_id')
const dyn_form2 = document.getElementById('dyn_form2_id')

function dynamic_form(formDef, formContainer) {
    const formElement = document.createElement('form')
    formElement.className = 'formWrap'
    formElement.action = 'https://fe.it-academy.by/TestForm.php'
    formElement.method = 'POST'

    formDef.forEach(element => {
        const rowDiv = document.createElement('div')
        rowDiv.classList.add('formElementWrap')
        let labelWidth = 0

        if (element.label) {
            const labelElement = document.createElement('span')
            labelElement.className = 'label'
            labelElement.textContent = element.label

            rowDiv.appendChild(labelElement)
        }

        switch (element.kind) {
            case 'longtext': {
                const inputElement = document.createElement('input')
                inputElement.className = 'longtext'
                inputElement.type = 'text'
                inputElement.name = element.name
                inputElement.style.width = '400px'

                rowDiv.appendChild(inputElement)
                break;
            }
            case 'shorttext': {
                const inputElement = document.createElement('input')
                inputElement.className = 'shorttext'
                inputElement.type = 'text'
                inputElement.name = element.name
                inputElement.style.width = '250px'

                rowDiv.appendChild(inputElement)
                break;
            }
            case 'number': {
                const inputElement = document.createElement('input')
                inputElement.className = 'number'
                inputElement.type = 'number'
                inputElement.name = element.name
                inputElement.style.width = '100px'

                rowDiv.appendChild(inputElement)
                break
            }
            case 'dropdown': {
                const selectElement = document.createElement('select')
                selectElement.name = element.name
                selectElement.style.width = '250px'
                selectElement.className = 'dropdown'

                element.variants.forEach(variant => {
                    const optionElement = document.createElement('option')
                    optionElement.value = variant.value
                    optionElement.textContent = variant.text
                    optionElement.selected = true

                    selectElement.appendChild(optionElement)
                })

                rowDiv.appendChild(selectElement)
                break;
            }
            case 'radio': {
                const radioGroupDiv = document.createElement('div')
                radioGroupDiv.style.width = '250px'
                radioGroupDiv.className = 'radio'
                element.variants.forEach(variant => {
                    const radioElement = document.createElement('input')
                    radioElement.type = 'radio'
                    radioElement.name = element.name
                    radioElement.value = variant.value
                    radioElement.checked = true

                    const radioLabel = document.createElement('label')
                    radioLabel.appendChild(radioElement)
                    radioLabel.appendChild(document.createTextNode(variant.text))

                    radioGroupDiv.appendChild(radioLabel)
                });


                rowDiv.appendChild(radioGroupDiv)
                break;
            }
            case 'check': {
                const checkElement = document.createElement('input')
                checkElement.type = 'checkbox'
                checkElement.name = element.name
                checkElement.className = 'check'

                rowDiv.appendChild(checkElement)
                break;
            }
            case 'memo': {
                const textAreaElement = document.createElement('textarea')
                textAreaElement.name = element.name
                textAreaElement.className = 'memo'
                rowDiv.className += ' memoWrap'

                rowDiv.appendChild(textAreaElement)
                break;
            }
            case 'submit': {
                const submitElement = document.createElement('input')
                submitElement.className = 'submit'
                submitElement.type = 'submit'
                submitElement.value = element.caption

                rowDiv.appendChild(submitElement)
                break;
            }
        }

        formElement.appendChild(rowDiv)
    });

    formContainer.appendChild(formElement)
}
dynamic_form(formDef1, dyn_form)
dynamic_form(formDef2, dyn_form2)