// /* alert(1) //приветстие при прогрузке страницы, только в браузере */

// // document.querySelector('h1').style.color = 'red' // изменяем цвет селектора h1 в документе

// /* ПЕРЕМЕННЫЕ
//  var name = 'Olga' //устаревшая конструкция, лучше не использовать
// const lastName = 'Baranova' //не изменяемая переменная - константа
// let age = 41 //более новая консрукция переменной, лучше всегда использовать let если переменная возможно будет изменяемой */

// /* const firstName = 'Olga' //тип данных string
// const age = 41 //тип данных number
// const isProgrammer = true //тип данных boolean
//  */
// // console.log(isProgrammer) проверка в консоли - вывод определенной переменной, которую хотим просмотреть значение

// // МУТИРОВАНИЕ
// // console.log('Имя человека: ' + firstName + ', а возраст человека: ' + age) -- пример вывода данных переменных, смотреть в консоли
// // prompt('Введите фамилию') //простозапросит переменную, но никуда её не запишет - всплывающее окошко при открытии, для примера
// /* const lastName = prompt('Введите фамилию')
// alert(firstName + ' ' + lastName) */

// // ОПЕРАТОРЫ
// /* let currentYear = 2022
// const birthYear = 1980
// const ageYear = currentYear - birthYear

// console.log(ageYear) //в консоли увидим результат вычисления возраста

// const a = 10
// const b = 5
// let c = 32 */

// // c += a соответствует c = c + a
// // c -= a соответствует c = c - a
// // c *= a соответствует c = c * a
// // с /= a соответствует c = c / a
// // console.log(a + b)  вариант вычислений
// // console.log(a - b) вариант вычислений
// // console.log(a * b) вариант вычислений
// // console.log(a / b) вариант вычислений
// // console.log(++currentYear)
// // console.log(--currentYear)
// // console.log(c) вариант вычислений

// // ТИПЫ ДАННЫХ /// закомментировать Shift+Alt+A или Ctrl+/(на расскладке клавиатуры)
// // const isProgrammer = true
// // const name = 'Olga'
// // age = 41
// // let x
// // console.log(typeof isProgrammer)
// // console.log(typeof name)
// // console.log(typeof age)
// // console.log(typeof x)

// // ПРИОРИТЕТ ОПЕРАТОРОВ /// в поисковике запрашивать mdn и название оператора, к примеру "приоритет операторов"- лучшее русскоязычное описание ///
// /* const fullAge = 41
// const birthYear = 1980
// const currentYear = 2022

// const isFullAge = currentYear - birthYear >= fullAge //42>=43 выведится true
// console.log(isFullAge) */

// // УСЛОВНЫЕ ОПЕРАТОРЫ
// /* const courseStatus = 'fail' // ready, fail, pending

// if (courseStatus === 'ready') {
//   console.log('Курс уже готов и его можно проходить')
// } else if (courseStatus === 'pending') {
//   console.log('Курс пока в разработке')
// } else {
//   console.log('Курс не получился')
// }

// const isResdy = false */

// /* if (isResdy) {
//   console.log('Всё готово!')
// } else {
//   console.log('НЕ готово!')
// } */ //это заменяем строчкой ниже, выполняет ту же функцию, но запись меньше
// //тернарное выражение
// // isResdy ? console.log('Готово!') : console.log('НЕ готово!')

// // const num1 = 42
// // const num2 = '42'
// // console.log (num1 === num2)

// // БУЛЕВАЯ ЛОГИКА mdn логические операторы
// // && логическое И
// // || логическое или

// // https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Expressions_and_Operators#%D0%BB%D0%BE%D0%B3%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5_%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80%D1%8B

// // ФУНКЦИИ

// // function calculateAge(year) {
// //   return 2022 - year
// // }
// // // console.log(calculateAge(1980))
// // // console.log(calculateAge(1970))
// // // console.log(calculateAge(1939))

// // function logInfoAbout(name, year) {
// //   const age = calculateAge(year)

// //   if (age > 0) {
// //     console.log('Человек по имени ' + name + ' сейчас имеет возраст ' + age)
// //   } else {
// //     console.log('Это уже будущее!')
// //   }
// // }
// // logInfoAbout('Olka', 1980)
// // logInfoAbout('Игорь', 1970)
// // logInfoAbout('Маня', 2025)

// // МАССИВЫ обозначаются []

// // const cars = ['Mazda', 'Honda', 'Mersedes'] //так правильнее, или см ниже
// // // const cars = new Array('Mazda', 'Honda', 'Mersedes')

