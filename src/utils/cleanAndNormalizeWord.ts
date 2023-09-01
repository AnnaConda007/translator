export function cleanAndNormalize(word: string): string {
  word = word.trim().replace(/^[^a-zA-Zа-яА-Я-]+|[^a-zA-Zа-яА-Я-]+$/g, "");
  return word.toLowerCase();
}
