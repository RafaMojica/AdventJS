<h2 align="center">We are out of ink!</h2>

The day is approaching and Santa Claus has the toy warehouse in a mess. Help him organize the toys in the storage room so he can find them more easily.

To do this, they give us two arrays. The first is an **array of toys** , and the second is an **array of numbers indicating the position of each toy in the warehouse** .

The only thing to keep in mind is that **the positions may not start at 0** , although they will always be consecutive and ascending numbers.

We have to **return an array where each toy is in its corresponding position** .

```sh
const toys = ['ball', 'doll', 'car', 'puzzle']
const positions = [2, 3, 1, 0]

sortToys(toys, positions)
// ['puzzle', 'car', 'ball', 'doll']
```

```sh
const moreToys = ['pc', 'xbox', 'ps4', 'switch', 'nintendo']
const morePositions = [8, 6, 5, 7, 9]

sortToys(moreToys, morePositions)
// ['ps4', 'xbox', 'switch', 'pc', 'nintendo']
```

To consider

- **There will always be the same number of toys as there are positions.**
- **Neither the toys nor the positions are repeated.**
