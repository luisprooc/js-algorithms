function Person (firstAndLast){
    let names = {
        firstName : firstAndLast.slice(0,firstAndLast.indexOf(" ")), 
        lastName : firstAndLast.slice(firstAndLast.indexOf(" ") + 1)
        
    }

    this.getFirstName = () => names.firstName;
    this.getLastName = () => names.lastName;
    this.getFullName = () => `${names.firstName} ${names.lastName}`;
    
    this.setFirstName = (firstName) => {
        names.firstName = firstName;
    }
    this.setLastName = (lastName) => {
        names.lastName = lastName;
    }

    this.setFullName = (firstAndLast) => {
        names.firstName = firstAndLast.slice(0,firstAndLast.indexOf(" ")); 
        names.lastName = firstAndLast.slice(firstAndLast.indexOf(" ") + 1);
    }
    
}

  
const bob = new Person('Bob Ross');
console.log(bob.getFirstName());
bob.setFirstName("Rass");
console.log(bob.getFirstName());
console.log(Object.keys(bob).length);