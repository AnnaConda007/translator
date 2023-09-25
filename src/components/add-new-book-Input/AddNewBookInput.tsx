import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { toggleAddNewBookInput } from '../../redux/visibilitySlice ';
import { useDispatch } from 'react-redux';
import { addNewBook } from '../../redux/librarySlice';
import { addNewBookInLibrary } from '../../utils/updateDictionaryToBD';
import { useSelector } from 'react-redux';
import { RootStoreState } from '../../redux/store';
const AddNewBookInput: React.FC = () => {
  const titles: Array<string> = useSelector((state: RootStoreState) => state.library.titlesBook)
  const titlesBooks = new Set(titles)
  console.log(titlesBooks)
  const dispatch = useDispatch()
  const [titleBook, setTitleBook] = useState("")
  const [errorLoad, setErrorLoad] = useState(false)
  const [matchedTitle, setMatchedTitle] = useState(false)

  const handleFileUpload = (file: File) => {
    const reader = new FileReader();
    reader.onload = async (e) => {
      if (!e.target) return;
      const arrayBuffer = e.target.result as ArrayBuffer;
      const decoder = new TextDecoder("UTF-8");
      const content = decoder.decode(arrayBuffer);
      const matchTitle = titlesBooks.has(titleBook)
      if (matchTitle) {
        setMatchedTitle(matchTitle)
        setTimeout(() => {
          dispatch(toggleAddNewBookInput(false))
        }, 2000);
        return
      } else if (!titleBook) {
        alert("выделить красным")
        return
      } else if (content.includes("\ufffd")) {
        setErrorLoad(true)
        return;
      }
      const additionBook = await addNewBookInLibrary(titleBook, content)
      setTitleBook("")
      dispatch(addNewBook({ title: titleBook, bookContent: content }))

      if (!additionBook) return
      setTimeout(() => {
        dispatch(toggleAddNewBookInput(false))
      }, 2000);
    };
    reader.readAsArrayBuffer(file);
  };

  const inputTextOnChange = (value: string) => {
    setTitleBook(value)
  }
  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "copy";
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files: FileList | null = event.target.files;
    if (!files || files.length === 0) return;
    const file: File = files[0];
    handleFileUpload(file);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file: File | undefined = event.dataTransfer.files[0];
    if (file) {
      handleFileUpload(file);
    }
  };

  return (

    <div
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      style={{ border: '2px dashed #ccc', padding: '20px', textAlign: 'center' }}
    >
      <TextField
        id="standard-basic"
        label="Название книги"
        variant="standard"
        onChange={(e) => inputTextOnChange(e.target.value)}
        value={titleBook}
      />
      {matchedTitle && (<span> Книга с таким названием уже добавлена в библиотеку, проверьте библиотеку или измените название</span>)}
      <input type="file" accept=".txt" onChange={handleInputChange} />
      <p>Перетащите файл сюда или нажмите, чтобы выбрать файл</p>
      {errorLoad && (<span> Текст содержит нераспознаваемые символы, проверьте текст и попробуйте еще раз </span>)}
    </div>

  );
};

export default AddNewBookInput;
