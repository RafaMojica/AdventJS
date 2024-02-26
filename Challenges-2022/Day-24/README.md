<h2 align="center">The last challenge is a maze</h2>

The day has come! Today we are going to distribute the gifts... but the warehouses are a labyrinth and the elves are lost.

**Indielfo Jones** wants **to write a program** that, upon receiving a **matrix** , knows whether or not it can exit the maze quickly from its entrance to its exit.

The labyrinths have the following positions:

- `W:` It's a wall, you can't go through it.
- `S:` Entry point to the warehouse.
- `E:` Warehouse exit point.
- `:` The blank spaces are where you can go through.

Valid movements are from one position up, down, left or right. **Cannot move diagonally.**

```sh
canExit([
  [' ', ' ', 'W', ' ', 'S'],
  [' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', 'W', ' '],
  ['W', 'W', ' ', 'W', 'W'],
  [' ', ' ', ' ', ' ', 'E']
]) // -> true

// There is no way to get from [0, 4] to [4, 4].
// and there is a path to the exit that is [4, 4].

canExit([
  [' ', ' ', 'W', 'W', 'S'],
  [' ', ' ', ' ', 'W', ' '],
  [' ', ' ', ' ', 'W', ' '],
  ['W', 'W', ' ', 'W', 'W'],
  [' ', ' ', ' ', ' ', 'E']
]) // -> false

// There is no way to get from [0, 4] to [4, 4].
```

Remember that:

- **You only have to return if you can get out of the maze with a `booleano`.**
- **Walls `W` cannot be jumped over.**
- **You cannot leave the limits of the matrix, you must always follow an internal path.**
