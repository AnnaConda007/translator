const InputFile: React.FC = () => {
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files: FileList | null = event.target.files;
    if (!files || files.length < 0) return;
    const file: File = files[0];
    const reader: FileReader = new FileReader();
    reader.onload = (e) => {
      if (!e.target) return;
      const arrayBuffer = e.target.result as ArrayBuffer;
      const decoder = new TextDecoder("windows-1251");
      const content = decoder.decode(arrayBuffer);
      fetch("https://books-31eba-default-rtdb.firebaseio.com/books/.json", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(content),
      });
    };
    reader.readAsArrayBuffer(file);
  };

  return <input type="file" accept=".txt" onChange={handleFileUpload} />;
};

export default InputFile;
