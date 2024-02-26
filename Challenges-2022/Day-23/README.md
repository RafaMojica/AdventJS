<h2 align="center">Santa Claus Compiler</h2>

We are testing a new CPU for Santa's sleigh. But we still have to program the software to make it work.

The CPU has 8 registers available, which are called V00..V07. At the beginning of the program, all registers contain 0. The CPU supports the following instructions:

- `MOV Vxx,Vyy`: copies the value from the registry `Vxx` to the registry `Vyy`;
- `MOV n,Vxx`: assigns the numeric constant nto the register `Vxx` (overwrites if it already has a value);
- `ADD Vxx,Vyy`: calculates ( `Vxx + Vyy`) and stores the result in `Vxx`;
- `DEC Vxx`: decrements the value of `Vxx` by 1.
- `INC Vxx`: increases the value of `Vxx` by 1.
- `JMP i`: jumps to instruction number `i` if `V00` different from `0`. `i` It is guaranteed to be a valid instruction number and `0` would be the first instruction.

**Since the CPU is 8 bits**, the number it could represent ranges from `0` to `255`. If you increase the number `255` it causes an overflow and results in `0`. And if you decrement `0`, it results in `255`. Keep in mind, then, that the number `280` would be `24` in the CPU.

After the last statement has been executed, you must return an array with the result for each record. **From V00 to V07.** Examples:

```sh
executeCommands([
  'MOV 5,V00',  // V00 is 5
  'MOV 10,V01', // V01 is 10
  'DEC V00',    // V00 now is 4
  'ADD V00,V01' // V00 = V00 + V01 = 14
])

// Output: [14, 10, 0, 0, 0, 0, 0]

executeCommands([
  'MOV 255,V00', // V00 is 255
  'INC V00',     // V00 is 256, overflows a 0
  'DEC V01',     // V01 is -1, overflows a 255
  'DEC V01'      // V01 is 254
])

// Output: [0, 254, 0, 0, 0, 0, 0]

executeCommands([
  'MOV 10,V00', // V00 is 10
  'DEC V00',    // decreases V00 in 1  <---┐
  'INC V01',    // increases V01 in 1      |
  'JMP 1',      // loop until V00 be 0 ----┘
  'INC V06'     // increases V06 in 1
])

// Output: [ 0, 10, 0, 0, 0, 0, 1, 0 ]
```

All instructions provided are already validated and guaranteed to be correct.
