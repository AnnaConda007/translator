import { Button, Box } from "@mui/material";

type AutButtonProps = {
  valueButton: string;
};
const AutButton: React.FC<AutButtonProps> = ({ valueButton }) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", marginTop: "15px" }}>
      <Button type="submit" variant="contained">
        {valueButton}
      </Button>
    </Box>
  );
};
export default AutButton;
