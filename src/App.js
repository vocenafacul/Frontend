import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

import React from 'react';
import Routes from './router'
import Footer from './components/footers';

class App extends React.Component {

  render() {
    return <div className='App'>
      <div>
        <Routes />
      </div>
      <div style={{ backgroundColor: '#4d4b4c' }}>
        <Footer />
      </div>
    </div>;
  }
}

export default App;