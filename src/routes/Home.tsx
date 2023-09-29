import { useFetchBookAndDictionaryFromDatabase } from '../hooks/useFetchDataFromDatabase';
import Nav from "../components/nav/Nav";


const Home: React.FC = () => {
  useFetchBookAndDictionaryFromDatabase()



  return (
    <>
      <Nav />
    </>
  );
};

export default Home;
