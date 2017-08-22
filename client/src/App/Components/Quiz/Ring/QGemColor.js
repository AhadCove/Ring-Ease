
import React from 'react'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import { connect } from 'react-redux'
import {QContain, QNum, Question} from '../../../Styles/S_Quiz';
import {Input, Label, SubmitButton } from '../../../Styles/S_Defaults';
import { BackButton } from '../../../Styles/S_Defaults';
import validate from '../Validate';

const renderError = props => props.meta.touched && props.meta.error ? <div>Error: {props.meta.error}</div> : false

let QGemColor = (props) => {

  const { ringStoneColor, handleSubmit, previousPage, pristine, reset, submitting } = props

  return (
    <form onSubmit={handleSubmit}>
     <BackButton onClick={previousPage}>Back</BackButton>       
     <Input>
            <Question>Gem color</Question>
              <Field name="ring_stone_color" component="select">
                <option />
                <option value="0">No Preference</option>
                <option value="white">White</option>
                <option value="yellow">Yellow</option>
                <option value="black">Black</option>
                <option value="blue">Blue</option>
                <option value="champagne">Champagne</option>
                <option value="green">Green</option>
                <option value="red">Red</option>
                <option value="pink">Pink</option>
            </Field>
        </Input>
        <SubmitButton type="submit" disabled={pristine || submitting || !ringStoneColor}>Submit</SubmitButton>
    </form>
  ) 
}

QGemColor = reduxForm({
  form: 'quiz',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(QGemColor)

const selector = formValueSelector('quiz') 

export default connect(
  state => {
    const ringStoneColor = selector(state, 'ring_stone_color')
    return {
      ringStoneColor
    }
  }
)(QGemColor)