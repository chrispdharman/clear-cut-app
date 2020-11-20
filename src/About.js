import Navigation from './shared/Navigation';
import './About.css';

function About() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
      </header>
      <body>
        <p>Welcome to ClearCut! An app designed to cut out the objects from an media you provide it.</p>
      </body>
    </div>
  );
}

export default About;
