import Animation from '../../shared/Animation';
import Navigation from './Navigation';
import './Landing.css';

import { withAuthenticator } from '@aws-amplify/ui-react'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
      </header>
      <div className='App-body'>
        <h3>What is this?</h3>
        <p>
          Welcome to Chris' Clear Cut website! <br /> <br />
          Clear Cut is a image processing tool written in Python which aims to do two things:
          <ol>
            <li>Draw out the main features of an image.</li>
            <li>Discard the small random noise of an image.</li>
          </ol>
          If you're a developer and would like to play around with the package, you can install via <a href="https://pypi.org/project/clear-cut/" target="_blank"> https://pypi.org/project/clear-cut/ </a>.
        </p>
        <h3>Usage</h3>
        <p>
          If you ever see the below icon it means something is loading or being processed. <br /> <br />
          To stop any loading/processing events, click the cancel button inside the animation. <br /> <br />
          Feel free to try this now:
        </p>
        <Animation showCancel/>
        <h3>Footnotes</h3>
        <p>
          I hope you enjoy using this tool and, even better, if you can see a valuable use case for it.<br /> <br />
          If you're interested, please reach out to me on christopher.p.d.harman@gmail.com. I'll be only to happy to discuss integrations, extensions, or further development.
        </p>
      </div>
    </div>
  );
}

export default withAuthenticator(App);
