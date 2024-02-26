<h2 align="center">Decorating the christmas tree</h2>

A couple is putting up the Christmas tree. The boy is passionate about Christmas decorations and wants them to be perfectly balanced. He has three types of decorations:

- Color balls :`B`
- Small gifts:`R`
- Pine cones:`P`

The Christmas tree is a triangle that must be generated. They already have the base assembled, which would be the first row, and from there they have to **place the decorations upwards following a formula** .

```sh
Top of page  :     P     R     B     P
If below you have :    P P   B P   R P   B R
```

The combinations are also the other way around. For example, if down is `B P`, up is `R`. But it will also be `R` if below is `P B`. Also if you have the same letter twice below, above it will be the same letter. For example, if down is `B B`, up is `B`.

With these rules, we could see the tree that we would generate with the base `B P R P`:

```sh
   R
  P B
 R B B
B P R P
```

Write a program that receives the string `B P R P` and returns an array with the representation of the tree.

```sh
decorateTree('B P R P')
// [
// 'R',
// 'P B',
// 'R B B',
// 'B P R P'
// ]

decorateTree('B B') // ['B', 'B B']
```

Note that:

- **The program always receives the text string that represents the base of the tree.**
- **The complete tree must be generated, that is, the base and the rows that are generated from it, up to the top.**
- **You have to follow the formula to know what decoration to place in each position.**
