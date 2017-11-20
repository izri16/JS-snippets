/*
 * Prototype/Constructor pattern
 *
 * */

function Car(model, year, miles) {
    this.model = model
    this.year = year
    this.miles = miles

    /* Assigning methods in the constructor
     * would case that are redefined
     * every time the new object is created.*/
}

Car.prototype.start = function () {
    console.log(this.model + ' has started ...')
}


/**
 * Revealing Prototype pattern
 * */

function Bike(name) {
    this.name = name
}

Bike.prototype = function() {
    function doPrivate() {
        console.log('Private')
    }

    function doSomething() {
        console.log('Go go go')
        doPrivate()
    }
    
    return {
        start: doSomething,
    }
}()

/* By simply prefixing a call to a constructor function with the
 * keyword "new", we can tell JavaScript we would like the
 * function to behave like a constructor and instantiate
 * a new object with the members defined by that function.
 */
const ford = new Car('Ford', 2008, 30000)
const honda = new Car('Honda', 209, 5000)

ford.start()
honda.start()

const myBike = new Bike('my bike')
myBike.start()

