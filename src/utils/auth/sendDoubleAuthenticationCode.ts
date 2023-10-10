import axios from "axios";
import { serverUrl } from "../../constants";

export const sendDoubleAuthenticationCode = async (
  recipientMail: string,
): Promise<string> => {
  const textWithCode: string = Math.floor(
    100000 + Math.random() * 900000,
  ).toString();
  try {
    await axios.post(`${serverUrl}/sendDoubleAuthenticationCode`, {
      recipientMail: recipientMail,
      textWithCode: textWithCode,
    });
    return textWithCode;
  } catch (error) {
    throw error;
  }
};
