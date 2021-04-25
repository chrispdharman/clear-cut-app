import Navigation from '../shared/Navigation';
import Animation from '../shared/Animation';
import './Landing.css';

import { withAuthenticator } from '@aws-amplify/ui-react'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
      </header>
      <div className='App-body'>
        <p>Welcome to Chris' Clear Cut website! <br /> <br />
          If you ever seen the below logo it means something is procesing/loading. <br />
          To stop the processing event, click the cancel button inside the animation.
        </p>
        <Animation showCancel/>
      </div>
    </div>
  );
}

export default withAuthenticator(App);
