class Person {
    constructor(firstAndLast) {
        this.getFirstName = () => firstAndLast.slice(0,firstAndLast.indexOf(" "));
        this.getLastName = () => firstAndLast.slice(firstAndLast.indexOf(" ") + 1);
        this.getFullName = () => firstAndLast;
    }
}
  
const bob = new Person('Bob Ross');
console.log(bob.getFirstName());
console.log(bob.getFullName());