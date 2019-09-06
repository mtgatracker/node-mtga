var { CardPool } = require("./models.js")
const { dominaria } = require("./dom")
const { rivals_of_ixalan } = require('./rix')
const { ixalan } = require("./xln")
const { core_set_2019 } = require("./m19")
const { arena_exclusives } = require("./ana")
const { guilds_of_ravnica } = require("./grn")
const { ravnica_allegiance } = require("./rna")
const { war_of_the_spark } = require("./war")
const { core_set_2020 } = require("./m20")
const { amonkhet } = require("./akh")
const { arenasup } = require("./arenasup")
const { battle_for_zendikar } = require("./bfz")
const { throne_of_eldraine } = require("./eld")
const { mirage } = require("./mi")
const { rise_of_eldrazi } = require("./roe")
const { return_to_ravnica } = require("./rtr")

// Deprecated: these may come back someday, but for now disable them
//const { hour_of_devastation } = require("./hou")
//const { kaladesh } = require("./kld")
//const { aether_revolt } = require("./aer")
//const { welcome_decks_2017 } = require("./w17")
//const { weird } = require("./wrd")

const allCards = new CardPool({cards: {}, name: "all_cards"})

allCards.addCards(dominaria.get("cards"))
allCards.addCards(rivals_of_ixalan.get("cards"))
allCards.addCards(ixalan.get("cards"))
allCards.addCards(core_set_2019.get("cards"))
allCards.addCards(arena_exclusives.get("cards"))
allCards.addCards(guilds_of_ravnica.get("cards"))
allCards.addCards(ravnica_allegiance.get("cards"))
allCards.addCards(war_of_the_spark.get("cards"))
allCards.addCards(core_set_2020.get("cards"))
allCards.addCards(amonkhet.get("cards"))
allCards.addCards(battle_for_zendikar.get("cards"))
allCards.addCards(throne_of_eldraine.get("cards"))
allCards.addCards(mirage.get("cards"))
allCards.addCards(rise_of_eldrazi.get("cards"))
allCards.addCards(return_to_ravnica.get("cards"))
allCards.addCards(arenasup.get("cards"))

//allCards.addCards(hour_of_devastation.get("cards"))
//allCards.addCards(kaladesh.get("cards"))
//allCards.addCards(aether_revolt.get("cards"))
//allCards.addCards(welcome_decks_2017.get("cards"))
//allCards.addCards(weird.get("cards"))

let cardColors = cardID => {
  return new Promise((resolve, reject) => {
    let card = allCards.findCard(cardID)
    if (!card) {
      console.log(`UNKNOWN CARD ID: ${cardID}`)
      resolve([])
    }
    resolve(card.get("colors"))
  })
}

let cardsColors = cardIDs => {
  return new Promise((resolve, reject) => {
    let colors = new Set()
    let allPromises = []
    cardIDs.filter(cardID => cardID != -1).forEach(cardID => {
      let cardPromise = cardColors(cardID)
      allPromises.push(cardPromise)
      cardPromise.then(cardColors => {
        cardColors.forEach(color => colors.add(color))
      })
    })
    Promise.all(allPromises).then(r => {
      resolve(colors)
    })
  })
}

module.exports = {
  cardColors: cardColors,
  cardsColors: cardsColors,
  allCards: allCards
}