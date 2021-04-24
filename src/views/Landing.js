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
        <p>[Some funky animation or something here]</p>
        <Animation />
      </div>
    </div>
  );
}

export default withAuthenticator(App);
