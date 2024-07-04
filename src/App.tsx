import { BurgerMenu } from './Context/burgerMenu';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import './styles/null.css';

const App = () => {
	return (
		<BurgerMenu>
			<div className='flex'>
				<Sidebar />
				<Main />
			</div>
		</BurgerMenu>
	);
};

export default App;
