import React from 'react';
import PostImage from './title.png'
import './post.css';

class Post extends React.Component {
  render() {
    return  <React.Fragment>
            <div className='post__container'>
            <img className='post__img' src={PostImage}/>
            <h1 className='post__title'>A maior viagem de sua vida começa agora!</h1>
            <h3 className='post__subtitle'>Milhas com descontos nos principais destinos de cada um dos continentes.</h3>
            <p className='post__text'>Agora você pode realizar a WorldTrip que tanto sonhou. Conheça os principais pontos turísticos do mundo com um preço que cabe no seu bolso. Faça seu cadastro e prepare sua bagagem.</p>
            </div>
            </React.Fragment>
    
    }
}

export default Post