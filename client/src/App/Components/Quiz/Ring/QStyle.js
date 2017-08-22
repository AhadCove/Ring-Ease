
import React from 'react'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import { connect } from 'react-redux'
import {QContain, QNum, Question} from '../../../Styles/S_Quiz';
import {Input, Label, SubmitButton } from '../../../Styles/S_Defaults';
import { BackButton } from '../../../Styles/S_Defaults';
import validate from '../Validate';

const renderError = props => props.meta.touched && props.meta.error ? <div>Error: {props.meta.error}</div> : false

let QStyle = (props) => {
  
  const { ringStoneStyle, handleSubmit, previousPage, pristine, reset, submitting } = props

  return (
    <form onSubmit={handleSubmit}>
     <BackButton onClick={previousPage}>Back</BackButton>       
     <Input>
            <Question>Ring Style</Question>
              <Field name="ring_stone_style" component="select">
                <option />
                <option value="0">No Preference</option>
                <option value="halo">Halo/Framed</option>
                <option value="three_stone"> Three Stone </option>
                <option value="multi">Multi-Stone</option>
                <option value="promise">Promise</option>
                <option value="setting">Setting</option>
                <option value="solitaire">Solitaire</option>
                <option value="solitare_side">Solitaire with Side Accent</option>
                <option value="garnet">Garnet</option>
                <option value="amethyst">Amethyst</option>
                <option value="aquamarine">Aquamarine</option>
                <option value="emerald">Emerald</option>
                <option value="pearl">Pearl</option>
            </Field>
        </Input>
        <SubmitButton type="submit" disabled={pristine || submitting || !ringStoneStyle}>Submit</SubmitButton>
    </form>
  ) 
}

QStyle = reduxForm({
  form: 'quiz',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(QStyle)

const selector = formValueSelector('quiz') 

export default connect(
  state => {
    const ringStoneStyle = selector(state, 'ring_stone_style')
    return {
      ringStoneStyle
    }
  }
)(QStyle)
 