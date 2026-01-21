class MilkingRobot{
    #bulktank = undefined
    constructor(bulktank = undefined){
        this.#bulktank = bulktank
    }
    getBulkTank(){
        return this.#bulktank.print()
    }
    setBulkTank(bulktank){
        this.#bulktank = bulktank
    }
    milk(cow){
        if (!this.#bulktank) throw new Error("The MilkingRobot hasn't been installed");
        else{
            const x = cow.milk()
        this.#bulktank.addToTank(x)
        }
    }
}

module.exports = MilkingRobot;  