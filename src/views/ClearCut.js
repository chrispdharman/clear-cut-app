import Navigation from '../shared/Navigation';
import Uploader from '../utils/Uploader';
import './ClearCut.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
      </header>
      <div className='App-body'>
        <p>Upload your media for processing here!</p>
        <Uploader />
      </div>
    </div>
  );
}

export default App;
