import React, { Component } from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Post from './components/post';
import './App.css'
import Main from './components/main';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar/>
      
          <Main>
            <Post/>
          </Main>
          
        <Footer/>
      </React.Fragment>
      
    );
  }
}

export default App;
