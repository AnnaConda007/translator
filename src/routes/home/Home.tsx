import Box from "@mui/material/Box";
import styles from "./home.module.css";
import ActiveNawItemsContentBox from "../../components/educationalСontent/ActiveNawItemsContentBox/ActiveNawItemsContentBox";
import Nav from "../../components/nav/Nav";
import { useFetchBookAndDictionaryFromDatabase } from "../../hooks/useFetchDataFromDatabase";

const Home: React.FC = () => {
  useFetchBookAndDictionaryFromDatabase();

  return (
    <Box className={styles.mainBox}>
      <Nav />
      <ActiveNawItemsContentBox />
    </Box>
  );
};

export default Home;
