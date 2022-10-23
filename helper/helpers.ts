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