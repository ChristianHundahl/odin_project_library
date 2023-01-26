function Plant(color, organic) {
    this.color = color
    this.organic = organic

    this.info = function info() {
        return color + ', ' + organic
    }
}

const flower = new Plant('red', 'organic')
console.log(flower.info())

Plant.prototype.sayJoke = function joke() {return "What's green and mean? Broccoli!"}

console.log(flower.sayJoke())

console.log(flower.sayJoke)

console.log(Plant)