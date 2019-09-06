const { CardPool, Card } = require('./models.js')

let rise_of_eldrazi = new CardPool({name: "rise_of_eldrazi", cards: []})

rise_of_eldrazi.addCard(new Card({ mtgaID: 36786, setNumber: 229, name: "plains", prettyName: "Plains", cardType: "Land", set: "ROE", subTypes: "Plains", colorIdentity: ['W'], colors: ['White'], rarity: "Basic", cost: [], collectible: true }))
rise_of_eldrazi.addCard(new Card({ mtgaID: 36788, setNumber: 242, name: "mountain", prettyName: "Mountain", cardType: "Land", set: "ROE", subTypes: "Mountain", colorIdentity: ['R'], colors: ['Red'], rarity: "Basic", cost: [], collectible: true }))
rise_of_eldrazi.addCard(new Card({ mtgaID: 36802, setNumber: 245, name: "forest", prettyName: "Forest", cardType: "Land", set: "ROE", subTypes: "Forest", colorIdentity: ['G'], colors: ['Green'], rarity: "Basic", cost: [], collectible: true }))
rise_of_eldrazi.addCard(new Card({ mtgaID: 36812, setNumber: 237, name: "swamp", prettyName: "Swamp", cardType: "Land", set: "ROE", subTypes: "Swamp", colorIdentity: ['B'], colors: ['Black'], rarity: "Basic", cost: [], collectible: true }))
rise_of_eldrazi.addCard(new Card({ mtgaID: 36818, setNumber: 235, name: "island", prettyName: "Island", cardType: "Land", set: "ROE", subTypes: "Island", colorIdentity: ['U'], colors: ['Blue'], rarity: "Basic", cost: [], collectible: true }))


module.exports = { rise_of_eldrazi: rise_of_eldrazi }