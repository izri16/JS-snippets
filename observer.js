function Subject() {
    this.observers = []
}
 
Subject.prototype.addObserver = function(o) {
      this.observers.push(o)
}
 
Subject.prototype.removeObserver = function(o) {
      this.observers.splice(this.observers.indexOf(o), 1)
}
 
Subject.prototype.notify = function(message) {
    this.observers.forEach((o) => {
        o.update(message)
    })
}


const o1 = {
    update: function(msg) {
        console.log('I am update', msg)
    }
}

const o2 = {
    update: function(msg) {
        console.log('I am update tooo', msg)
    }
}


const o3 = {
    update: function(msg) {
        console.log('Hey yo', msg)
    }
}

const s = new Subject()
s.addObserver(o1)
s.addObserver(o2)
s.notify('Hello')

s.removeObserver(o1)
s.addObserver(o3)
s.notify('Hello 2')

