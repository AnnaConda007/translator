import Box from "@mui/material/Box";
import { MainImage, SmallImage } from "./noActiveContentStyled";
import smallCatImg from "../../../assets//img/catSmall.png";
import catImg from "../../../assets/img/cat.png";

const NoActiveEducationImage = () => {
  return (
    <Box sx={{ alignSelf: "flex-end" }}>
      <MainImage src={catImg} alt="cat" />
      <SmallImage src={smallCatImg} alt="cat" />
    </Box>
  );
};

export default NoActiveEducationImage;
