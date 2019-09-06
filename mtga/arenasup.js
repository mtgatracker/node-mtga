const { CardPool, Card } = require('./models.js')

let arenasup = new CardPool({name: "arenasup", cards: []})

arenasup.addCard(new Card({ mtgaID: 68326, setNumber: 1, name: "factory_of_momir_vig", prettyName: "Factory of Momir Vig", cardType: "Artifact", set: "ARENASUP", subTypes: "", colorIdentity: [], colors: ['Colorless'], rarity: "Mythic Rare", cost: [], collectible: false }))
arenasup.addCard(new Card({ mtgaID: 69746, setNumber: 1, name: "maelstrom_nexus_emblem", prettyName: "Maelstrom Nexus Emblem", cardType: "Artifact", set: "ARENASUP", subTypes: "", colorIdentity: [], colors: ['Colorless'], rarity: "Mythic Rare", cost: [], collectible: false }))
arenasup.addCard(new Card({ mtgaID: 69761, setNumber: 1, name: "omniscience_emblem", prettyName: "Omniscience Emblem", cardType: "Artifact", set: "ARENASUP", subTypes: "", colorIdentity: ['W', 'U', 'B', 'R', 'G'], colors: ['Red', 'White', 'Black', 'Blue', 'Green'], rarity: "Mythic Rare", cost: [], collectible: false }))
arenasup.addCard(new Card({ mtgaID: 69769, setNumber: 1, name: "treasure_token_factory", prettyName: "Treasure Token Factory", cardType: "Artifact", set: "ARENASUP", subTypes: "", colorIdentity: [], colors: ['Colorless'], rarity: "Mythic Rare", cost: [], collectible: false }))
arenasup.addCard(new Card({ mtgaID: 69775, setNumber: 1, name: "pandemonium_emblem", prettyName: "Pandemonium Emblem", cardType: "Artifact", set: "ARENASUP", subTypes: "", colorIdentity: [], colors: ['Colorless'], rarity: "Mythic Rare", cost: [], collectible: false }))
arenasup.addCard(new Card({ mtgaID: 69776, setNumber: 10001, name: "treasure", prettyName: "Treasure", cardType: "Artifact", set: "ARENASUP", subTypes: "Treasure", colorIdentity: [], colors: ['Colorless'], rarity: "Token", cost: [], collectible: false }))
arenasup.addCard(new Card({ mtgaID: 69777, setNumber: 1, name: "giant_monsters_emblem", prettyName: "Giant Monsters Emblem", cardType: "Artifact", set: "ARENASUP", subTypes: "", colorIdentity: [], colors: ['Colorless'], rarity: "Mythic Rare", cost: [], collectible: false }))
arenasup.addCard(new Card({ mtgaID: 70146, setNumber: 1, name: "overflowing_counters", prettyName: "Overflowing Counters", cardType: "Artifact", set: "ARENASUP", subTypes: "", colorIdentity: [], colors: ['Colorless'], rarity: "Mythic Rare", cost: [], collectible: false }))
arenasup.addCard(new Card({ mtgaID: 70469, setNumber: 10002, name: "zombie_army", prettyName: "Zombie Army", cardType: "Creature", set: "ARENASUP", subTypes: "Zombie Army", colorIdentity: [], colors: ['Colorless'], rarity: "Token", cost: [], collectible: false }))
arenasup.addCard(new Card({ mtgaID: 70500, setNumber: 1, name: "landfall_satchel", prettyName: "Landfall Satchel", cardType: "Artifact", set: "ARENASUP", subTypes: "", colorIdentity: [], colors: ['Colorless'], rarity: "Mythic Rare", cost: [], collectible: false }))
arenasup.addCard(new Card({ mtgaID: 70511, setNumber: 10003, name: "plant", prettyName: "Plant", cardType: "Creature", set: "ARENASUP", subTypes: "Plant", colorIdentity: [], colors: ['Colorless'], rarity: "Token", cost: [], collectible: false }))


module.exports = { arenasup: arenasup }