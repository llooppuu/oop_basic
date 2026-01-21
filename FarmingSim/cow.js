const Milkable = require("./milkable")

class Cow extends Milkable{
    #name = ''
    #capacity = 0
    #amount = 0
    #NAMES = ["Epic Cow", "Nitwit Cow", "Bob", "James"]
    constructor(name=''){
        super()
        if (name == ''){
            this.#name = this.#NAMES[Math.floor(Math.random() * this.#NAMES.length)]
        }
        else {
            this.#name = name
        }
        this.#capacity = 15 + Math.floor(Math.random() * 26)
    }
    liveHour() {
        const ProdMilk = parseFloat((0.7 + Math.random() * 1.3).toFixed(2))
        this.#amount = Math.min(this.#capacity, parseFloat(this.#amount + ProdMilk).toFixed(2))
    }
    milk() {
        const CowsMilk = this.#amount
        this.#amount = 0
        return CowsMilk
    }
    print() {
        return `${this.#name} ${Math.ceil(this.#amount * 10) / 10}/${this.#capacity}`;
    }
}

module.exports = Cow;