module.exports = function findRotationPoint(words) {
  
  let leftBoundIndex = 0,
      rightBoundIndex = words.length - 1,
      guessIndex
      
  while (true) {
    guessIndex = leftBoundIndex + Math.ceil((rightBoundIndex - leftBoundIndex) / 2)

    // fall -> the rotation point is in the LEFT side
    if ( compare( words[leftBoundIndex], words[guessIndex] ) < 0) {
      rightBoundIndex = guessIndex 
      if ((guessIndex - leftBoundIndex) <= 1) return guessIndex
      continue
    } 

    // fall -> the rotation point is in the RIGHT side
    if ( compare( words[guessIndex], words[rightBoundIndex] ) < 0) {
      leftBoundIndex = guessIndex
      if ((rightBoundIndex - guessIndex) <= 1) return rightBoundIndex
      continue
    }
    // no noticed fall 
    return leftBoundIndex
  }  
}

// a word is actually a 25-nary number in nature, that we can compare
function compare (leftWord, rightWord) {
let leftWordLength = leftWord.length,
    rightWordLength = rightWord.length,
    depth = (leftWordLength > rightWordLength) ? leftWordLength : rightWordLength // longest

for (let i = 0, leftCharCode, rightCharCode; i < depth; i++) {
  
  leftCharCode = isNaN( leftWord.charCodeAt(i) ) ? 0 : leftWord.charCodeAt(i)
  rightCharCode = isNaN( rightWord.charCodeAt(i) ) ? 0 : rightWord.charCodeAt(i)

  if (leftCharCode > rightCharCode) return -1 // falls
  if (leftCharCode < rightCharCode) return 1 // grows
}
return 0 // equal
}
