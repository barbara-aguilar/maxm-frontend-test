import React from 'react'
// import Background from './bg-image-02.svg'
import './main.css'

function Main(props){
    return (
        <div className='main'>
            {props.children}
        </div>
    )
}

/* <img className='bg-img' src={Background}/> */
export default Main