import Arrow from '../../shared/Arrow';
import Navigation from './Navigation';

import original_image from '../../media/images/0001_size_reduced_image.png';
import phase_one_image from '../../media/images/0006_merged_image_cut.png';
import phase_two_image from '../../media/images/0007_noise_reduced_image.png';
import final_image from '../../media/images/0008_edge_masked_image.png';
import './Manage.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
      </header>
      <div className='App-body'>
        <p>
          Welcome to ClearCut! An app designed to cut out the objects from any media you provide it. <br /> <br />
          Some best use cases include:
          <ul>
            <li>saving whiteboard scribbles into a tidy, compact image with noise removed.</li>
          </ul>
        </p>
        <div className='WhiteboardExample'>
          <img src={original_image} className="Nav-logo" alt="original" />
          <Arrow direction="right" />
          <img src={phase_one_image} className="Nav-logo" alt="gradient-calculated" />
          <Arrow direction="right" />
          <img src={phase_two_image} className="Nav-logo" alt="noise-reduced gradient" />
          <Arrow direction="right" />
          <img src={final_image} className="Nav-logo" alt="final noise-reduced masked" />
        </div>
      </div>
    </div>
  );
}

export default App;
