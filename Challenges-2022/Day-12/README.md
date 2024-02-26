<h2 align="center">Electric sleds, wow!</h2>

Santa Claus has new electric sleighs but he must control the electricity consumption since **he only has a 20W battery.**

They give us an **array of sleds** , **from worst to best** , with their respective consumption. Each sled is an object with two properties: `name` and `consumption`.

The field consumption is a number that represents the number of _watts (W)_ the sled **consumes** for each **unit of distance** . The field name is a text string that represents the name of the sled.

Create a program that returns the name of the best sled available that allows us to cover the distance.

```sh
const distance = 30
const sleighs = [
  { name: "Dasher", consumption: 0.3 },
  { name: "Dancer", consumption: 0.5 },
  { name: "Rudolph", consumption: 0.7 },
  { name: "Midu", consumption: 1 }
]

selectSleigh(distance, sleighs) // => "Dancer"

// Dasher consumes 9W to travel 30 distance
// The dancer consumes 15W to travel 30 distance
// Rudolph consumes 21W to travel 30 distance
// Midu consumes 30W to travel 30 distance

// The best sled you can travel with
// the distance is Dancer.

// Dasher goes the distance but is a worse sled
// Rudolph and Midu cannot travel the distance with 20W.
```

Remember that:

- **The battery is always 20W.**
- **The list of sleds is ordered from worst to best sled.**
- **You have to return the name of the best sled that allows us to cover the distance with the watts we have available.**
- **If no sled is usable for the distance, returns null.**