// // console.log(cars) // список массива, cars.length = получим длину массива, в нашем случае - это 3 элемента начиная от 0 (0, 1, 2)
// // console.log(cars[1])
// // console.log(cars[0])
// // console.log(cars[3])

// // cars[0] = 'Porsche'
// // console.log(cars)
// // cars[3] = 'Mazda'
// // console.log(cars)

// // ЦИКЛЫ

// // const cars = ['Mazda', 'Honda', 'Mersedes', 'Porsche']

// // // for (let i = 0; i < cars.length; i++) {
// // //   const car = cars[i]
// // //   console.log(car)
// // // }  // это правильно записать более коротким кодом, см.ниже

// // for (let car of cars) {
// //   console.log(car)
// // }

// // ОБЪЕКТЫ создаётся группа через фигурные скобки

// // const person = {
// //   firstName: 'Olga',
// //   lastName: 'Baranova',
// //   year: 1980,
// //   languages: ['RU', 'EN', 'UKR'],
// //   hasWife: false,
// //   greet: function () {
// //     console.log('greet выполняется')
// //   },
// // }
// // // console.log(person) //получаем всё данные в выводе
// // // console.log(person.firstName) // получаем данные по firstName
// // //console.log(person['firstName']) // или так по firstName
// // // или
// // const key = 'year'
// // console.log(person[key])

// // person.greet()

// // NUMBER  ЧИСЛА
// // const num = 42 // integer целое цисло
// // const float = 42.42 // float дробное число
// // const pow = 10e3 // при такой записи числа, при отображении, число возводится в 3 степень, т.е. будет 10000
// // console.log(num)
// // console.log(float)
// // console.log(pow)

// // console.log('MAX_SAFE_INTEGER ', Number.MAX_SAFE_INTEGER) // наибольшее число
// // console.log('Math.pow 53 ', Math.pow(2, 53) - 1) // наибольшее число это 2 в степени 53 минус 1
// // console.log('MIN_SAFE_INTEGER ', Number.MIN_SAFE_INTEGER) // наименьшее число
// // console.log('MAX_VALUE', Number.MAX_VALUE) // наибольшее значение
// // console.log('MIN_VALUE', Number.MIN_VALUE) //наименьшее значение
// // console.log('POSITIVE_INFINITY', Number.POSITIVE_INFINITY) // зарезервированные значения бесконечности
// // console.log('NEGATIV_INFINITY', Number.NEGATIVE_INFINITY) //зарезервированные значения бесконечности
// // console.log(Number.NaN) // Not a number
// // console.log(typeof NaN)

// // const stringInt = '40' // текстовое значение целого числа
// // const stringFloat = '40.42' // текстовое значение дробного числа
// // console.log(parseInt(stringInt) + 2) // преобразует ЦЕЛОЕ текстовое число в число и прибавляет 2, также можно записать console.log(Number.parseInt(stringInt) + 2) или см.ниже
// // console.log(+stringInt + 2)

// // // для дробных подобные операции
// // console.log(parseFloat(stringFloat) + 2)
// // console.log(+stringFloat + 2)

// // console.log(0.4 + 0.2) // выводит результат сложения без сокращения количества знаков после запятой
// // console.log((0.4 + 0.2).toFixed(4)) // оперант toFixed указывает фиксированое количество знаков после запятой, в данном случае 4, отсекает без округлений
// // console.log(parseFloat((0.4 + 0.2).toFixed(1)))

// // BIGINT

// //console.log(900719925474099199999999n)
// // console.log(parseInt(10n) - 4)
// // console.log(10n - BigInt(4))
// // console.log(5n / 2n) // дает в результате только целое цисло, отсекает дробную часть

// //MATH математические функции

// // console.log(Math.E) // число Е
// // console.log(Math.PI) // число PI
// // console.log(Math.sqrt(25)) // квадратный корень из цисла
// // console.log(Math.pow(5, 3)) // возведение числа 5 в степень 3, в данном случае
// // console.log(Math.abs(-42)) // модуль числа
// // console.log(Math.max(42, 15, 34, 11, 422, 48)) // определяет наибольшее число
// // console.log(Math.floor(4.9)) // округляет дробное число всегда в меньшую сторону
// // console.log(Math.ceil(4.1)) // округляет дробное число всегда в большую сторону
// // console.log(Math.round(4.9)) // округляет число к ближайшему целому числу
// // console.log(Math.trunc(4.9)) // округляет число, удаляя дробную часть
// // console.log(Math.random())

