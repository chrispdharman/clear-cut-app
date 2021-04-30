import Arrow from '../../shared/Arrow';
import Navigation from '../../shared/Navigation';

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
          Best use cases include converting a whiteboard full of text into a tidy image with noise removed.
        </p>
        <div className='WhiteboardExample'>
          <img src={original_image} className="Nav-logo" alt="original image" />
          <Arrow direction="right" />
          <img src={phase_one_image} className="Nav-logo" alt="gradient image" />
          <Arrow direction="right" />
          <img src={phase_two_image} className="Nav-logo" alt="noise reduced gradient image" />
          <Arrow direction="right" />
          <img src={final_image} className="Nav-logo" alt="final masked image" />
        </div>
      </div>
    </div>
  );
}

export default App;
