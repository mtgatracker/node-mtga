const { CardPool, Card } = require('./models.js')

let mirage = new CardPool({name: "mirage", cards: []})

mirage.addCard(new Card({ mtgaID: 6993, setNumber: 0, name: "forest", prettyName: "Forest", cardType: "Land", set: "MI", subTypes: "Forest", colorIdentity: ['G'], colors: ['Green'], rarity: "Basic", cost: [], collectible: true }))
mirage.addCard(new Card({ mtgaID: 7065, setNumber: 0, name: "island", prettyName: "Island", cardType: "Land", set: "MI", subTypes: "Island", colorIdentity: ['U'], colors: ['Blue'], rarity: "Basic", cost: [], collectible: true }))
mirage.addCard(new Card({ mtgaID: 7153, setNumber: 0, name: "mountain", prettyName: "Mountain", cardType: "Land", set: "MI", subTypes: "Mountain", colorIdentity: ['R'], colors: ['Red'], rarity: "Basic", cost: [], collectible: true }))
mirage.addCard(new Card({ mtgaID: 7193, setNumber: 0, name: "plains", prettyName: "Plains", cardType: "Land", set: "MI", subTypes: "Plains", colorIdentity: ['W'], colors: ['White'], rarity: "Basic", cost: [], collectible: true }))
mirage.addCard(new Card({ mtgaID: 7347, setNumber: 0, name: "swamp", prettyName: "Swamp", cardType: "Land", set: "MI", subTypes: "Swamp", colorIdentity: ['B'], colors: ['Black'], rarity: "Basic", cost: [], collectible: true }))


module.exports = { mirage: mirage }