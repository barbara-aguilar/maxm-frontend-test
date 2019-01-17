import React, { Component } from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Post from './components/post';
import './App.css'
import Main from './components/main';
import Form from './components/form';
import Button from './components/form/button'


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar/>
          <Main>
            <Post/>
            <Form title='Deixe seu contato e receba os detalhes desta promoção:'>
                    <Form.Label htmlFor='name'></Form.Label>
                    <Form.Input ref={this.name} id='name' type='text' placeholder='Nome' required/>
                    <Form.Label htmlFor='email'></Form.Label>
                    <Form.Input ref={this.email} id='email' type='email' placeholder='Email' required />
                    <Form.Label htmlFor='phone'></Form.Label>
                    <Form.Input ref={this.phone} id='phone' type='tel' placeholder='WhatsApp'minLength={10} />
                    <Form.Button >Enviar</Form.Button>
              </Form>
          </Main>
        <Footer/>
      </React.Fragment>
      
    );
  }
}

export default App;
