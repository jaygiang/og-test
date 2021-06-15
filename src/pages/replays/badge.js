import React from 'react';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div className="App">
        <Helmet>
        <meta name="fragment" content="!"/>
        <meta property="og:title" content="Sunday" data-react-helmet="true"/>
        <meta property="og:description" content="Sunday" data-react-helmet="true"/>
        <meta property="og:image" content="https://us-central1-grommet-designer.cloudfunctions.net/images/jay-giang-hpe-com/testing-new-badge-size.png" data-react-helmet="true"/>

        <title>Jay Test</title>
        <meta name="description" content="Web site created using create-react-app" data-react-helmet="true"/>

        {/* <!-- Google / Search Engine Tags --> */}
        <meta itemprop="name" content="sunday" data-react-helmet="true"/>
        <meta itemprop="description" content="SUNDAY badge" data-react-helmet="true"/>
        <meta itemprop="image" content="https://us-central1-grommet-designer.cloudfunctions.net/images/jay-giang-hpe-com/testing-new-badge-size.png" data-react-helmet="true"/>

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:type" content="website" data-react-helmet="true"/>
        <meta property="og:title" content="SUNDAY badge" data-react-helmet="true"/>
        <meta property="og:description" content="this is description this is description this is description this is description" data-react-helmet="true"/>
        <meta property="og:image" content="https://us-central1-grommet-designer.cloudfunctions.net/images/jay-giang-hpe-com/testing-new-badge-size.png" data-react-helmet="true"/>

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" data-react-helmet="true"/>
        <meta name="twitter:title" content="SUNDAY badge" data-react-helmet="true"/>
        <meta name="twitter:description" content="Web site created using create-react-app" data-react-helmet="true"/>
        <meta name="twitter:image" content="https://us-central1-grommet-designer.cloudfunctions.net/images/jay-giang-hpe-com/testing-new-badge-size.png" data-react-helmet="true"/>
      </Helmet>
      <header className="App-header">
        Badge
      </header>
    </div>
  );
}

export default App;
