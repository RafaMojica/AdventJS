<h2 align="center">The crazy Christmas lights</h2>

A company that makes Christmas lights has asked us to lend a hand.

They have some LED strips that are like a `Array`. Each position is an LED and can be on (`1`) or off (`0`).

**Every 7 seconds** , the LEDs change state like this:

- **If the led is off** , it turns on if the led on its left (`index - 1`) was on before.
- **If the LED is on** , it always stays on.

They have asked us for a program that tells us how many seconds must pass until all the LEDs are on. **Seconds are expressed as an integer** . For example:

```sh
const leds = [0, 1, 1, 0, 1]
countTime(leds) // 7
// 7 seconds since in the first change all lights turned on
// 0s: [0, 1, 1, 0, 1]
// 7s: [1, 1, 1, 1, 1]

countTime([0, 0, 0, 1]) // 21
// 21 seconds as it needs three changes:
// 0s: [0, 0, 0, 1]
// 7s: [1, 0, 0, 1]
// 14s: [1, 1, 0, 1]
// 21s: [1, 1, 1, 1]

countTime([0, 0, 1, 0, 0]) // 28
// 28 seconds as it needs four changes:
// 0s: [0, 0, 1, 0, 0]
// 7s: [0, 0, 1, 1, 0]
// 14s: [0, 0, 1, 1, 1]
// 21s: [1, 0, 1, 1, 1]
// 28s: [1, 1, 1, 1, 1]
```

To consider

- **The array will always have at least one LED on.**
- **The array can be any length.**
- **If all the LEDs are on, the time is 0.**
