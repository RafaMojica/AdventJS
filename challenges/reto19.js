function sortToys(toys, positions) {
  const order = {}

  for (let i = 0; i < positions.length; i++) {
    order[positions[i]] = toys[i]  
  }

  return Object.values(order);
}