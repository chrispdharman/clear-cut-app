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
        <h3>Welcome!</h3>
        <p className='LandingText'>
          You have reached Chris' website! <br /> <br />
          Please use the navigation bar above to explore various sections of this site. <br /> <br />
          At the time of writing, this website is simply an playground for me to flex my software developer skillset.
          This website is built in React.js via AWS Amplify: a serverless approach to building apps and websites (cool, right!?).
          I am primarily and Backend developer, so if the Frontend works smoothly and find the design aesthetically pleasing, then please let me know so I can get myself and enjoy a vegan cookie. 🍪<br />
        </p>
        <h3>Disclaimer</h3>
        <p className='LandingText'>
          This site is not affliated to any company, institue, or organisation. <br /> <br />
          It is simply the virtual playground of a bored and nerdy human being. &#128406;
        </p>
      </div>
    </div>
  );
}

export default withAuthenticator(App);
