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
        <p>
          Welcome to Chris' Clear Cut website! <br /> <br />
          If you ever see the below icon it means something is loading or being processed. <br /> <br />
          To stop any loading/processing events, click the cancel button inside the animation. <br /> <br />
          Feel free to try this now:
        </p>
        <Animation showCancel/>
        <p>
          This site is not affliated to any company, institue, or organisation. <br /> <br />
          It is simply the virtual playground of a bored and nerdy human being &#128406;.
        </p>
      </div>
    </div>
  );
}

export default withAuthenticator(App);
