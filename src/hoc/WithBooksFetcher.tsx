//withtBooksFetcher.js
import useFetchBooksFromDatabase from '../hooks/useFetchBooksFromDatabase';
const WithBooksFetcher  = (props) => {
  useFetchBooksFromDatabase()
  return()
};
export default WithBooksFetcher 
