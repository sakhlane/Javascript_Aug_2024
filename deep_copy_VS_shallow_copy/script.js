console.log('deep copy vs shallow copy')

const user0 = {
    name : 'saqlain',
    age : 27,
}

// we can add properties to existing object by using . 
user0.addPhoneNumber = 8892984745;

console.log(user0);

const user1 = {
    firstName: 'sakhlane',
    lastName: 'pasha',
    age: 27
}

// Object.seal => we are seal a object in which we did not add any attribute or properties to exiisting object but we can re assaign a values to the existing attributes or properties 

Object.seal(user1);
user1.firstName = 'saqlain';

const user2 = {
    name : 'saakhib',
    lastName: 'pasha',
    age :25,

}

// Object.freeze => by using freeze we are freez the obejct we cant change or add atrributes or values 
    Object.freeze(user2);

    user2.firstName = 'tahir'

//  shallow copy
const user3 = {}
Object.assign(user3,user2);

console.log(user3)

user3.phone = 782929290;
console.log(user3);

console.log(user2);
user3.name = 'sahil'
console.log(user3);


