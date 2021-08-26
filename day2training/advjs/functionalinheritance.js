// Base object constructor function
function Animal(data) {
    var that = {}; // Create an empty object
    that.name = data.name; // Add it a "name" property
    return that; // Return the object
};

// Create achild object, inheriting from the base Animal
function Cat(data) {
    // Create the Animal object
    //inheritance
    var that = Animal(data);
    // Extend base object
    that.sayHello = function() {
        return 'Hello, I\'m ' + that.name;
    }
    return that;
};

// Usage
var myCat = Cat({ name: 'Rufi' });
console.log(myCat.sayHello());
