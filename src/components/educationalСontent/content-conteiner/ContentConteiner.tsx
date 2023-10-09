 
import { StyledContentBox, StyledContentBacking} from '../Styled'
import CloaeContentButton from '../cloaeContentButton/CloaeContentButton';
interface ContentConteinerProps{
  children: React.ReactNode;
}

const ContentConteiner:React.FC<ContentConteinerProps> = ({children})=>{
return(
<StyledContentBacking>
<CloaeContentButton/>
<StyledContentBox>
{children}
</StyledContentBox>
</StyledContentBacking>

)
}

export default ContentConteiner