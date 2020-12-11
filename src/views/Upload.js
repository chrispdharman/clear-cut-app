import Navigation from '../shared/Navigation';
import Uploader from '../shared/Uploader';
import './Upload.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
      </header>
      <div className='App-body'>
        <p>Upload your media for processing here!</p>
        <Uploader handler='process-clear-cut'/>
      </div>
    </div>
  );
}

export default App;
