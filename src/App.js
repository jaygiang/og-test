import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import { Helmet } from 'react-helmet';
import MetaTags from 'react-meta-tags';

function App() {
  window.prerenderReady = false;

  useEffect(() => {
    setTimeout(function() {
      window.prerenderReady = true;
    }, 1000)
  })

  return (
    <div className="App">
          <MetaTags>
            <title>Page 1</title>
            <meta name="description" content="Some description." />
            <meta property="og:title" content="MyApp" />
            <meta property="og:image" content="https://us-central1-grommet-designer.cloudfunctions.net/images/jay-giang-hpe-com/dev-thumb.png?size=192" />
          </MetaTags>
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
