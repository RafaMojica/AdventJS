<h2 align="center">Creating the gift board</h2>

There are many letters from children asking for gifts and it is very difficult for us to inventory them all. For this reason, we have decided to create a program that draws us a table with the gifts they ask for and their quantities.

To do this, they give us an array of objects with the names of the gifts and their quantities. Write a function that receives this array and returns a string with the drawn table.

```sh
printTable([
  { name: 'Game', quantity: 2 },
  { name: 'Bike', quantity: 1 },
  { name: 'Book', quantity: 3 }
])
```

```sh
+++++++++++++++++++
| Gift | Quantity |
| ---- | -------- |
| Game | 2        |
| Bike | 1        |
| Book | 3        |
*******************
```

Another example where you can see that the table always uses just enough space depending on the length of the gift names and amounts.

```sh
printTable([
  { name: 'PlayStation 5', quantity: 9234782374892 },
  { name: 'Book Learn Web Dev', quantity: 23531 }
])
```

```sh
++++++++++++++++++++++++++++++++++++++
| Gift               | Quantity      |
| ------------------ | ------------- |
| PlayStation 5      | 9234782374892 |
| Book Learn Web Dev | 23531         |
**************************************
```

As you can see, the size of the cells depends on the length of the names of the gifts and the quantities, although at least they will have to be the space of the titles `Gift` and `Quantity` respectively.

The table uses the symbols: `+` for the top border, `*` for the bottom border, `-` for horizontal lines and `|`for vertical lines.

Keep in mind:

- **Use only the space you need to draw the table.**
- **Adapt the table to the length of the gift names and quantities or column titles.**
- **You don't need to order the results.**
- **The table does not end with a line break.**
