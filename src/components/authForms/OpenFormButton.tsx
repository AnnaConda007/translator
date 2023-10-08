import React from "react";
import { Button } from "@mui/material/";
import {  useSelector } from "react-redux";
import { RootStoreState } from "../../redux/store"; 

interface OpenFormButtonProps {
  value: string;
  handleButton: (value: string) => void;
}

const OpenFormButton: React.FC<OpenFormButtonProps> = ({
  value,
  handleButton,
}) => {
  const selectedButton = useSelector(
    (state: RootStoreState) => state.visibility.authForm,
  );

  return (
    <>
      {selectedButton == "" && (
        <Button variant="contained" onClick={() => handleButton(value)}>
          {value}
        </Button>
      )}
    </>
  );
};

export default OpenFormButton;
