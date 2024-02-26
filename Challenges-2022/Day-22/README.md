<h2 align="center">Lighting in tune</h2>

Verify that all independent sequences of Christmas lighting systems are in strictly increasing order. We have two arrays: `systemName` sand `stepNumbers`.

`systemNames` contains the names of the Christmas lighting systems, and `stepNumbers` contains the step numbers for each system.

We must verify that those `stepNumbers` of each system are in strictly increasing order. If this is `true`, it returns true; otherwise it returns `false`.

For example:

```sh
const systemNames = ["tree_1", "tree_2", "house", "tree_1", "tree_2", "house"]
const stepNumbers = [1, 33, 10, 2, 44, 20]

checkStepNumbers(systemNames, stepNumbers) // => true

// tree_1 has the steps: [1, 2]
// tree_2 has the steps: [33, 44]
// house has the steps: [10, 20]

// true: The steps of each system are in strictly ascending order

checkStepNumbers(["tree_1", "tree_1", "house"], [2, 1, 10]) // => false

// tree_1 has the steps: [2, 1]
// house has the steps: [10]

// false: tree_1 has the steps in decreasing order
```

Note that:

- **The position of the system name in `systemName` sand the step number in `stepNumbers` correspond to the same system.**
- **The steps in `stepNumbers` can be repeated for different systems.**
