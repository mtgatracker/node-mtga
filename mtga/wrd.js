const { CardPool, Card } = require('./models.js')

let weird = new CardPool({name: "weird", cards: []})

weird.addCard(new Card({ mtgaID: 62499, setNumber: -1, name: "cinder_barrens", prettyName: "Cinder Barrens", cardType: "Land", set: "OGW", subTypes: "", colorIdentity: ['B', 'R'], colors: ['Red', 'Black'],  rarity: "Common", cost: [] }))
weird.addCard(new Card({ mtgaID: 62509, setNumber: -1, name: "meandering_river", prettyName: "Meandering River", cardType: "Land", set: "OGW", subTypes: "", colorIdentity: ['U', 'W'], colors: ['White', 'Blue'],  rarity: "Common", cost: [] }))
weird.addCard(new Card({ mtgaID: 62519, setNumber: -1, name: "submerged_boneyard", prettyName: "Submerged Boneyard", cardType: "Land", set: "OGW", subTypes: "", colorIdentity: ['B', 'U'], colors: ['Black', 'Blue'],  rarity: "Common", cost: [] }))
weird.addCard(new Card({ mtgaID: 62521, setNumber: -1, name: "timber_gorge", prettyName: "Timber Gorge", cardType: "Land", set: "OGW", subTypes: "", colorIdentity: ['G', 'R'], colors: ['Red', 'Green'],  rarity: "Common", cost: [] }))
weird.addCard(new Card({ mtgaID: 62523, setNumber: -1, name: "tranquil_expanse", prettyName: "Tranquil Expanse", cardType: "Land", set: "OGW", subTypes: "", colorIdentity: ['G', 'W'], colors: ['White', 'Green'],  rarity: "Common", cost: [] }))
weird.addCard(new Card({ mtgaID: 65433, setNumber: 251, name: "plains", prettyName: "Plains", cardType: "Basic Land", set: "AKH", subTypes: "Plains", colorIdentity: ['W'], colors: ['White'],  rarity: "Common", cost: [] }))
weird.addCard(new Card({ mtgaID: 65435, setNumber: 250, name: "island", prettyName: "Island", cardType: "Basic Land", set: "AKH", subTypes: "Island", colorIdentity: ['U'], colors: ['Blue'],  rarity: "Common", cost: [] }))
weird.addCard(new Card({ mtgaID: 65437, setNumber: 252, name: "swamp", prettyName: "Swamp", cardType: "Basic Land", set: "AKH", subTypes: "Swamp", colorIdentity: ['B'], colors: ['Black'],  rarity: "Common", cost: [] }))
weird.addCard(new Card({ mtgaID: 65439, setNumber: 253, name: "mountain", prettyName: "Mountain", cardType: "Basic Land", set: "AKH", subTypes: "Mountain", colorIdentity: ['R'], colors: ['Red'],  rarity: "AKH", cost: [] }))
weird.addCard(new Card({ mtgaID: 65441, setNumber: 254, name: "forest", prettyName: "Forest", cardType: "Basic Land", set: "AKH", subTypes: "Forest", colorIdentity: ['G'], colors: ['Green'],  rarity: "Common", cost: [] }))


module.exports = { weird: weird }