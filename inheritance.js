/*
 * "Inheriting" objects do not have functionality copied over
 * to them, instead the functionality they inherit is linked
 * to via the prototype chain
 * (often referred to as prototypal inheritance).
 *
 * Because of the way JavaScript works, with the prototype chain, etc.,
 * the sharing of functionality between objects is often called delegation.
 * Specialized objects delegate functionality to a generic object type.
 *
 * Each object has a private property (referred to as [[Prototype]])
 * which holds a link to another object called its prototype.
 * That prototype object has a prototype of its own, and so on until an object
 * is reached with null as its prototype. By definition, null has no prototype,
 * and acts as the final link in this prototype chain.
 *
 * Nearly all objects in JavaScript are instances of Object which sits on the
 * top of a prototype chain.
 *
 * When trying to access a property of an object, the property will not only be
 * sought on the object but on the prototype of the object, the prototype of the
 * prototype, and so on until either a property with a matching name is found or
 * the end of the prototype chain is reached.
 * 
 * It should not be confused with the func.prototype property of functions,
 * which instead specifies the [[Prototype]] to be assigned to all instances of
 * objects created by the given function when used as a constructor.
 */

// constructor function
function Person(first, last, age, gender, interests) {
    this.name = {
        first,
        last,
    }
    this.age = age
    this.gender = gender
    this.interests = interests
}

Person.prototype.greeting = function() {
    console.log('Hi! I\'m ' + this.name.first + '.')
}

// constructor function
function Teacher(first, last, age, gender, interests, subject) {
    Person.call(this, first, last, age, gender, interests)
    this.subject = subject
}

// new object has Person.prototype as its prototype
Teacher.prototype = Object.create(Person.prototype)

// otherwise Teacher.prototype's constructor property
// would be equal to Person()
Teacher.prototype.constructor = Teacher

Teacher.prototype.greeting = function() {
    let prefix
    if (this.gender === 'male' || this.gender === 'Male') {
        prefix = 'Mr.'
    } else if (this.gender === 'female' || this.gender === 'Female') {
        prefix = 'Mrs.'
    } else {
        prefix = 'Mx.'
    }
    console.log(`I am ${prefix} ${this.name.last}, ${this.subject}.`)
}

const person1 = new Person('Jozo', 'Griffiths', 31, 'male',
        ['football', 'cookery'])

const teacher1 = new Teacher('Dave', 'Griffiths', 31, 'male',
        ['football', 'cookery'], 'mathematics')

teacher1.greeting()
person1.greeting()

console.log(person1.hasOwnProperty('name'))
console.log(person1.hasOwnProperty('greeting'))

/*
 * ES6 'class', 'extends', ... keywords are only syntax sugar for
 * prototypal inheritance
 */

