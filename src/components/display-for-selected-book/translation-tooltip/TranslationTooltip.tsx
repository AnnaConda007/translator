interface ITranslationTooltip{ 
  translatedWord:string
}
const TranslationTooltip : React.FC <ITranslationTooltip>= ({ translatedWord })=>{
  return(
    <>
      
      <div
        style={{
          position: "absolute",
          top: "-15px",
          left: "0",
          backgroundColor: "red",
          border: "1px solid black",
          zIndex: 1,
        }}
      >
         <button> записать в словарь</button>
         <button> перевести другое слово</button>
        {translatedWord}
      </div>
    </>
 
  )
}



export default TranslationTooltip 



 