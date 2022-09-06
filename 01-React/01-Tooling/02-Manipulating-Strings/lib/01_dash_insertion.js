function insertDash(word) {
  // TODO: implement the method and return word with dashes
  const vowels = ["a", "e", "i", "o", "u", "y", " "];
  if (word.length === 0) {
    return word;
  }
  let output = word[0];
  for (let i = 1; i < word.length; i += 1) {
    if (!vowels.includes(word[i].toLowerCase()) && !vowels.includes(word[i - 1].toLowerCase())) {
      output += `-${word[i]}`;
    } else {
      output += word[i];
    }
  }
  return output;
}

module.exports = insertDash;
