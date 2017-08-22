import React from 'react'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import { connect } from 'react-redux'
import {QContain, QNum, Question} from '../../Styles/S_Quiz';
import {Input, Label, SubmitButton } from '../../Styles/S_Defaults';
import { BackButton } from '../../Styles/S_Defaults';
import validate from './Validate';

const renderError = props => props.meta.touched && props.meta.error ? <div>Error: {props.meta.error}</div> : false

let QType = (props) => {

  const { ringType, handleSubmit, previousPage, checkType, pristine, reset, submitting } = props

  return (
    <form onSubmit={handleSubmit}>
     <BackButton onClick={previousPage}>Back</BackButton>       
     <Input>
            <Question>What type of ring are you looking for</Question>
             <Field name="ring_type" component={renderError}/> 
             <Label>
            <Field
              name="ring_type"
              component="input"
              type="radio"
              value="set"
            />{' '}
            Wedding Set
          </Label>
          <Label>
            <Field
              name="ring_type"
              component="input"
              type="radio"
              value="band"
            />{' '}
            Band
          </Label>
          <Label>
            <Field
              name="ring_type"
              component="input"
              type="radio"
              value="ring"
            />{' '}
            Ring
          </Label>
      </Input>
      <SubmitButton type="submit" disabled={pristine || submitting || !ringType}>Submit</SubmitButton>
    </form>
  ) 
}

QType = reduxForm({
  form: 'quiz',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(QType)

const selector = formValueSelector('quiz') 

export default connect(
  state => {
    const ringType = selector(state, 'ring_type')
    return {
      ringType
    }
  }
)(QType)