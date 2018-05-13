var { CardPool } = require("./models.js")
const { amonkhet } = require("./akh")
const { hour_of_devastation } = require("./hou")
const { dominaria } = require("./dom")
const { rivals_of_ixalan } = require('./rix')
const { ixalan } = require("./xln")

const allCards = new CardPool({cards: [], name: "all_cards"})

allCards.addCards(amonkhet.get("cards"))
allCards.addCards(hour_of_devastation.get("cards"))
allCards.addCards(dominaria.get("cards"))
allCards.addCards(rivals_of_ixalan.get("cards"))
allCards.addCards(ixalan.get("cards"))

let cardColors = cardID => {
  let card = allCards.findCard(cardID)
  if (!card) {
    console.log(`UNKNOWN CARD ID: ${cardID}`)
    return []
  }
  return card.get("colors")
}

let cardsColors = cardIDs => {
  return new Promise((resolve, reject) => {
    let colors = new Set()
    cardIDs.filter(cardID => cardID != -1).forEach(cardID => {
      cardColors(cardID).forEach(color => colors.add(color))
    })
    resolve(colors)
  })
}

module.exports = {
  cardColors: cardColors,
  cardsColors: cardsColors,
  allCards: allCards
}