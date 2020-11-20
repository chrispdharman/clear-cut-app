import Navigation from './shared/Navigation';
import Uploader from './Uploader';
import './ClearCut.css';

function ClearCut() {
  return (
    <div className="ClearCut">
      <header className="ClearCut-header">
        <Navigation />
      </header>
      <body>
        <p>Upload your media for processing here!</p>
        <Uploader />
      </body>
    </div>
  );
}

export default ClearCut;
