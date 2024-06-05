function decode(message) {
  let match = message.match(/\(([^()]+)\)/);

  if (!match) return message;

  const reversed = match[1].split("").reverse().join("");
  const newMessage = message.replace(match[0], reversed);
  const result = decode(newMessage);

  return result;
}
