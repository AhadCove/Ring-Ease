import React from 'react'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import { connect } from 'react-redux'
import {QContain, QNum, Question} from '../../Styles/S_Quiz';
import {Input, Label, SubmitButton } from '../../Styles/S_Defaults';
import { BackButton } from '../../Styles/S_Defaults';
import validate from './Validate';

const renderError = props => props.meta.touched && props.meta.error ? <span>Error: {props.meta.error}</span> : false

let QRingMetal = (props) => {
  
  const { ringMetal, handleSubmit, previousPage, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
     <BackButton onClick={previousPage}>Back</BackButton>       
     <Input>
            <Question> Ring metal </Question>
             <Field name="ring_metal" component="select">
                 <option /> 
                <option value="0">No Preference</option>
                <option value="gold">Gold</option>
                <option value="platinum">Platinum</option>
                <option value="Silver">Silver</option>
            </Field>
        </Input>
        
        <SubmitButton type="submit" disabled={pristine || submitting || !ringMetal}>Submit</SubmitButton>
    </form>
  ) 
}

QRingMetal = reduxForm({
  form: 'quiz',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(QRingMetal)

const selector = formValueSelector('quiz')

export default connect(
  state => {
    const ringMetal = selector(state, 'ring_metal')
    return {
      ringMetal
    }
  }
)(QRingMetal)