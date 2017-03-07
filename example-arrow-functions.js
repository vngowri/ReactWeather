var names = ['gowri', 'bhuvana', 'mark', 'gopal'];

names.forEach(function(name) {
  console.log('for each-', name);
});

names.forEach((name) => {
  console.log('arrow func', name);
});

names.forEach((name) =>
  console.log(name));

var returnMe = (name) => name + "!";
console.log(returnMe('gowri'));

var person = {
  name: 'gowri',
  greet: function() {
    names.forEach((name) => {
      console.log(this.name + 'says hi to ' + name);
    });
  }
}

person.greet();

function add(num1, num2) {
  return num1 + num2;
}

var addStatement = (num1, num2) => {
  return num1 + num2;
}

var addExpression = (num1, num2) =>  num1 + num2;


console.log(add(3, 5));
console.log('add statement' + addStatement(4, 5));
console.log('add expression' + addExpression(5, -2));
