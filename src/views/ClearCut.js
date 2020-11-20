import Navigation from '../shared/Navigation';
import Uploader from '../shared/Uploader';
import './ClearCut.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
      </header>
      <body>
        <p>Upload your media for processing here!</p>
        <Uploader />
      </body>
    </div>
  );
}

export default App;
