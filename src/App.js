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

        <title>Jay Test</title>
        <meta name="description" content="Web site created using create-react-app" />

        {/* <!-- Google / Search Engine Tags --> */}
        <meta itemprop="name" content="Jay Test" />
        <meta itemprop="description" content="Google Sunday" />
        <meta itemprop="image" content="" />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://thirsty-ride-30e93e.netlify.app" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="FACEBOOK Jay" />
        <meta property="og:description" content="this is description" />
        <meta property="og:image" content="https://us-central1-grommet-designer.cloudfunctions.net/images/jay-giang-hpe-com/dev-thumb.png?size=192" />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="React App" />
        <meta name="twitter:description" content="Web site created using create-react-app" />
        <meta name="twitter:image" content="" />
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
