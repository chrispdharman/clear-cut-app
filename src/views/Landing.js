import Navigation from '../shared/Navigation';
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
      </div>
    </div>
  );
}

export default withAuthenticator(App);
