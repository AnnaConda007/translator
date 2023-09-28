import { useFetchBookAndDictionaryFromDatabase } from '../hooks/useFetchDataFromDatabase';
import Nav from "../components/nav/Nav";
import { useSelector } from 'react-redux';
import { RootStoreState } from '../redux/store';

const Home: React.FC = () => {
  const languageRecorderInDB = useSelector((state:RootStoreState)=> state.authorization.languageRecorderInDB)
  const fetchDataFromDB = useFetchBookAndDictionaryFromDatabase()
  if(languageRecorderInDB) {
    fetchDataFromDB()
  }
  return (
    <>
      <Nav />
    </>
  );
};

export default Home;
