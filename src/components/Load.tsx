import load from "../assets/load.gif"
import { Box } from '@mui/material';

const Load = () => {
  return (
    <Box sx={{ width: "100%", height: "100%", display: "flex", justifyContent: "center" }}>
      <img style={{ width: "50px", height: "50px", marginTop: "20%" }} src={load} alt="Loading." />
    </Box>
  )
}


export default Load