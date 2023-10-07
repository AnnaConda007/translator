import catImg from "../../../assets/cat.png";
import smallCatImg from "../../../assets/catSmall.png";

import styles from "./noActiveEducationImage.module.css"
import Box from '@mui/material/Box';
const NoActiveEducationImage = () => {
  return (
    <Box sx={{ alignSelf: "flex-end" }}>
      <img className={styles.image} src={catImg} alt="cat" />
      <img className={styles.imageSmal} src={smallCatImg} alt="cat" />
    </Box>
  )
}

export default NoActiveEducationImage