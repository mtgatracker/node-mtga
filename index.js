const { amonkhet } = require("./mtga/akh")
const { hour_of_devastation } = require("./mtga/hou")
const { dominaria } = require("./mtga/dom")
const { rivals_of_ixalan } = require('./mtga/rix')
const { ixalan } = require("./mtga/xln")

const { CardPool, Card } = require("./mtga/models")

const { cardColors, cardsColors, allCards } = require('./mtga/cardUtils')

module.exports = {
  amonkhet: amonkhet,
  hour_of_devastation: hour_of_devastation,
  dominaria: dominaria,
  rivals_of_ixalan: rivals_of_ixalan,
  ixalan, ixalan,
  CardPool: CardPool,
  Card: Card,
  cardColors: cardColors,
  cardsColors: cardsColors,
  allCards: allCards
}