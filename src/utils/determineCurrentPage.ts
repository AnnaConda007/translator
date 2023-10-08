import { LoadedBookData } from "../enums/bookEnum";

export const determineCurrentPage = (title: string) => {
  const lastSavedPage: string | null = localStorage.getItem(
    LoadedBookData.CURRENT_PAGE_NUMBER,
  );
  const lastSavedBookTitle: string | null = localStorage.getItem(
    LoadedBookData.CURRENT_TITLE_BOOK,
  );
  const curentPage =
    lastSavedPage && lastSavedBookTitle === title ? parseInt(lastSavedPage) : 1;
  return curentPage;
};
