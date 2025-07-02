// *********CONSTRUCTOR FUNCTIONS**********

/**
 * 
 * @param {string} name - common name of the snake 
 * @param {string} color - dominant color of the snake 
 * @param {boolean} venomous - does the snake have venom glands 
 * @param {string} activityPattern - is the snake nocturnal, diurnal, or crepuscular
 * @param {string} continentFound - which continent is the snake native to 
 */



function Snake(name, color, venomous, activityPattern, continentFound) {
    this.name = name;
    this.color = color;
    this.venomous = venomous;
    this.activityPattern = activityPattern;
    this.continentFound = continentFound;
    this.checkIfVenomous = function() {
        if (this.venomous == true) {
            console.log(`Careful! The ${this.name} is a venomous snake!`)
        } else {
            console.log(`The ${this.name} is a non-venomous snake.`)
        }
    }
}

const keelback = new Snake('Keelback', 'yellow', false, "diurnal", "Asia");

const ballPython = new Snake('Ball Python', 'brown', false, 'nocturnal', 'Africa');

const gaboonViper = new Snake('Gaboon Viper', 'brown', true, 'nocturnal', 'Africa');

console.log(keelback);
keelback.checkIfVenomous();

console.log(ballPython);
ballPython.checkIfVenomous();

console.log(gaboonViper);
gaboonViper.checkIfVenomous();


// **********OBJECT CLASSES - ES6 SYNTAX**********

class NorthAmericanPredator{
/**
 * 
 * @param {string} name - common name for animal
 * @param {string} vertebrateClass - mammal, reptile, amphibian
 * @param {boolean} hasFur - does it have fur
 * @param {string} habitat - general habitat
 * @param {number} age - made up individual animal's age for birthday purposes
 */
    constructor(name, vertebrateClass, hasFur, habitat, age) {
        this.name = name;
        this.vertebrateClass = vertebrateClass;
        this.hasFur = hasFur;
        this.habitat = habitat;
        this.age = age;
    }

    greet() {
       const greeting = (`Hello! I'm the ${this.name}!`)
        return greeting;
    }

    haveBirthday() {
        this.age += 1;
        // console.log(`Happy birthday to the ${this.name}! They're ${this.age} years old! `)
        return this.age
    }
}


const greyWolf = new NorthAmericanPredator(
    "Grey Wolf",
    "mammal",
    true,
    "forests",
    5
);

const americanAlligator = new NorthAmericanPredator(
    "American Alligator",
    "reptile",
    false,
    "wetlands",
    15
);

console.table(greyWolf); // I tried this here because the devtools console was logging things in alphabetical order and not the order I have them coded **** I came back 10 minutes later and now it's being normal, but this looks nice so it's staying!
console.log(americanAlligator);


console.log(greyWolf.greet());
console.log(`Happy Birthday to the ${greyWolf.name}! They're ${greyWolf.haveBirthday()} today!`);

console.log(americanAlligator.greet());
console.log(`Happy Birthday to the ${americanAlligator.name}! They're ${americanAlligator.haveBirthday()} today!`);