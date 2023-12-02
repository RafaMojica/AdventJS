<h2 align="center">We are out of ink!</h2>

We are printing bar codes for shipments at Santa's factory. We use a number stamping system where each digit is printed with a different ink. It is an old but reliable system. However, sometimes we run out of single-digit ink.

**Write a function** that **receives the digit for which we do not have ink** (a number that will be from 0 to 9) and as a second parameter, **the number of bar codes that must be printed** (we start from 1 to this number that we receive).

It should **return an array with the numbers that include the number that we do not have ink** . Let's look at an example:

```sh
dryNumber(1, 15) // [1, 10, 11, 12, 13, 14, 15]

// we have no ink for digit 1
// we have to print 15 bar codes from 1 to 15
// the bar codes that will come out wrong due to lack of ink are:
// 1, 10, 11, 12, 13, 14, 15
```

```sh
dryNumber(2, 20) // [2, 12, 20]

// we have no ink for digit 2
// we have to print 20 bar codes from 1 to 20
// the bar codes that will come out wrong due to lack of ink are:
// 2, 12, 20
```

Note that:

- **The number for which we do not have ink can only be from 0 to 9.**
- **The number for which we do not have ink can be in any position of the barcode.**
- **The number of bar codes to print can be very large.**
