import catImg from "../../../assets/cat.png";
import styles from "./noActiveEducationImage.module.css"
import Box from '@mui/material/Box';
const NoActiveEducationImage = () => {
  return (
    <Box sx={{ alignSelf: "flex-end" }}>
      <img className={styles.image} src={catImg} alt="Descriptive alt text" />
    </Box>
  )
}

export default NoActiveEducationImage