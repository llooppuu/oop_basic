class Person {
    #age = 0;
    #weight = 0;
    #height = 0;
    #name = "";

    constructor(name, weight = 0, height = 0) {
        this.#name = name;
        this.setWeight(weight);
        this.setHeight(height);
    }

    becomeHeavier() {
        return ++this.#weight;
    }

    becomeTaller() {
        return ++this.#height;
    }

    becomeOlder() {
        this.#age++;
    }

    printPerson() {
        const bmiVal = this.getBMI();
        const bmiStr = bmiVal !== null ? bmiVal.toFixed(2) : "n/a";
        console.log(`name: ${this.#name}, age: ${this.#age}, weight: ${this.#weight} kg, height: ${this.#height} m, bmi: ${bmiStr}`);
    }

    isAdult() {
        return this.#age >= 18;
    }

    setAge(age) {
        this.#age = age;
    }

    getAge() {
        return this.#age;
    }

    setName(name) {
        this.#name = name;
    }

    getName() {
        return this.#name;
    }

    setWeight(weight) {
        if (weight > 0) {
            this.#weight = weight;
        } else if (weight !== 0) {
            console.error("Weight must be greater than 0 (kg)");
        }
    }

    getWeight() {
        return this.#weight;
    }

    setHeight(height) {
        if (height > 0) {
            this.#height = height;
        } else if (height !== 0) {
            console.error("Height must be greater than 0 (m)");
        }
    }

    getHeight() {
        return this.#height;
    }

    getBMI() {
        if (this.#weight > 0 && this.#height > 0) {
            const bmi = this.#weight / (this.#height * this.#height);
            return Number(bmi.toFixed(2));
        } else {
            console.error("Weight and height must be set and greater than 0 to calculate BMI");
            return null;
        }
    }

    
    bmi() {
        return this.getBMI();
    }
}

module.exports = Person