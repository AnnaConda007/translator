import { useCallback, useState } from "react";
import { Box, Button } from "@mui/material/";
import { useDispatch } from "react-redux";
import SignInForm from "./signIn/SignIn";
import SignUpForm from "./signUp/SignUp";
import { resetForms } from "../../redux/authSlise";

const AuthForms = () => {
  const dispatch = useDispatch();
  const [selectedButton, setSelectedButton] = useState("");
  const signUp = "регистрация";
  const signIn = "войти";

  const handleButton = useCallback(
    (value: string) => {
      setSelectedButton(value);
      if (value) dispatch(resetForms());
    },
    [dispatch],
  );

  return (
    <Box>
      <Box>
        <Button
          variant="contained"
          onClick={(e) => handleButton(e.currentTarget.textContent || "")}
        >
          {signUp}
        </Button>
        {selectedButton === signUp && <SignUpForm />}
      </Box>

      <Box>
        <Button
          variant="contained"
          onClick={(e) => handleButton(e.currentTarget.textContent || "")}
        >
          {signIn}
        </Button>
        {selectedButton === signIn && <SignInForm />}
      </Box>
    </Box>
  );
};

export default AuthForms;
