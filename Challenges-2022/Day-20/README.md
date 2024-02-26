<h2 align="center">More challenging trips</h2>

Santa Claus has realized that not even with the collaboration of all the elves will he be able to deliver all the gifts on time. That's why he's going to ask his friends at Autentia for help .

Autentia has told us that they need a program to know which team of reindeer to send to each country. There are **different types of reindeer** and each of them can carry a weight of gifts. For example:

```sh
const reindeerTypes = [
  { type: 'Nuclear', weightCapacity: 50 },
  { type: 'Electric', weightCapacity: 10 },
  { type: 'Gasoline', weightCapacity: 5 },
  { type: 'Diesel', weightCapacity: 1 }
]
```

The list of gifts that Santa Claus has shows how much each gift weighs and what its destination country is. The weight of the gifts is always a natural number. For example:

```sh
const gifts = [
  { country: 'Spain', weight: 30 },
  { country: 'Spain', weight: 7 },
  { country: 'France', weight: 17 }
]
```

Autentia tells us that, for the team of reindeer to be sent to each country to be optimal, we should:

- Send as many reindeer as possible with the highest carrying capacity
- Make the most of the weight that each reindeer can support.
- The reindeer have a strange behavior and **do not allow the team to have more reindeer of one type than reindeer of the next type in descending order of carrying capacity .**

For example. Seventeen diesel reindeer (17 _ 1) would not be sent to France (17). There are reindeer with greater carrying capacity, but a nuclear reindeer (50) would not be sent either, since its capacity would be wasted. One electric reindeer (10), one gasoline (5) and two diesel (2 _ 1) would be sent.

A team made up of three electric vehicles (3 _ 10), one gasoline (5) and two diesel (2 _ 1) could not be sent to Spain (37), since there **cannot be more electric vehicles than gasoline ones** . Nor two electric (2 _ 10), three gasoline (3 _ 5) and two diesel (2 _ 1), since **there cannot be more gasoline than diesel** . It would be necessary to send two electric (2 _ 10), two gasoline (2 _ 5) and seven diesel (7 _ 1).

```sh
const reindeerTypes = [
  { type: 'Nuclear', weightCapacity: 50 },
  { type: 'Electric', weightCapacity: 10 },
  { type: 'Gasoline', weightCapacity: 5 },
  { type: 'Diesel', weightCapacity: 1 }
]

const gifts = [
  { country: 'Spain', weight: 30 },
  { country: 'France', weight: 17 },
  { country: 'Italy', weight: 50 }
]

howManyReindeers(reindeerTypes, gifts)
// [{
//   country: 'Spain',
//   reindeers: [
//     { type: 'Electric', num: 1 },
//     { type: 'Gasoline', num: 3 },
//     { type: 'Diesel', num: 5 }
//   ]
// }, {
//   country: 'France',
//   reindeers: [
//     { type: 'Electric', num: 1 },
//     { type: 'Gasoline', num: 1 },
//     { type: 'Diesel', num: 2 }
//   ]
//  }, {
//   country: 'Italy',
//   reindeers: [
//     { type: 'Electric', num: 3 },
//     { type: 'Gasoline', num: 3 },
//     { type: 'Diesel', num: 5 }
//   ]
// }]
```

To consider:

- **There will always be a type of reindeer with carrying capacity 1.**
- **There will always be at least two types of reindeer available.**
- **There is no limit to the number of reindeer of the same type that can be sent as long as the restrictions set out above are adhered to.**
- **Your function should return the reindeer sorted by carrying capacity from highest to lowest.**
