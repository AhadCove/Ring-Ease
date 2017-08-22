import React from 'react'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import { connect } from 'react-redux'
import {QContain, QNum, Question} from '../../../Styles/S_Quiz';
import {Input, Label, SubmitButton } from '../../../Styles/S_Defaults';
import { BackButton } from '../../../Styles/S_Defaults';
import validate from '../Validate';

const renderError = props => props.meta.touched && props.meta.error ? <div>Error: {props.meta.error}</div> : false

let QShape = (props) => {
  
  const { ringStoneShape, handleSubmit, previousPage, pristine, reset, submitting } = props

  return (
    <form onSubmit={handleSubmit}>
     <BackButton onClick={previousPage}>Back</BackButton>       
     <Input>
            <Question> Gem stone shape </Question>
             <Field name="ring_stone_shape" component="select">
                <option />
                <option value="0">No Preference</option>
                <option value="round">Round</option>
                <option value="princess">Princess</option>
                <option value="square">Square</option>
                <option value="oval">Oval</option>
                <option value="marquise">Marquise</option>
                <option value="cushion">Cushion</option>
                <option value="heart">Heart</option>
                <option value="radiant">Radiant</option>
                <option value="pear">Pear</option>
            </Field>
        </Input>
        <SubmitButton type="submit" disabled={pristine || submitting || !ringStoneShape}>Submit</SubmitButton>
    </form>
  ) 
}

QShape = reduxForm({
  form: 'quiz',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(QShape)

const selector = formValueSelector('quiz') 

export default connect(
  state => {
    const ringStoneShape = selector(state, 'ring_stone_shape')
    return {
      ringStoneShape
    }
  }
)(QShape)