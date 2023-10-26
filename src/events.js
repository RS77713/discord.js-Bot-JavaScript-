const event = require('events');//it lets you handle and know executing some (conneted, disconnected etc.)junk code
//const util = require('util');

const myEmitter = new event.EventEmitter(); //lets catch event

myEmitter.on('someEvent', () =>{   //set subscribtion to the event
    console.log(msg);
})

//let Person = function(name) {
  //  this.name = name;
//}

//util.inherits(Person, event.EventEmitter);
class Person extends event.EventEmitter {
    constructor(name) {
        super();
        this.name = name;
    }
}
const lacis = new Person('Lacis');
const vilks = new Person('Vilks');
const briedis = new Person('Briedis');

const people = [lacis, vilks, briedis];

people.forEach(person => {
    person.on('speak', msg => {
        console.log(`${person.name} says ${msg}`);
    })
})

lacis.emit('speak', 'hello!');
//myEmitter.emit('someEvent','someEvent was fired');