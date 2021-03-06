import React from 'react'

const renderField = ({ input, label, type, meta: { touched, error } }) =>
  <div>
    <div>
      <input {...input} type={type} />
      {touched && error && <span> {error} </span>}
    </div>
  </div>

export default renderField