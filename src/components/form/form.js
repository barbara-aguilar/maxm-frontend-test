import React from 'react'
import Button from './button'
import Input from './input'
import Label from './label'


import './form.css'

function Form(props) {
    return (
        <div className='form__container'>
        <form className='form' onSubmit={props.onSubmit}>
            <h2 className='form__title'>{props.title}</h2>
            <p className='form__text'>{props.text}</p>
            {props.children}
        </form>
        </div>
    )
}

Form.Button = Button
Form.Input = Input
Form.Label = Label

export default Form
