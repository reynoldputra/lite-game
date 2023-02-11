import './App.css';
import Board from './components/Board';

function App() {
  return (
    <div className="App">
        <div className='h-screen w-screen bg-slate-800 flex justify-center items-center'>
            <Board />
        </div>
    </div>
  );
}

export default App;
