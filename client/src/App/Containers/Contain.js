import React from 'react';
import { withRouter, Link } from 'react-router-dom'
import {FullContain, BackButton, HomeButton, Title, SubTitle} from '../Styles/S_Defaults';

const Contain = (props) => (
    <FullContain>
        {/* <BackButton><Link to ="/">Back</Link></BackButton> */}
        <HomeButton><Link to ="/">Home</Link></HomeButton>
         {props.children} 
    </FullContain>
)
export default Contain