<h2 align="center">Create christmas decoration</h2>

A couple of Christmas enthusiasts have created a Christmas decorations company. The first ornament they want to make is a bucket that is placed on the trees.

The problem is that they have to program the machine and they don't know how to do it. They have asked us for help to achieve this.

To **create the cubes, a number with the desired size** is passed to the program and it returns a number string with the **design of that size** . For example, if we pass a 3, the program should return a 3x3x3 cube:

```sh
const cube = createCube(3)
```

```sh
  /\_\_\_\
 /\/\_\_\_\
/\/\/\_\_\_\
\/\/\/_/_/_/
 \/\/_/_/_/
  \/_/_/_/
```

As you can see, the cube visually has three faces. The symbols used to construct the faces of the cube are: `/`, `\`, `_`and (blank).

Other examples of cubes:

```sh
const cubeOfOne = createCube(1)
```

```sh
/\_\
\/_/
```

```sh
const cubeOfTwo = createCube(2)
```

```sh
 /\_\_\
/\/\_\_\
\/\/_/_/
 \/_/_/
```

To consider:

- **Look closely at the blank spaces in the cube.**
- **The cube has to be symmetrical.**
- **Make sure you use the correct symbols.**
- **Each new line in the cube must end with a line feed (`\n`) except the last one.**
