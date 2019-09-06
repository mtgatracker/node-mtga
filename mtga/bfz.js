const { CardPool, Card } = require('./models.js')

let battle_for_zendikar = new CardPool({name: "battle_for_zendikar", cards: []})

battle_for_zendikar.addCard(new Card({ mtgaID: 62115, setNumber: 250, name: "plains", prettyName: "Plains", cardType: "Land", set: "BFZ", subTypes: "Plains", colorIdentity: ['W'], colors: ['White'], rarity: "Basic", cost: [], collectible: true }))
battle_for_zendikar.addCard(new Card({ mtgaID: 62125, setNumber: 255, name: "island", prettyName: "Island", cardType: "Land", set: "BFZ", subTypes: "Island", colorIdentity: ['U'], colors: ['Blue'], rarity: "Basic", cost: [], collectible: true }))
battle_for_zendikar.addCard(new Card({ mtgaID: 62135, setNumber: 260, name: "swamp", prettyName: "Swamp", cardType: "Land", set: "BFZ", subTypes: "Swamp", colorIdentity: ['B'], colors: ['Black'], rarity: "Basic", cost: [], collectible: true }))
battle_for_zendikar.addCard(new Card({ mtgaID: 62145, setNumber: 265, name: "mountain", prettyName: "Mountain", cardType: "Land", set: "BFZ", subTypes: "Mountain", colorIdentity: ['R'], colors: ['Red'], rarity: "Basic", cost: [], collectible: true }))
battle_for_zendikar.addCard(new Card({ mtgaID: 62155, setNumber: 270, name: "forest", prettyName: "Forest", cardType: "Land", set: "BFZ", subTypes: "Forest", colorIdentity: ['G'], colors: ['Green'], rarity: "Basic", cost: [], collectible: true }))


module.exports = { battle_for_zendikar: battle_for_zendikar }