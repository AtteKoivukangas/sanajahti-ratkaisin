function solverWorker() {
  const findStringsThatCanBeFormedFromAnotherString = (stringArray, givenString) => {
    const charCounts = new Array(215).fill(0);
    for (let i = givenString.length - 1; i >= 0; i--) {
        charCounts[givenString[i].toUpperCase().charCodeAt(0)]++;
    }
  
    return stringArray.filter(str => {
      const strCharCounts = new Array(215).fill(0);
      for (let i = str.length - 1; i >= 0; i--) strCharCounts[str[i].toUpperCase().charCodeAt(0)]++;
      for (let i = 65; i < 91; i++) return charCounts[i] >= strCharCounts[i]; // A-Z
      return charCounts[196] >= strCharCounts[196] || charCounts[214] >= strCharCounts[214]; // Ä&Ö
    });
  };
  
  const wordzDFS = (boardData, words) => {
    const board = [0, 4, 8, 12].map(value => boardData.slice(value, value + 4));

    const filteredWords = findStringsThatCanBeFormedFromAnotherString(words, boardData).filter(word => word.length > 2);
    const wordsFound = new Set();
  
    filteredWords.map(n => n.toUpperCase()).forEach(wordToFind => {
      const visitedSlots = new Array(4);
      for (let i = 0; i < 4; i++) {
        visitedSlots[i] = new Array(4).fill(0);
      }
  
      const wordBuilder = [];
      let isWordBuiltSuccesfully = false;
  
      const dfs = (y, x) => {
        if (
          y < 0 || y > 3 || x < 0 || x > 3 || // outside of board?
          visitedSlots[y][x] || isWordBuiltSuccesfully || // slot already visited or word already found?
          wordToFind[wordBuilder.length] !== board[y][x].toUpperCase() // is character in this slot correct?
        ) return;
  
        visitedSlots[y][x] = 1;
        wordBuilder.push(board[y][x].toUpperCase());
  
        if (wordBuilder.length === wordToFind.length) {
          wordsFound.add(wordToFind);
          isWordBuiltSuccesfully = true;
  
          return;
        }
  
        for (let i = -1; i < 2; i++) {
          for (let j = -1; j < 2; j++) {
            if (i === 0 && j === 0) continue;
            dfs(y+i,x+j);
          }
        }
  
        wordBuilder.pop();
        visitedSlots[y][x] = 0;
      }
  
      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
          // if slot has first character of word then start dfs
          if (board[i][j].toUpperCase() === wordToFind[0]) dfs(i,j);
        }
      }
    });
  
    return Array.from(wordsFound).sort((a, b) => b.length - a.length);
  };
  // eslint-disable-next-line no-restricted-globals
  self.onmessage = event => {
    const { board, words } = event.data;
    const solutions = wordzDFS(board, words);

    // eslint-disable-next-line no-restricted-globals
    self.postMessage(solutions);
  }
};

let code = solverWorker.toString();
code = code.substring(code.indexOf('{') + 1, code.lastIndexOf('}'));

const blob = new Blob([code], { type: 'application/javascript' });
const workerScript = URL.createObjectURL(blob);

export default workerScript;