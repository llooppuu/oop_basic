class Farm{
    #name = undefined
    #Barn = undefined
    #cows = []

    constructor(name, Barn){
        this.#name = name
        this.#Barn = Barn
    }
    getOwner(){
        return this.#name
    }
    addCow(cow){
        this.#cows.push(cow)
    }
    liveHour(){
        for (const cow of this.#cows){
            cow.liveHour()
        }
    }
    installMilkingRobot(milkingrobot){
        this.#Barn.installMilkingRobot(milkingrobot)
    }
    manageCows(){
        this.#Barn.takeCareOfAll(this.#cows)
    }
    print(){
        return `
        Farm owner: ${this.#name}
        Barn bulk tank: ${this.#Barn.print()}
        Animals:
        ${this.#cows.map(cow => `    ${cow.print()}`).join('\n')}
        `
    }
}

module.exports = Farm;