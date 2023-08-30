import { Popover } from "@mui/material";

interface ITranslationPopover {
  anchorEl: Element | null
  setAnchorEl  :(el:HTMLSpanElement | null)=> void,
  translatedWord:string
}

const TranslationPopover: React.FC<ITranslationPopover> = ({
  anchorEl, setAnchorEl, translatedWord
}) => {
  const handleClose = () => {
    setAnchorEl(null);
  };
  
   return (
    <>
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <div>
          <button> записать в словарь</button>
          <button> перевести другое слово</button>
          {translatedWord}
        </div>
      </Popover>
    </>
  );
};

export default TranslationPopover;
