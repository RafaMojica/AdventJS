<h2 align="center">Carrying gifts in bags</h2>

We are preparing the bags for Christmas gifts but each bag has a **weight limit** .

They give us an array with the names of the gifts and a number that is the maximum weight that each bag can carry. The **weight of each gift is the length of its name.**

Write a function that groups the gifts into bags and returns an array with the names of the gifts in each bag. To group the gifts, the names are separated by spaces (the space does not count as weight).

**But be careful!** Each bag can carry a maximum weight, and if the weight of the gifts in one bag exceeds the maximum weight, the last gift must be separated from the bag and put in the next bag.

```sh
carryGifts(['game', 'bike', 'book', 'toy'], 10)
// ['game bike', 'book toy']
// 10kg can be carried in each bag
// the first bag carries 'game' and 'bike' which weigh 4kg and 4kg
// the second bag carries 'book' and 'toy' which weigh 4kg and 3kg

carryGifts(['game', 'bike', 'book', 'toy'], 7)
// ['game', 'bike', 'book toy']
// 7kg can be carried in each bag
// the first bag can only carry 'game' weighing 4kg
// the second bag can only carry 'bike' which weighs 4kg
// the third bag carries 'book' and 'toy' which weighs 4kg and 3kg

carryGifts(['game', 'bike', 'book', 'toy'], 4)
// ['game', 'bike', 'book', 'toy']
// each bag can hold 4kg
// each bag can only carry one gift

carryGifts(['toy', 'gamme', 'toy', 'bike'], 6)
// ['toy', 'gamme', 'toy', 'bike']
// each bag can carry 6kg
// each bag can only carry one gift
// note that you can`t carry 'toy toy' in one bag
// because they are not next to each other
```

Keep in mind:

- **Gifts are always grouped in order of appearance in the array.**
- **You cannot change the order of the gifts in the array when grouping them.**
- **All gifts can be grouped in a single bag.**
- **If no gifts can be grouped into a bag, an empty array is returned.**
