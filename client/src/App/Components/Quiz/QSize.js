import React from 'react'
import { Field, reduxForm, formValueSelector} from 'redux-form'
import { connect } from 'react-redux'
import {QContain, QNum, Question} from '../../Styles/S_Quiz';
import {Input, Label, SubmitButton } from '../../Styles/S_Defaults';
import { BackButton } from '../../Styles/S_Defaults';
import validate from './Validate';

const renderError = props => props.touched && props.error ? <span>Error: {props.error}</span> : false

let QSize = (props) => {

  const { ringSize, handleSubmit, previousPage, pristine, reset, submitting } = props
  const checkSize = (value, previousValue, allValues) => { 
      console.log("Value", value, "Prev", previousValue, "allValues", allValues); 
      if(value <= 20 && value > 0) return value
        return previousValue 
    }

  return (
    <form onSubmit={handleSubmit}>
     <BackButton onClick={previousPage}>Back</BackButton>       
     <Input>
        <Question>What is your ring size</Question>
        <Field name="ring_size" component="input" type="number" normalize={checkSize} step={.5} />
    </Input>
    <SubmitButton type="submit" disabled={pristine || submitting || !ringSize}>Submit</SubmitButton>
    </form>
  ) 
}

QSize = reduxForm({
  form: 'quiz',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(QSize)

const selector = formValueSelector('quiz') 

export default connect(
  state => {
    const ringSize = selector(state, 'ring_size')
    return {
      ringSize
    }
  }
)(QSize)