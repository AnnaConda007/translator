export const paginateText = (text: string, charsPerPage = 1000) => {
  const pages: string[] = [];
  let start: number = 0;

  while (start < text.length) {
    let end = start + charsPerPage;
    if (end < text.length) {
      while (!/\s/.test(text[end]) && end > start) {
        end--;
      }
    } else {
      end = text.length;
    }
    pages.push(text.slice(start, end));
    start = end;
  }
  return pages;
};
