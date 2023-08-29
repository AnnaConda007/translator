 import { ButtonDirection } from '../enum'
type PaginateButtonProps = {
  setCurrentPageNumber: (value:number) => void
  buttonValue : string,
  buttonDirection:ButtonDirection,
  currentPageNumber : number
}

const PaginateButton :React.FC<PaginateButtonProps> = ({setCurrentPageNumber, buttonValue,buttonDirection, currentPageNumber })=>{
const targetPageNumber : number= (buttonDirection ===ButtonDirection.NEXT) ? currentPageNumber+1 : currentPageNumber-1

  const handleButton = ()=>{ 
    setCurrentPageNumber(targetPageNumber)
    localStorage.setItem(
      "currentPageNumber",
      targetPageNumber.toString()
    );
  }

  return(
    <button onClick={()=> handleButton()}>
{buttonValue}
    </button>
  )
}
export default PaginateButton