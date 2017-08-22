import React from 'react'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import { connect } from 'react-redux'
import {QContain, QNum, Question} from '../../Styles/S_Quiz';
import {Input, Label, SubmitButton } from '../../Styles/S_Defaults';
import { BackButton } from '../../Styles/S_Defaults';
import validate from './Validate';

const renderError = props => props.meta.touched && props.meta.error ? <div>Error: {props.meta.error}</div> : false

let QRingColor = (props) => {
  const { ringColor, handleSubmit, previousPage, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
       <BackButton onClick={previousPage}>Back</BackButton>       
     <Input>
            <Question>Ring color</Question>
            
             <Field name="ring_color" component="select"> 
                <option /> 
                <option value="0">No Preference</option>
                <option value="silver">Silver</option>
                <option value="white">White</option>
                <option value="gold">Gold</option>
                <option value="yellow_gold">Yellow Gold</option>
                <option value="rose_gold">Rose Gold</option>
            </Field>
        </Input>
        <SubmitButton type="submit" disabled={pristine || submitting || !ringColor}>Submit</SubmitButton>
    </form>
  ) 
}


QRingColor = reduxForm({
  form: 'quiz',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(QRingColor)

const selector = formValueSelector('quiz') 

export default connect(
  state => {
    const ringColor = selector(state, 'ring_color')
    return {
      ringColor
    }
  }
)(QRingColor)
