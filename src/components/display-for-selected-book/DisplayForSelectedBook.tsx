import React from "react";
import { StyledBoxForBook } from "./DisplayForSelectedBookStyled";
import PaginateButton from "./paginate-button/PaginateButton";
import TextSelectedBook from "./Text-selected-book/TextSelectedBook";
import { ButtonPaginnationDirection } from "../../enums/paginnationDirectionEnum";
import { usePaginate } from "../../hooks/usePaginate";
import Load from "../Load";
interface DisplayForSelectedBookProps {
  currentPage: number;
}

const DisplayForSelectedBook: React.FC<DisplayForSelectedBookProps> = ({
  currentPage,
}) => {
  const {
    bookPages,
    currentPageText,
    setCurrentPageNumber,
    currentPageNumber,
  } = usePaginate(currentPage);

  if (!currentPageText) {
    return <Load />;
  }
  return (
    <StyledBoxForBook>
      <TextSelectedBook currentPageText={currentPageText} />
      <div>
        {currentPageNumber > 1 && (
          <PaginateButton
            setCurrentPageNumber={setCurrentPageNumber}
            buttonValue={"back"}
            direction={ButtonPaginnationDirection.BACK}
            currentPageNumber={currentPageNumber}
          />
        )}
        <span>
          {currentPageNumber}/{bookPages.length}
        </span>
        {currentPageNumber < bookPages.length && (
          <PaginateButton
            setCurrentPageNumber={setCurrentPageNumber}
            buttonValue={"next"}
            direction={ButtonPaginnationDirection.NEXT}
            currentPageNumber={currentPageNumber}
          />
        )}
      </div>
    </StyledBoxForBook>
  );
};

export default DisplayForSelectedBook;
