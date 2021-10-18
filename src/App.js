import './App.scss';
import LeftBox from './components/LeftBox';

function App() {
  return (
    <div className='app'>
      <LeftBox />
      <div className='right-box'>Right</div>
    </div>
  );
}

export default App;
