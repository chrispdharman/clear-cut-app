import RootNavigation from '../shared/RootNavigation';
import './Root.css';

import { withAuthenticator } from '@aws-amplify/ui-react'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RootNavigation />
      </header>
      <div className='App-body'>
        <p className='LandingText'>
          Welcome to Chris' website! <br /> <br />
          Use the navigation bar above to select a section that you would like to explore. <br /> <br />
          This site is not affliated to any company, institue, or organisation. <br /> <br />
          It is simply the virtual playground of a bored and nerdy human being &#128406;.
        </p>
      </div>
    </div>
  );
}

export default withAuthenticator(App);
