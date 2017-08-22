import React from 'react'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import { connect } from 'react-redux'
import {QContain, QNum, Question} from '../../Styles/S_Quiz';
import {Input, Label, SubmitButton } from '../../Styles/S_Defaults';
import { BackButton } from '../../Styles/S_Defaults';
import validate from './Validate';

const renderError = props => props.meta.touched && props.meta.error ? <span>Error: {props.meta.error}</span> : false

let QName = (props) => {
  
  const { name, handleSubmit, previousPage, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
     <BackButton onClick={previousPage}>Back</BackButton>       
     <Input>
        <Question> What is your name? </Question>
            <Field name="name" component="input" type="text" placeholder="Name"/>
    </Input>
    <SubmitButton type="submit" disabled={pristine || submitting || !name }>Submit</SubmitButton>
    </form>
  ) 
}

QName = reduxForm({
  form: 'quiz',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(QName)

const selector = formValueSelector('quiz') 

export default connect(
  state => {
    const name = selector(state, 'name')
    return {
      name
    }
  }
)(QName)
