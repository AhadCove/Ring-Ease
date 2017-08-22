import React,{Component} from 'react';
import {HomeContain, Title, SubTitle, OptionRow, OptionContain, OptionTitle, OptionEnter} from '../Styles/S_Home';
import { withRouter, Link } from 'react-router-dom'

class Home extends Component{
    // constructor(){
    //     super();
    // }

    render(){
        console.log("Env", process.env.REACT_APP_SECRET_CODE);
        return(
            <HomeContain>
                <Title>Welcome To Ring Cove</Title>
                <SubTitle>Choose an option</SubTitle>
                <OptionRow>
                    <Link to="quiz">
                        <OptionContain>
                                <OptionTitle>I am the SO</OptionTitle>
                                <OptionEnter>Take Quiz</OptionEnter>
                        </OptionContain>
                    </Link>
                    <Link to="ask">
                        <OptionContain>
                            <OptionTitle>Ask SO to take quiz</OptionTitle>
                            <OptionEnter>Click Here</OptionEnter>
                        </OptionContain>
                    </Link>
                    <Link to="review">
                        <OptionContain>
                            <OptionTitle>Review quiz</OptionTitle>
                            <OptionEnter>Review</OptionEnter>
                        </OptionContain>
                    </Link>
                </OptionRow>
            </HomeContain>
        )
    }
}
export default Home