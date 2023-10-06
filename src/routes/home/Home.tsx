import { useFetchBookAndDictionaryFromDatabase } from '../../hooks/useFetchDataFromDatabase';
import Nav from "../../components/nav/Nav";
import ActiveNawItemsContentBox from '../../components/educationalСontent/ActiveNawItemsContentBox/ActiveNawItemsContentBox';
import styles from "./home.module.css"
import Box from '@mui/material/Box';


const Home: React.FC = () => {
  useFetchBookAndDictionaryFromDatabase()



  return (
    <Box className={styles.mainBox}>
      <Nav />
      <ActiveNawItemsContentBox />

    </Box>
  );
};

export default Home;
