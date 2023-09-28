import { addNewBook_libraryURL } from '../../contains';

export const addNewBookInLibrary = async (titleBook: string, bookContent: string): Promise<boolean> => {
  try {
    const url = addNewBook_libraryURL(titleBook)
    await fetch(url,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookContent),
      }
    );
    return true
  } catch (error) {
    console.error(error)
    return false

  }

}