// // пример - создать функцию которая будет возвращать случайное число в диапазане каких-то двух чисел
// // function getRandomBetween(min, max) {
// //   return Math.trunc(Math.random() * (max - min) + min)
// // }
// // console.log(getRandomBetween(10, 42))

// // СТРОКИ

// // const name = 'Olga'
// // const age = 41

// // function getAge() {
// //   return age
// // }
// // //const output = 'Привет, меня зовут ' + name + ', мне ' + age + ' год.'
// // const output = `Привет, меня зовут ${name} и мне ${getAge} год!`
// // console.log(output)

// const name = 'Olga'
// console.log(name.length) // выясняем длину переменной
// console.log(name.toUpperCase()) // пишем переменную заглавными буквами
// console.log(name.toLowerCase()) // пишем переменную в нижнем регистре
// console.log(name.charAt(2)) // выясняем какой символ в какой позиции
// console.log(name.indexOf('ga')) // выясняем с какого символа по счёту начинается нужный слог фраза и т.п.
// console.log(name.indexOf('!')) // выясняем с какого символа по счёту начинается нужный слог фраза и т.п., если такого символа или слога и т.п. нет, то значение будет -1
// console.log(name.startsWith('Olg')) //проверяем, начинается ли строка с ____ значения, если да истина, нет - ложь
// console.log(name.toLowerCase().startsWith('olg')) //проверяем, начинается ли строка с ____ значения, если да истина, нет - ложь
// console.log(name.startsWith('olg')) // преобразем проверку в нижний регистр и проверяем, начинается ли строка с ____ значения, если да истина, нет - ложь
// console.log(name.endsWith('ga')) //проверка заканчивается ли указанными символами
// console.log(name.repeat(3)) // повтор переменной указанное количество раз
// const string = '    password   ' // переменная с пробелами для примера
// //console.log(string.trim()) // убираем все пробелы при выводе переменной
// console.log(string.trimLeft()) // убираем пробелы слева
// console.log(string.trimRight()) // убираем пробелы справа

/* 
function logPerson(s, name, age) {
  if (age < 0) {
    age = 'Ещё не родился'
  }
  return `${s[0]}${name}${s[1]}${age}${s[2]}`
}
const personName = 'Olga'
const personName2 = 'Игорь'
const personAge = 41
const personAge2 = -10
const output = logPerson`Имя: ${personName}, Возраст: ${personAge}!`
console.log(output)
const output2 = logPerson`Имя: ${personName2}, Возраст: ${personAge2}!`
console.log(output2)
*/

// ФУНКЦИИ
/*
// Function Expression  - не можем размещать ниже данных greet
const greet2 = function greet2(name) {
  console.log('Привет 2 - ', name)
}

greet('Лена')
greet2('Лена')

// Function Declaration - можем размещать саму функцию ниже данных greet, лучше использовать данный метод нписания функций
function greet(name) {
  console.log('Привет - ', name)
}

// console.log(typeof greet)
// console.dir(greet)

// Анонимные функции
let counter = 0
const interval = setInterval(function () {
  if (counter === 5) {
    clearInterval(interval)
  } else {
    console.log(++counter)
  }
}, 1000)
*/

// Стрелочные функции
/*
function greet(name) {
  console.log('Привет - ', name)
}
const arrow = (name) => {
  console.log('Привет - ', name)
}
arrow('Olga')

const arrow2 = (name) => console.log('Привет - ', name)
arrow2('Olga')

const pow2 = (num) => num ** 2
console.log(pow2(5))
*/

// Параметры по умолчанию

/* 
const sum = (a, b) => a + b
console.log(sum(4, 2))
*/

// const sum = (a, b = 2) => a + b
// console.log(sum(4))

// const sum = (a = 2, b = a - 1) => a + b
// console.log(sum())

/*
function sumAll(...all) {
  let result = 0
  for (let num of all) {
    result += num
  }
  return result
}

const res = sumAll(1, 2, 3, 4, 5)
console.log(res)
*/

// Замыкание
/*
function createNumber(name) {
  return function (lastName) {
    console.log(name + lastName)
  }
}
const logWithLastName = createNumber('Olga')
console.log(logWithLastName(' Baranova'))
console.log(logWithLastName(' Kolesnichenko'))
*/

