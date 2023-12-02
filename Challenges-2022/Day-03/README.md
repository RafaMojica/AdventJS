<h2 align="center">¿How many gift boxes does Santa carry?</h2>

You have a box of Christmas gifts that Santa Claus wants to deliver to the children. **Each gift is represented by a chain** . Santa Claus has a sleigh that can carry a **limited weight** , and each gift inside the box has a weight that is equal to the number of letters in the gift's name.

Santa Claus also has a list of reindeer that can help him deliver the gifts. Each reindeer has a **maximum weight limit** it can carry. The maximum weight limit for each reindeer is **equal to twice the number of letters in its name**.

Your task is to implement a function distributeGifts(packOfGifts, reindeers)that receives a box of gifts and a list of reindeer and returns the maximum number of boxes of these gifts that Santa Claus can deliver to children. **Gift boxes cannot be divided**.

```sh
const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]

// the gift pack weighs 4 + 4 + 4 = 12
// reindeer can carry (2 * 6) + (2 * 6) = 24
// therefore, Santa Claus can deliver 2 boxes of gifts

distributeGifts(packOfGifts, reindeers) // 2
```

Things to keep in mind:

- **Gift boxes cannot be divided.**
- **Gift and reindeer names will always be greater than 0.**
