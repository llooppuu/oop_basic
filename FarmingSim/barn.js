class Barn{
    #bulktank = undefined
    #milkingrobot = undefined
    constructor(bulktank, milkingrobot=undefined){
        this.#bulktank = bulktank
        this.#milkingrobot = milkingrobot
    }
    getBulkTank(){
        return this.#bulktank.print()
    }
    installMilkingRobot(milkingrobot){
        this.#milkingrobot = milkingrobot
        this.#milkingrobot.setBulkTank(this.#bulktank)
    }
    takeCareOf(cow){
        if (!this.#milkingrobot){
            throw new Error("The MilkingRobot hasn't been installed");
        }
        this.#milkingrobot.milk(cow)
    }
    takeCareOfAll(inp){
        if (!this.#milkingrobot){
            throw new Error("The MilkingRobot hasn't been installed");
        }
        const cows = Array.isArray(inp) ? inp : [inp]
        for (const cow of cows) {
            this.#milkingrobot.milk(cow)
        }
    }
    print(){
        return this.#bulktank.print()
    }
}

module.exports = Barn;
