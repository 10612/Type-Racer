const dictionaryPromise = await ((getDictionary() as unknown as string | void));
let dictionary: string[];
let dictionaryLength: number;
if (typeof dictionaryPromise === "string") {
  dictionary = dictionaryPromise.split("\n");
  dictionaryLength = dictionary.length;
}

async function getDictionary() {
  return fetch("https://gist.githubusercontent.com/deekayen/4148741/raw/98d35708fa344717d8eee15d11987de6c8e26d7d/1-1000.txt")
    .then(
      response =>
        response.text(),
      () =>
        alert("Page failed to load")
    );
}

export default function buildTextArray(): string[] {
  let textArray: string[] = [];
  let nextWord: string;
  let approxLetterCount: number = 200;
  let randomWordIndex: number;
  while (approxLetterCount > 0) {
    randomWordIndex = Math.round(Math.random() * (dictionaryLength - 1));
    nextWord = dictionary[randomWordIndex].toLowerCase();
    textArray.push(nextWord);
    approxLetterCount -= nextWord.length;
  }
  return textArray;
}