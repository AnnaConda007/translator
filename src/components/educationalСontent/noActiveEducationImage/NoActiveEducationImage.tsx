import Box from "@mui/material/Box"; 
import smallCatImg from "../../../assets//img/catSmall.png";
import catImg from "../../../assets/img/cat.png";
import { MainImage, SmallImage } from './noActiveContentStyled'; 

const NoActiveEducationImage = () => {
  return (
    <Box sx={{ alignSelf: "flex-end" }}>
        <MainImage src={catImg} alt="cat" />
      <SmallImage   src={smallCatImg} alt="cat" />
    </Box>
  );
};

export default NoActiveEducationImage;
