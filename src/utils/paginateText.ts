export const paginateText = (text: string, maxLinesPerPage = 18, maxCharsPerLine = 100) => {
  const pages: string[] = [];
  const lines = text.split('\n');

  let currentPage: string[] = [];
  let currentLineCount = 0;

  for (const line of lines) {
    if (line.length <= maxCharsPerLine) {
      // Если строка умещается целиком
      currentPage.push(line);
      currentLineCount++;
    } else {
      // Если строка не умещается, разбиваем ее на подстроки, учитывая пробелы
      let startIdx = 0;
      while (startIdx < line.length) {
        let endIdx = startIdx + maxCharsPerLine;
        if (endIdx < line.length) {
          // Ищем ближайший пробел для корректного разбиения
          while (line[endIdx] !== ' ' && endIdx > startIdx) {
            endIdx--;
          }
          if (endIdx === startIdx) {
            // Если пробел не найден, обрезаем по максимальной длине
            endIdx = startIdx + maxCharsPerLine;
          }
        }

        currentPage.push(line.slice(startIdx, endIdx));
        currentLineCount++;
        startIdx = endIdx + 1; // +1 чтобы пропустить пробел

        // Проверяем, не достигли ли мы максимума строк на текущей странице
        if (currentLineCount === maxLinesPerPage) {
          pages.push(currentPage.join('\n'));
          currentPage = [];
          currentLineCount = 0;
        }
      }
    }

    // Проверяем, не нужно ли добавить страницу после добавления строки
    if (currentLineCount === maxLinesPerPage) {
      pages.push(currentPage.join('\n'));
      currentPage = [];
      currentLineCount = 0;
    }
  }

  // Добавляем оставшиеся строки, если они есть
  if (currentPage.length > 0) {
    pages.push(currentPage.join('\n'));
  }

  return pages;
};
