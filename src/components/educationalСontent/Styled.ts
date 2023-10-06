import { styled } from '@mui/system';
import { Box } from "@mui/material";


export const StyledWrapBox = styled(Box)`
  ${({ theme }) => `
    width: 280px; 
    height: 360px; 
    background-color: blue;
    border-radius: 10px;
    margin-right: 50px;
    box-sizing: border-box;
    display: flex; 
    justify-content: center;
    flex-wrap: wrap;
    background: linear-gradient(to bottom right, ${theme.palette.primary.light}, ${theme.palette.primary.light});

    @media (max-width: 900px) { 
      margin-right: 0;
    }

    @media (max-width: 705px) { 
      width: 100%;    
      position: absolute; 
      border-radius: 0px;
    }
  `}
`;


export const StyledContentBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  borderRadius: "10px",
  width: "200px",
  height: "300px",
  marginTop: "5px",
  marginBottom: "20px",
}))





