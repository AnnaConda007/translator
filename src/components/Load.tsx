import { Box } from "@mui/material";
import load from "../assets/img/load.gif";

const Load = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <img
        style={{ width: "50px", height: "50px", marginTop: "20%" }}
        src={load}
        alt="Loading."
      />
    </Box>
  );
};

export default Load;
