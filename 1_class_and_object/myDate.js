class MyDate {
    #day;
    #month;
    #year;

    constructor(day, month, year) {
        this.#day = day;
        this.#month = month;
        this.#year = year;

        if (!this.isValid()) {
            throw new Error("Invalid date provided");
        }
    }

    printDay() {
        return `${this.#day}.${this.#month}.${this.#year}`;
    }

    earlier(compared) {
        if (!(compared instanceof MyDate)) {
            throw new TypeError("Argument must be a MyDate");
        }

        if (this.#year !== compared.#year) return this.#year < compared.#year;
        if (this.#month !== compared.#month) return this.#month < compared.#month;
        return this.#day < compared.#day;
    }

    isValid() {
        
        if (!Number.isInteger(this.#day) || !Number.isInteger(this.#month) || !Number.isInteger(this.#year)) {
            console.error("Day, month and year must be integers.");
            return false;
        }

        if (this.#month < 1 || this.#month > 12) {
            console.error("Month must be between 1 and 12.");
            return false;
        }

        
        const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        const maxDay = daysInMonth[this.#month - 1];

        if (this.#day < 1 || this.#day > maxDay) {
            console.error(`Day must be between 1 and ${maxDay} for month ${this.#month}.`);
            return false;
        }

        return true;
    }
}

module.exports = MyDate;

