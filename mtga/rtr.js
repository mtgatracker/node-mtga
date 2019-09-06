const { CardPool, Card } = require('./models.js')

let return_to_ravnica = new CardPool({name: "return_to_ravnica", cards: []})

return_to_ravnica.addCard(new Card({ mtgaID: 51789, setNumber: 250, name: "plains", prettyName: "Plains", cardType: "Land", set: "RTR", subTypes: "Plains", colorIdentity: ['W'], colors: ['White'], rarity: "Basic", cost: [], collectible: true }))
return_to_ravnica.addCard(new Card({ mtgaID: 51799, setNumber: 255, name: "island", prettyName: "Island", cardType: "Land", set: "RTR", subTypes: "Island", colorIdentity: ['U'], colors: ['Blue'], rarity: "Basic", cost: [], collectible: true }))
return_to_ravnica.addCard(new Card({ mtgaID: 51809, setNumber: 260, name: "swamp", prettyName: "Swamp", cardType: "Land", set: "RTR", subTypes: "Swamp", colorIdentity: ['B'], colors: ['Black'], rarity: "Basic", cost: [], collectible: true }))
return_to_ravnica.addCard(new Card({ mtgaID: 51819, setNumber: 265, name: "mountain", prettyName: "Mountain", cardType: "Land", set: "RTR", subTypes: "Mountain", colorIdentity: ['R'], colors: ['Red'], rarity: "Basic", cost: [], collectible: true }))
return_to_ravnica.addCard(new Card({ mtgaID: 51829, setNumber: 270, name: "forest", prettyName: "Forest", cardType: "Land", set: "RTR", subTypes: "Forest", colorIdentity: ['G'], colors: ['Green'], rarity: "Basic", cost: [], collectible: true }))


module.exports = { return_to_ravnica: return_to_ravnica }