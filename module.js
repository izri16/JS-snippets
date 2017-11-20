/*
 * Simple Revealing Module pattern
 *
 **/

const counter = ((name = 'custom counter') => {
    let counter = 0

    function isPositive(x) {
        return x >= 0
    }

    function increment(n = 1) {
        if (!isPositive(n)) {
            throw new Error('Value must be positive')
        }
        counter += n
    }

    function getCounterValue() {
        return counter
    }

    return {
        name,
        increment,
        getValue: getCounterValue,
    }

})()

console.log(counter.getValue())
counter.increment(7)
console.log(counter.getValue())

