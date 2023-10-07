import { Box, ListItem, ListItemText, List } from "@mui/material";
import { styled } from "@mui/system";
import { alpha } from "@mui/system";

export const StyledWrapBox = styled(Box)`
  ${({ theme }) => `
    width: 280px; 
    height: 360px;  
    border-radius: 10px;
    margin-right: 50px;
    box-sizing: border-box;
    display: flex; 
    justify-content: center;
    flex-wrap: wrap;
    background: linear-gradient(to bottom right, ${theme.palette.primary.light}, ${theme.palette.primary.light});
  
    box-shadow: 0 0 10px 5px ${theme.palette.secondary.light};
 
    @media (max-width: 900px) { 
      margin-right: 0;
      box-shadow: 0 0 20px 25px ${theme.palette.primary.light};
    }
    @media (max-width: 705px) { 

      width: 100%;    
      position: absolute;  
      z-index:0
    }
  `}
`;

export const StyledContentBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  borderRadius: "10px",
  width: "230px",
  height: "300px",
  marginTop: "5px",
  marginBottom: "20px",
  position: "relative",
}));

export const ListStyled = styled(List)({
  overflowY: "auto",
  maxHeight: "80%",
});

export const ListItemStyled = styled(ListItem)(({ theme }) => ({
  backgroundColor: alpha(theme.palette.primary.light, 0.3),
  marginTop: "2px",
  paddingLeft: "5px",
}));

export const ListItemTextStyled = styled(ListItemText)({
  overflowWrap: "break-word",
  "& span": {
    fontSize: "15px",
  },
});
