import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootStoreState } from "../redux/store";
import { IBooks } from "../redux/allLoadedBooksSlice";
import useFetchBooksFromDatabase from "../hooks/useFetchBooksFromDatabase";
import { paginateText } from "../utils/paginateText";
import DisplayForSelectedBook from "../components/display-for-selected-book/DisplayForSelectedBook";
const SelectedBookContent = () => {
  type RouteParams = {
    bookTitle: string;
  };
  useFetchBooksFromDatabase();
  const { bookTitle } = useParams() as RouteParams;
  const loadedBooks: IBooks = useSelector(
    (state: RootStoreState) => state.books
  );
  const book: string = loadedBooks[bookTitle];

  return (
    <>
      <DisplayForSelectedBook loadedBook={book} />
    </>
  );
};

export default SelectedBookContent;
