import Box from "@mui/material/Box";
import styles from "./noActiveEducationImage.module.css";
import smallCatImg from "../../../assets//img/catSmall.png";
import catImg from "../../../assets/img/cat.png";

const NoActiveEducationImage = () => {
  return (
    <Box sx={{ alignSelf: "flex-end" }}>
      <img className={styles.image} src={catImg} alt="cat" />
      <img className={styles.imageSmal} src={smallCatImg} alt="cat" />
    </Box>
  );
};

export default NoActiveEducationImage;
