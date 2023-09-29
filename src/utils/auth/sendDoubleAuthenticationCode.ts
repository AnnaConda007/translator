import axios from "axios";
import { serverUrl } from '../../contains';
import { contactAppMail } from '../../contains';



const senderPassword = import.meta.env.VITE_AUTENTIFICATOIN__CODE_SENDER_MAIL_PASSWORD;
export const sendDoubleAuthenticationCode = async (recipientMail: string): Promise<string> => {
  const textWithCode: string = Math.floor(100000 + Math.random() * 900000).toString()
   try {
    await axios.post(`${serverUrl}/sendDoubleAuthenticationCode`, {
      senderMail: contactAppMail,
      senderPassword: senderPassword,
      recipientMail: recipientMail,
      textWithCode: textWithCode,
    });
    return textWithCode
  } catch (error) {
    throw error
  }
}


