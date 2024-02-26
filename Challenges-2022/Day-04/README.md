<h2 align="center">A box inside another box and another..</h2>

Santa Claus needs to do a check on his gift boxes to make sure he can pack them all on his sleigh. He has a series of **boxes of different sizes, which are characterized by their length, width and height.**

Your task is to write **a function** that, **given a list of boxes with their sizes** , determines whether it is possible **to pack all the boxes into one so that each box contains another** (which in turn contains another, and so on).

Each box represents its measurements with an object. For example: `{l: 2, w: 3, h: 2}`. This means that the box has a length of 2, a width of 3, and a height of 2.

A box fits into another box if all the sides of the first are smaller than the sides of the second. **The elves have told us that the boxes cannot be rotated** , so you cannot put a 2x3x2 box in a 3x2x2 box. Let's look at some examples:

```sh
fitsInOneBox([
  { l: 1, w: 1, h: 1 },
  { l: 2, w: 2, h: 2 }
]) // true
```

In the example above, the smaller box fits into the larger box. Therefore, it is possible to pack all the boxes into one. Now let's look at a case that doesn't:

```sh
const boxes = [
  { l: 1, w: 1, h: 1 },
  { l: 2, w: 2, h: 2 },
  { l: 3, w: 1, h: 3 }
]

fitsInOneBox(boxes) // false
```

In the example above, the smaller box fits into the middle box, but the middle box does not fit into the larger box. Therefore, it is not possible to pack all the boxes into one.

Please note that the boxes may not come in order:

```sh
const boxes = [
  { l: 1, w: 1, h: 1 },
  { l: 3, w: 3, h: 3 },
  { l: 2, w: 2, h: 2 }
]

fitsInOneBox(boxes) // true
```

In the example above, the first box fits in the third, and the third in the second. Therefore, it is possible to pack all the boxes into one.

Things to keep in mind:

- **The boxes cannot be rotated as the elves have told us that the machine is not ready.**
- **The boxes may come unordered in size.**
- **The boxes are not always square, they can be rectangular.**
