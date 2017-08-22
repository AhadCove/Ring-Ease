import React from 'react'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import { connect } from 'react-redux'
import {QContain, QNum, Question} from '../../../Styles/S_Quiz';
import {Input, Label, SubmitButton } from '../../../Styles/S_Defaults';
import { BackButton } from '../../../Styles/S_Defaults';
import validate from '../Validate';

const renderError = props => props.meta.touched && props.meta.error ? <div>Error: {props.meta.error}</div> : false

let QStone = (props) => {
  
  const { ringStone, handleSubmit, previousPage, pristine, reset, submitting } = props

  return (
    <form onSubmit={handleSubmit}>
     <BackButton onClick={previousPage}>Back</BackButton>       
     <Input>
            <Question>Gem Stone</Question>
              <Field name="ring_stone" component="select">
                <option />
                <option value="0">No Preference</option>
                <option value="diamond">Diamond</option>
                <option value="sapphire">Sapphire</option>
                <option value="pink_sapphire">Pink Sapphire</option>
                <option value="white_sapphire">White Sapphire</option>
                <option value="ruby">Ruby</option>
                <option value="rose_gold">Rose Gold</option>
                <option value="garnet">Garnet</option>
                <option value="amethyst">Amethyst</option>
                <option value="aquamarine">Aquamarine</option>
                <option value="emerald">Emerald</option>
                <option value="pearl">Pearl</option>
            </Field>
        </Input>
        <SubmitButton type="submit" disabled={pristine || submitting || !ringStone}>Submit</SubmitButton>
    </form>
  ) 
}

QStone = reduxForm({
  form: 'quiz',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(QStone)

const selector = formValueSelector('quiz') 

export default connect(
  state => {
    const ringStone = selector(state, 'ring_stone')
    return {
      ringStone
    }
  }
)(QStone)