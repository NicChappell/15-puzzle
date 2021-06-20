export const shuffle = (array: number[]) => {
  let currentIndex = array.length;
  let randomIndex: number;

  // while there are unshuffled elements
  while (0 !== currentIndex) {
    // randomly select a remaining element
    randomIndex = Math.floor(Math.random() * currentIndex);

    // decrement current index
    currentIndex--;

    // swap elements
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};
