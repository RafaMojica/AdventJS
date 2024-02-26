<h2 align="center">the best way</h2>

Santa Claus is building ice pyramids at the North Pole to train his reindeer.

Each reindeer starts at the top of the pyramid and must choose the optimal path down to travel **in the shortest time possible** . Each level has a number that determines the time it takes to get there.

Upon reaching a position, the reindeer **can only slide down and diagonally to the left or right** . Visually, the pyramid looks like this:

```sh
    0
   / \
  7   4
 / \ / \
2   4   6
```

In code we represent it like this:

```sh
[
  [0],
  [7, 4],
  [2, 4, 6]
]
```

Santa Claus needs a program that tells him the minimum time each reindeer can take to slide down the pyramid using the most optimal path.

In the example above, the most optimal path is `0 -> 4 -> 4`, which takes a total of `0 + 4 + 4 = 8` time units. The result would be `8`:

Because it is not `6`? It is not `0 -> 4 -> 2` because when you go down to the position `4` you can no longer diagonally reach the position of `2`. So the shortest possible path is `8`. More examples:

```sh
getOptimalPath([[0], [2, 3]]) // 2
// 0 -> 2

getOptimalPath([[0], [3, 4], [9, 8, 1]]) // 5
// 0 -> 4 -> 1

getOptimalPath([[1], [1, 5], [7, 5, 8], [9, 4, 1, 3]]) // 8
// 1 -> 1 -> 5 -> 1
```

To consider:

- **Keep in mind that you can only go down diagonally and downwards from any position.**
- **The first position of the pyramid can be different from 0.**
- **Pyramids can have up to 10 levels.**
- **The numbers in the pyramids can be negative.**
