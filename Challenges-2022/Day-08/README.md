<h2 align="center">We need a mechanic!</h2>

Some electric sleds have broken down and the elves are looking for spare parts to fix them, but they are not sure if the parts they have are useful.

Spare parts are text strings and mechanic _Elfon Masc_ has said that a spare part is valid **if the part can be a palindrome after removing at most one character.**

_A palindrome is a word or phrase that reads the same from left to right as from right to left._

Our function should return a boolean indicating whether or not the spare part is valid with that rule:

```sh
checkPart("uwu") // true
// "uwu" is a palindrome without eliminating any character

checkPart("miidim") // true
// "miidim" may be a palindrome after deleting the first "i".
// since "midim" is a palindrome

checkPart("midu") // false
// "midu" cannot be a palindrome after deletion of a character
```
