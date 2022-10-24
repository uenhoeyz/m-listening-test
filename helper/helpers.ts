export function shuffle<T>(array: T[]) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

export function getRandomNNumbers(max: number, n: number) {
  const numberArr: number[] = []
  for (let i = 0; i < n; i++) {
    let index:number = Math.floor(Math.random() * max)
    while (numberArr.includes(index)) {
      index = Math.floor(Math.random() * max)
    }
    numberArr.push(index)
  }
  return numberArr
}

export function generateUID() {
  // I generate the UID from two parts here 
  // to ensure the random number provide enough bits.
  const firstPart = (Math.random() * 46656) | 0;
  const secondPart = (Math.random() * 46656) | 0;
  const firstPartStr = ("000" + firstPart.toString(36)).slice(-3);
  const secondPartStr = ("000" + secondPart.toString(36)).slice(-3);
  return firstPartStr + secondPartStr;
}