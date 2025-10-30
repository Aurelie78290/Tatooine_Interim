import { useContext } from 'react';
import DataContext from '../contexts/DataContext';
function Home() {
const { data } = useContext(DataContext);

	return <h1>{console.log(data)} Home page</h1>;

}

export default Home;
