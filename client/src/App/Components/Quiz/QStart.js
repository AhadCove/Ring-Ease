import React from 'react';
import { Link } from 'react-router-dom'

const QStart = (props) => (
    <div>
        <button onClick={props.onSubmit}>Start Quiz</button>
    </div>
)

export default QStart