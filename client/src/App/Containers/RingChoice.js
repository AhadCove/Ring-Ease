import React,{Component} from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom'
import {saveQuiz} from '../Redux/Actions/QuizActions';
import {RingChoiceContain} from '../Styles/S_RingChoice';

class RingChoice extends Component{
    // constructor(){
    //     super();
    // }

    render(){
        return(
            <RingChoiceContain>
                <h1>Here are our Recommendations</h1>
                <h3>Choose the rings you like best</h3>
            </RingChoiceContain>
        )
    }
}

const mapState = (state = {}) => {
    return {...state};
};

const mapDispatch = (dispatch) => {
    return {
        saveQuiz:(values) => {
            dispatch(saveQuiz(values))
        }
    }
};

export default withRouter(connect(mapState, mapDispatch)(RingChoice))





//Plain Women's Diamonds: http://www.zales.com/rings/view-all-rings/family.jsp?categoryId=2109136&fg=Stone+Type&ff=PAD&fv=Stone+Type%2FDiamond&fd=Diamond&fg=Gender&ff=PAD&fv=Gender%2FLadies%27&fd=Ladies%27&cp=13337264