export const paginateText = (text: string, charsPerPage = 1000) => {
  const pages: string[] = [];
  for (let i = 0; i < text.length; i += charsPerPage) {
    pages.push(text.slice(i, i + charsPerPage));
  }
  return pages;
};
