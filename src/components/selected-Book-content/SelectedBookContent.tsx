import { useSelector } from "react-redux/es/hooks/useSelector";
import { RootStoreState } from "../../redux/store";
const SelectedBook: React.FC = () => {
  const selectedBook = useSelector(
    (state: RootStoreState) => state.book.selectedBook
  );

  return (
    <div>
      {selectedBook.split("\n").map((paragraph, idx1) => (
        <span key={idx1}>
          {paragraph.split(/\s+/).map((word, idx2) => (
            <span
              key={idx2}
              onClick={() => console.log(word)}
              style={{ cursor: "pointer", marginRight: "5px" }}
            >
              {word}
              &nbsp;
            </span>
          ))}
          <br />
        </span>
      ))}
    </div>
  );
};

export default SelectedBook;
