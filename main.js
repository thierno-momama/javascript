//une alert
// alert('Hello World');
// mdn console
console.log('Message console');
console.error('Message Error');
console.info('Message Infos');
console.warn('Message Warn');
// les variables et leurs types en Javascript
let age = 30;
let prenom = "Thierno";
let agePlus = 30.6;
let homme = true;
let x = undefined;
let dif = null;

console.log(`Bonjour, je m' appel ${prenom} et j'ai ${age} ans`);
console.log(`${age} est de type : ${typeof age} `);
console.log(`${prenom} est de type : ${typeof prenom} `);
console.log(`${homme} est de type : ${typeof homme} `);
console.log(`${x} est de type : ${typeof x} `);
console.log(`${dif} est de type : ${typeof dif} `);
// les variables de types arrays en js un array peut avoir beaucoup de type.
let fruits = ["pomme", "orange", true, 30.6];
console.log(fruits);
console.log(fruits.length);
console.log(fruits.indexOf('pomme'));
fruits.push('nouvellement ajout');
console.log(fruits);
fruits.unshift('premier');
console.log(fruits);
fruits.pop();
console.log(fruits);
for(let i in fruits){
    console.log(fruits[i]);
}
for(let fruit of fruits){
    console.log(fruit);
}
//hello
let hello = "bonjour, Thierno";
console.log(hello.split(', '));
console.log(typeof hello);
// les variables object
let person = {
    firstName: 'Thierno',
    lastName: 'SOUMAH',
    old: 30,
    address: {
        city: 'Vitry-Sur-Seine',
        dept: 94400
    }
}
console.log(person);
let {firstName, lastName, old, address:  {city}} = person;
console.log(firstName);
console.log(city);
// les variables arrays au format json
let todos = [
    {
        id: 1,
        name: 'One',
        def: true
    },
    {
        id: 1,
        name: 'Two',
        def: false
    },
    {
        id: 1,
        name: 'Three',
        def: true
    }
];
let todoString = JSON.stringify(todos);
console.log(todos);
console.log(todoString);
let todoStringToJson = JSON.parse(todoString);
console.log(todoStringToJson[0].id);
// for
for(let i = 0; i < todos.length; i++){
    console.log(todos[i].name);
}
//forEach
todos.forEach(function(todo){
    console.log(todo.name);
});
//map
let todoMap = todos.map((todo) => {
    return todo.def;
});
console.log(todoMap);
//filter
let todoFilter = todos.filter((todo) => {
    return todo.def === true;
});
console.log(todoFilter);
todoFilter.forEach((todo)=> {
    console.log(todo.name);
});
//callback
let callback = todos.filter((todo)=> {
    return todo.def === true;
}).map((todo)=> {
    return todo.name;
});
callback.push('other');
console.log(callback);
//les funtions en js
function adSome(n1, n2){
    return n1+n2;
}
console.log(adSome(4,8));
//function js es6 fleché
let somme = (n1, n2) => {
    return n1+n2;
};
console.log(somme(5,9));
//dom
let myForm = document.querySelector('#my-form');
let nameInput = document.querySelector('#name');
let emailInput = document.querySelector('#email');
let msg = document.querySelector('#msg');
let users = document.querySelector('#users');
myForm.addEventListener('submit', loadSubmit);
//function loadSubmit
function loadSubmit(e){
    e.preventDefault();
    //si les champs sont vides
    if(!nameInput.value || !emailInput.value){
        msg.innerHTML = 'Please enter values fields Name and Email';
        msg.classList.add('msg');
        setTimeout(() => {
            msg.remove();
        }, 3000);
        return;
    }else{
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
        li.classList.add('li');
        users.appendChild(li);
        //clean fields
        nameInput.value = '';
        emailInput.value = '';
    }
}
