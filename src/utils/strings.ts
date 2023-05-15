export const truncate = (words: string, maxLength: number) => {
  if (words.length <= maxLength) return words;
  return `${words.slice(0, maxLength)} …`
};