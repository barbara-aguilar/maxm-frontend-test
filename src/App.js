import React, { Component } from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar/>

        <Footer/>
      </React.Fragment>
      
    );
  }
}

export default App;
