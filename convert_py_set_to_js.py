### MODIFY THESE

SET_NAME = "ravnica_allegiance"
SET_ACRONYM = "rna"
from mtga.set_data import rna as mtg_set
cards = mtg_set.RavnicaAllegiance.cards_in_set

### END MODIFY

cards.sort(key=lambda x: int(x.mtga_id))
header = """const {{ CardPool, Card }} = require('./models.js')

let {} = new CardPool({{name: "{}", cards: []}})

""".format(SET_NAME, SET_NAME)

footer = """module.exports = {{ {}: {} }}""".format(SET_NAME, SET_NAME)

total_str = header

for card in cards:
    card_fstr = '{}.addCard(new Card({{ mtgaID: {}, setNumber: {}, name: "{}", prettyName: "{}", cardType: "{}", set: "{}", subTypes: "{}", colorIdentity: {}, colors: {}, rarity: "{}", cost: {} }}))'
    card_line = card_fstr.format(SET_NAME, card.mtga_id, card.set_number, card.name, card.pretty_name, card.card_type, card.set, card.sub_types, card.color_identity, card.colors, card.rarity, card.cost)
    total_str += card_line + "\n"

total_str += "\n\n" + footer
with open("{}.js".format(SET_ACRONYM), "w") as wf:
    wf.write(total_str)