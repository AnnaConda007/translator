import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { toggleAddNewBookInput } from '../../redux/visibilitySlice ';
import { useDispatch } from 'react-redux';
import { addNewBook } from '../../redux/librarySlice';
import { addNewBookInLibrary } from '../../utils/updateDictionaryToBD';

const AddNewBookInput: React.FC = () => {
  const dispatch = useDispatch()
  const [titleBook, setTitleBook] = useState("")

  const handleFileUpload = (file: File) => {
    const reader = new FileReader();
    reader.onload = async (e) => {
      if (!e.target) return;
      const arrayBuffer = e.target.result as ArrayBuffer;
      const decoder = new TextDecoder("UTF-8");
      const content = decoder.decode(arrayBuffer);
      console.log(content)
      if (!titleBook) {
        alert("нет названия")
        return
      }else if (content.includes("\ufffd")) {
        alert("Текст содержит нераспознаваемые символы.");
        return;
      }
      await addNewBookInLibrary(titleBook, content)
      dispatch(addNewBook({ title: titleBook, bookContent: content }))
    };
    dispatch(toggleAddNewBookInput(false))
    setTitleBook("")
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
      <input type="file" accept=".txt" onChange={handleInputChange} />
      <p>Перетащите файл сюда или нажмите, чтобы выбрать файл</p>
    </div>

  );
};

export default AddNewBookInput;