// МАССИВЫ
/*
const cars = ['Мазда', 'Форд', 'БМВ', 'Мерседес']
const fib = [1, 1, 2, 3, 5, 8, 13]

cars.push('Рено', 'Пежо') // метод добавления в массив новых значений в конец массива
cars.unshift('Волга') // метод добавления в массив новых значений в начало массива
cars.shift() // удаление первой записи массива
console.log(cars)
*/

// const cars = ['Мазда', 'Форд', 'БМВ', 'Мерседес']
// const fib = [1, 1, 2, 3, 5, 8, 13]

// console.log(cars.reverse()) // отражает данные массива в обратном порядке

// const index = cars.indexOf('БМВ') // определяем индекс у позиции БМВ и запонимаем как переменную
// cars[index] = 'Порше' // меняем БМВ на Порше

//console.log(cars.includes('Мазда')) //проверка наличия элемента - будет истина или ложь

// хотим чтоб в массиве карс все элементы были в верхнем регистре
// const upperCaseCars = cars.map((car) => {
//   return car.toUpperCase()
// })
// console.log(upperCaseCars)

const people = [
  { name: 'Olga', budjet: 4200 },
  { name: 'Elena', budjet: 3500 },
  { name: 'Dima', budjet: 1700 },
];
/*// суммируем все бюджеты
const allBudjet = people.reduce((acc, person) => {
  acc += person.budjet
  return acc
}, 0)
console.log(allBudjet)
*/
/* // суммируем все бюджеты свыше 2000
const allBudjet = people.reduce((acc, person) => {
  if (person.budjet > 2000) {
    acc += person.budjet
  }
  return acc
}, 0)
console.log(allBudjet)
*/
/*
// записываем опрецию выше более коротким методом через фильтр
const allBudjet = people
  .filter((person) => person.budjet > 2000)
  .reduce((acc, person) => {
    acc += person.budjet
    return acc
  }, 0)
console.log(allBudjet)
*/

/*
// Задача 1 взять строчку и перевернуть её в обратном порядке
const text = 'Привет, мы изучаем JavaScript'
const reverseText = text.split(',').reverse().join(' ') // text.split(',') делим текст по запятой, преобразуется в массив из двух элементов
console.log(text)
console.log(reverseText)
*/

// ОБЪЕКТЫ

/*const person = {
  name: 'Olga',
  age: '41',
  isProgrammer: true,
  langueges: ['ru', 'en', 'ukr'],
  // 'complex key': 'Complex Value',
  // ['key_' + (1 + 3)]: 'Completed Key', //key_4
  greet() {
    console.log('greet for person')
  },
  info() {
    console.info('Информация про человека по имени:', this.name)
  },
}
*/
// console.log(person.name)
// console.log(person['age'])
// console.log(person.age)

// console.log(person['complex key'])
// person.age++
// person.langueges.push('by')
// person['key_4'] = undefined
// delete person['key_4']
// console.log(person)

// const { name, newAge = 10, langueges } = person
// console.log(name, newAge, langueges)

// for (let key in person) {
//   if (person.hasOwnProperty(key)) { //так как for in метод проверяет все ключи объекта, даже прототипные, мы указваем, что мы проверяем только назначенные нами ключи
//     console.log('key:', key)
//     console.log('value:', person[key])
//   }
// }
//заменяем схему выше
// Object.keys(person).forEach((key) => {
//   console.log('key:', key)
//   console.log('value:', person[key])
// })

// CONTEX
// person.info()

// const logger = {
//   keys() {
//     console.log('Object Keys:', Object.keys(this))
//   },
// }
// const bound = logger.keys.bind(person)
// bound()
// logger.keys.call(person) // разотает по аналогии с методом bound минуя переменную

// АСИНХРОННОСТЬ  EVENT LOOP

// const timeout = setTimeout(() => {
//   console.log('После тайм аута')
// }, 2500)
// clearTimeout(timeout)

// const interval = setInterval(() => {
//   console.log('Интервал 1сек')
// }, 1000)
// clearTimeout(interval)

// Работа с DOM
const heading = document.getElementById('hello'); //создали переменную для id="hello"
setTimeout(() => {
  // запускаем функцию с отсроченным стартом для переменной heading
  addStyleTo(heading);
}, 2000);

function addStyleTo(node) {
  //создали функцию меняющую определенные стили
  node.textContent = 'Поменяли название через скрипт';
  node.style.color = 'red';
  node.style.textAlign = 'center';
  node.style.backgroundColor = 'black';
}

const heading2 = document.querySelector('h2'); // данный селектор возвращает только первый встреченный элемент в документе, если будет ещё один h2, он его не захватит
console.log(heading2);
