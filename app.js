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

