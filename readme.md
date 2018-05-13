# node-mtga

Magic: the Gathering Arena card information in a nice-to-use format for node

### Find a card's name based on its ID:

```node
const { allCards } = require("mtga")
let card = allCards.findCard(67134)  // dub
console.log(card.get("prettyName"))
```
