<h2 align="center">Optimizing Santa trip</h2>

To avoid tiring the reindeer, Santa Claus wants to leave the maximum number of gifts while making the fewest trips possible.

It has an array of cities where each element is the number of gifts you can leave there. `[12, 3, 11, 5, 7]`. On the other hand, the limit of gifts that can fit in your bag. And finally, the maximum number of cities your reindeer can visit.

Since he doesn't want to leave a city halfway, **if he can't leave all the gifts that are from that city, he doesn't leave any there.**

Create a program that tells you **the highest sum of gifts** you could distribute taking into account the maximum gifts you can transport and the maximum number of cities you can visit:

```sh
const giftsCities = [12, 3, 11, 5, 7]
const maxGifts = 20
const maxCities = 3

// the highest amount of gifts to be distributed
// visiting a maximum of 3 cities
// is 20: [12, 3, 5]

// the highest sum would be [12, 7, 11].
// but exceeds the limit of 20 gifts and would have
// than to leave any city half-finished.

getMaxGifts(giftsCities, maxGifts, maxCities) // 20
```

If no trip can be made that satisfies the requirements, the result must be 0. More examples:

```sh
getMaxGifts([12, 3, 11, 5, 7], 20, 3) // 20
getMaxGifts([50], 15, 1) // 0
getMaxGifts([50], 100, 1) // 50
getMaxGifts([50, 70], 100, 1) // 70
getMaxGifts([50, 70, 30], 100, 2) // 100
getMaxGifts([50, 70, 30], 100, 3) // 100
getMaxGifts([50, 70, 30], 100, 4) // 100
```

To consider:

- **`TmaxGifts >= 1`**
- **`maxCities >= 1`**
- **The number `maxCities` may be greater `thangiftsCities.length`**
