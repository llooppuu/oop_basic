const Person = require("./person.js")
const bob  = new Person("Bob")
const brian  = new Person("Brian")
const alice  = new Person("Alice")


bob.setWeight(70)
bob.setHeight(1.75)

brian.setWeight(80)
brian.setHeight(1.80)

alice.setWeight(60)
alice.setHeight(1.65)

const persons = [bob, brian, alice]

while (bob.getAge() < 15) {
    bob.becomeOlder()
}

for (let i = 0; i < 3; i++) {
    brian.becomeOlder()
}


persons.forEach(person => {
    if (person.isAdult()) {
        console.log(`${person.getName()} is adult`)
    } else {
        console.log(`${person.getName()} is not adult`)
    }
})

bob.printPerson()
brian.printPerson()
alice.printPerson()