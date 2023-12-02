<h2 align="center">Taking inventory of gifts</h2>

In Santa's warehouses they are taking inventory. There are three warehouses (each represented as a `Array``). In every warehouse there are gifts.

We have been asked to write a program that tells us what gifts to buy to replenish our warehouses now that Christmas is approaching. **A gift has to be replenished when there is only stock in one of the three warehouses.**

For example, if we have the following warehouses:

```sh
const a1 = ['bici', 'coche', 'bici', 'bici']
const a2 = ['coche', 'bici', 'muñeca', 'coche']
const a3 = ['bici', 'pc', 'pc']

/* The store a1 has "bici" y "coche".
The store a2 has "coche", "bici" y "muñeca".
The store a3 has "bici" y "pc".

The gift "muñeca" and "pc" are only in stores a2 y a3 respectively.
*/

const gifts = getGiftsToRefill(a1, a2, a3) // ['muñeca', 'pc']
```

As you can see, stores can have the same gift repeated several times. But, no matter how much stock there is in one warehouse, if we don't have it in the other two, we must replenish it to have better distribution.

📝 Summary

1. Create a function `getGiftsToRefill` that takes three `Array`` as parameters.
2. The function must return a `Array` with the gifts that need to be replaced.
3. A gift must be replenished when there is only stock in one of the three warehouses.
4. If there is no gift to replenish, the function should return `Array` void.
5. If there is more than one gift to replace, the function must return a `Array` with all the gifts that need to be replaced.
