import React, {useEffect} from 'react';
import logo from '../images/logo.svg';
// import './App.css';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta name="fragment" content="!"/>
        <meta property="og:title" content="title" data-react-helmet="true"/>
        <meta property="og:description" content="Test Monday" data-react-helmet="true"/>
        <meta property="og:title" content="https://picsum.photos/200" data-react-helmet="true"/>

        <title>Jay Test</title>
        <meta name="description" content="Web site created using create-react-app" data-react-helmet="true"/>

        {/* <!-- Google / Search Engine Tags --> */}
        <meta itemprop="name" content="Jay Test" data-react-helmet="true"/>
        <meta itemprop="description" content="Google Sunday" data-react-helmet="true"/>
        <meta itemprop="image" content="" data-react-helmet="true"/>

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://thirsty-ride-30e93e.netlify.app" data-react-helmet="true"/>
        <meta property="og:type" content="website" data-react-helmet="true"/>
        <meta property="og:title" content="Test Monday" data-react-helmet="true"/>
        <meta property="og:description" content="this is description this is description this is description this is description" data-react-helmet="true"/>
        <meta property="og:image" content="https://picsum.photos/200" data-react-helmet="true"/>

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" data-react-helmet="true"/>
        <meta name="twitter:title" content="Test Monday" data-react-helmet="true"/>
        <meta name="twitter:description" content="Web site created using create-react-app" data-react-helmet="true"/>
        <meta name="twitter:image" content="https://picsum.photos/200" data-react-helmet="true"/>
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
