function person () {
    this.name = 'john'
}

person.prototype.name = 'peter';
person.prototype.age = 23
const person1 = new person();
console.log(person1.name);
console.log(person1.age);