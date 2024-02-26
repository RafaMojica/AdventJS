<h2 align="center">Arranging Santa`s letters</h2>

Santa is starting to receive a lot of letters but they have a lot of formatting problems. To improve reading, he is going to write a program that, given a text, formats it according to the following rules:

- Remove leading and trailing spaces
- Remove multiple blank spaces and leave only one
- Leave a space after each comma
- Remove spaces before comma or period
- Questions should only end with a question mark.
- The first letter of each sentence must be capitalized
- Capitalize the word "Santa Claus" if it appears in the letter
- Put a period at the end of the sentence if it does not have punctuation

The letters are written in English and here we have an example:

```sh
fixLetter(` hello,  how are you??     do you know if santa claus exists?  i really hope he does!  bye  `)
// Hello, how are you? Do you know if Santa Claus exists? I really hope he does! Bye.

fixLetter("  Hi Santa claus. I'm a girl from Barcelona , Spain . please, send me a bike.  Is it possible?")
// Hi Santa Claus. I'm a girl from Barcelona, Spain. Please, send me a bike. Is it possible?
```

To consider:

- **You don't have to worry about punctuation marks other than commas, periods, or question marks.**
- **Make sure to respect the original line breaks and spaces.**
