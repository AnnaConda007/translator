import { useFetchBookAndDictionaryFromDatabase } from '../../hooks/useFetchDataFromDatabase';
import Nav from "../../components/nav/Nav";
import ActiveNawItemsContentBox from '../../components/activeNawItemsContentBox/ActiveNawItemsContentBox';
import styles from "./home.mudule.css"
import Box from '@mui/material/Box';


const Home: React.FC = () => {
  useFetchBookAndDictionaryFromDatabase()



  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <Nav />
      <ActiveNawItemsContentBox />

    </Box>
  );
};

export default Home;
