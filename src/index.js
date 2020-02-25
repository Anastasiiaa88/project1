/* ДЗ 6 - Асинхронность и работа с сетью */

/*
 Задание 1:

 Функция должна возвращать Promise, который должен быть разрешен через указанное количество секунду

1.2: Необходимо выбрасывать исключение в случаях:
  - array не массив или пустой массив (с текстом "empty array")
  - fn не является функцией (с текстом "fn is not a function")

Зарпещено использовать встроенные методы для работы с массивами

Пример:
  isAllTrue([1, 2, 3, 4, 5], n => n < 10) // вернет true
  isAllTrue([100, 2, 3, 4, 5], n => n < 10) // вернет false
*/
function isAllTrue(array, fn) {
    if ( array.length === 0)
        try {
            throw new Error ('empty array');
        } catch (e) {
            console.log(e.name + ':' + e.message);
        };
    if ( typeof  fn !== function() {
        try {
            throw new Error ('fn is not function');
        } catch (e) {
            console.log(e.name + ':' + e.message);
        }
    })
        if (array.every(fn)) {
            return true;
        };
    return false;
}

/*
 Задание 2:

 2.1: Функция должна вернуть Promise, который должен быть разрешен с массивом городов в качестве значения

 Массив городов можно получить отправив асинхронный запрос по адресу
 https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json

 2.2: Элементы полученного массива должны быть отсортированы по имени города

Пример:
  isSomeTrue([1, 2, 30, 4, 5], n => n > 20) // вернет true
  isSomeTrue([1, 2, 3, 4, 5], n => n > 20) // вернет false
*/
function isSomeTrue(array, fn) {
    if ( array.length === 0)
        try {
            throw new Error ('empty array');
        } catch (e) {
            console.log(e.name + ':' + e.message);
        };
    if (typeof  fn !== function() {
        try {
            throw new Error ('fn is not function');
        } catch (e) {
            console.log(e.name + ':' + e.message);
        }
    })

        let isSomeTrue = false;

    for (let item of array) {
        let isFiltered = fn(item);

        if ( isFiltered) {
            isSomeTrue = true;
        }
    }

    /*
    Задание 3:

    3.1: Функция принимает заранее неизветсное количество аргументов, первым из которых является функция fn
    Функция должна поочередно запустить fn для каждого переданного аргумента (кроме самой fn)

    3.2: Функция должна вернуть массив аргументов, для которых fn выбросила исключение

    3.3: Необходимо выбрасывать исключение в случаях:
      - fn не является функцией (с текстом "fn is not a function")
    */
    function returnBadArguments(fn) {
        let arr = [];
        if (typeof fn !== 'function') {
            throw new Error ('fn is not a function');
        }
        for ( let i = 1; i < arguments.length; i++) {
            try {
                if ( fn (arguments[i])) {
                    throw new Error();
                }
            } catch (e) {
                arr.push(arguments[i]);
            }
        }
        return arr;
    }
    /*
    Задание 4:

    4.1: Функция имеет параметр number (по умолчанию - 0)

    4.2: Функция должна вернуть объект, у которого должно быть несколько методов:
      - sum - складывает number с переданными аргументами
      - dif - вычитает из number переданные аргументы
      - div - делит number на первый аргумент. Результат делится на следующий аргумент (если передан) и так далее
      - mul - умножает number на первый аргумент. Результат умножается на следующий аргумент (если передан) и так далее

    Количество передаваемых в методы аргументов заранее неизвестно

    4.3: Необходимо выбрасывать исключение в случаях:
      - number не является числом (с текстом "number is not a number")
      - какой-либо из аргументов div является нулем (с текстом "division by 0")
    */
    function calculator(number = 0) {
        if (typeof number !== 'number') {
            throw new Error ('number is not a number');
        }

        let obj = {
            sum: function (...rest) {
                for (let item of rest) {
                    number += item;
                }
                return number;
            },
            dif: function (...rest) {
                for (let item of rest) {
                    number -= item;
                }
                return number;
            },
            div: function (...rest) {
                for (let item of rest) {
                    number /= item;
                }
                return number;
            },
            mul: function (...rest) {
                for (let item of rest) {
                    number *= item;
                }
                return number;
            }
            return 0;
        }));
    })
})
}

export {
    delayPromise,
    loadAndSortTowns
};
