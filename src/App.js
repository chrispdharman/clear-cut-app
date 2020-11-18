import Navigation from './shared/Navigation';
import Uploader from './Uploader';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
      </header>
      <body>
        <Uploader />
      </body>
    </div>
  );
}

export default App;
