import { amountAnswerOption } from "../contains";

export const shuffleArr = <T>(array: Array<T>) => {
  const shuffleArray = [...array];
  for (let i = 0; i < shuffleArray.length; i++) {
    const randomIndex: number = Math.floor(Math.random() * (i + 1));
    [shuffleArray[i], shuffleArray[randomIndex]] = [
      shuffleArray[randomIndex],
      shuffleArray[i],
    ];
  }
  return shuffleArray;
};

export const randomForeignWords = (
  foreignWords: Array<string>,
  correctAnswer: string
): Array<string> => {
  const filteredForeignWords = foreignWords.filter(
    (word) => word !== correctAnswer
  );
  const shuffledForeignWords: Array<string> = shuffleArr(
    filteredForeignWords
  ).slice(0, amountAnswerOption - 1);
  const answerOptions = [...shuffledForeignWords, correctAnswer];
  return shuffleArr(answerOptions);
};
