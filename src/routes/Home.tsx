import { PageContainer } from "./routesStyled";
import ActiveNawItemsContentBox from "../components/educationalСontent/ActiveNawItemsContentBox/ActiveNawItemsContentBox";
import Nav from "../components/nav/Nav";
import { useFetchBookAndDictionaryFromDatabase } from "../hooks/useFetchDataFromDatabase";
const Home: React.FC = () => {
  useFetchBookAndDictionaryFromDatabase();

  return (
    <PageContainer>
      <Nav />
      <ActiveNawItemsContentBox />
    </PageContainer>
  );
};

export default Home;
