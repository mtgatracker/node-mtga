const backbone = require('backbone');

const Card = backbone.Model.extend({
  validate: function(attr) {
    err = []
    if (attr.cardType === undefined) err.push("must have cardType")
    if (attr.mtgaID === undefined) err.push("must have mtgaID")
    if (attr.name === undefined) err.push("must have name")
    if (attr.prettyName === undefined) err.push("must have prettyName")
    if (attr.set === undefined) err.push("must have set")
    if (attr.setNumber === undefined) err.push("must have setNumber")
    if (attr.subTypes === undefined) err.push("must have subTypes")
    if (!Array.isArray(attr.colorIdentity)) err.push("must have a colorIdentity")
    if (!Array.isArray(attr.colors)) err.push("must have a colors")
    if (!Array.isArray(attr.cost)) err.push("must have a cost")
    if(err.length) return err  // checkpoint
  }
})

const CardPool = backbone.Model.extend({
  validate: function(attr) {
    err = []
    if (attr.name === undefined) err.push("must have name")
    if (!Array.isArray(attr.cards)) err.push("must have a cards")
    if(err.length) return err  // checkpoint
  },
  findCard: function(mtgaID) {
    return this.get("cards").find(ci => ci && ci.get("mtgaID") == mtgaID)
  },
  addCard: function(card) {
    this.get("cards").push(card)
  },
  addCards: function(cards) {
    let me = this;
    cards.forEach(function(card) {
      me.get("cards").push(...cards)
    })
  }
})

module.exports = {
  Card: Card,
  CardPool: CardPool
}