const { CardPool, Card } = require('./models.js')

let amonkhet = new CardPool({name: "amonkhet", cards: []})

amonkhet.addCard(new Card({ mtgaID: 65363, setNumber: 256, name: "plains", prettyName: "Plains", cardType: "Land", set: "AKH", subTypes: "Plains", colorIdentity: ['W'], colors: ['White'], rarity: "Basic", cost: [], collectible: true }))
amonkhet.addCard(new Card({ mtgaID: 65369, setNumber: 258, name: "island", prettyName: "Island", cardType: "Land", set: "AKH", subTypes: "Island", colorIdentity: ['U'], colors: ['Blue'], rarity: "Basic", cost: [], collectible: true }))
amonkhet.addCard(new Card({ mtgaID: 65379, setNumber: 262, name: "swamp", prettyName: "Swamp", cardType: "Land", set: "AKH", subTypes: "Swamp", colorIdentity: ['B'], colors: ['Black'], rarity: "Basic", cost: [], collectible: true }))
amonkhet.addCard(new Card({ mtgaID: 65385, setNumber: 264, name: "mountain", prettyName: "Mountain", cardType: "Land", set: "AKH", subTypes: "Mountain", colorIdentity: ['R'], colors: ['Red'], rarity: "Basic", cost: [], collectible: true }))
amonkhet.addCard(new Card({ mtgaID: 65393, setNumber: 267, name: "forest", prettyName: "Forest", cardType: "Land", set: "AKH", subTypes: "Forest", colorIdentity: ['G'], colors: ['Green'], rarity: "Basic", cost: [], collectible: true }))


module.exports = { amonkhet: amonkhet }