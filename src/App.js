import logo from './logo.svg';
import './App.css';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta property="og:title" content="title" />
        <meta property="og:description" content="this is description" />
        <meta property="og:title" content="https://us-central1-grommet-designer.cloudfunctions.net/images/jay-giang-hpe-com/dev-thumb.png?size=192" />
      </Helmet>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
    </div>
  );
}

export default App;
