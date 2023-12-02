<h2 align="center">Automating Christmas gift wrapping!</h2>

This year the elves bought a machine that wraps gifts. But... it's not programmed! We need to create an algorithm that will help you in the task.

An array with the gifts is passed to the machine. Each gift is a string. We need the machine to wrap each gift in wrapping paper and place it in an array of wrapped gifts.

The wrapping paper is the symbol *and to wrap a gift, the symbol is placed *so that it completely surrounds the string on all sides. For example:

```sh
const gifts = ['cat', 'game', 'socks']
const wrapped = wrapping(gifts)

console.log(wrapped)
/* [
  "*****\n*cat*\n*****",
  "******\n*game*\n******",
  "*******\n*socks*\n*******"
] */
```

As you see, the wrapping paper wraps the string. Above and below, so as not to leave any gaps, the corners are also covered by the wrapping paper.

**Note:** The character **\n** represents a line break.

**Eye!** Make sure you put the correct number of *to completely wrap the string. But not too many. Only those necessary to cover the string.
