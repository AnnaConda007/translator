import { useSelector } from "react-redux";
import { RootStoreState } from "../../../redux/store";
import ButtonAddToDictionary from "../../button-add-to-dictionary/ButtonAddToDictionary";

const TranslationResultDisplay: React.FC = () => {
  const addBtnVisible = useSelector(
    (state: RootStoreState) => state.visibility.translationInput
  );
  const translatedWord = useSelector(
    (state: RootStoreState) => state.translator.russianWord
  );

  return (
    <>
      {addBtnVisible ? (
        <div>
          <ButtonAddToDictionary />
          <span>{translatedWord}</span>
        </div>
      ) : null}
    </>
  );
};

export default TranslationResultDisplay;
