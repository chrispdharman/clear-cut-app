import Navigation from './Navigation';
import RootNavigation from '../../shared/RootNavigation';
import './About.css';

function About() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
      </header>
      <div className='App-body'>
        <p>Manage your processed files here.</p>
      </div>
    </div>
  );
}

export default About;
