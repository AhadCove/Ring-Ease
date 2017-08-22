import React,{Component} from 'react';
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux';
import {saveQuiz} from '../Redux/Actions/QuizActions';
import {QuizContain} from '../Styles/S_Quiz';
import {FullContain, BackButton, HomeButton, Title, SubTitle} from '../Styles/S_Defaults';

import QStart from '../Components/Quiz/QStart';
import QName from '../Components/Quiz/QName';
import QRingMetal from '../Components/Quiz/QRingMetal';
import QRingColor from '../Components/Quiz/QRingColor';
import QSize from '../Components/Quiz/QSize';
import QType from '../Components/Quiz/QType';
    import QShape from '../Components/Quiz/Ring/QShape';
    import QStone from '../Components/Quiz/Ring/QStone';
    import QStyle from '../Components/Quiz/Ring/QStyle';
    import QGemColor from '../Components/Quiz/Ring/QGemColor';
import QSend from '../Components/Quiz/QSend';

class Quiz extends Component{
    constructor(){
        super();
        // this.state={page:0};
        this.state={page:0};
    }

    handleSubmit = (values) => {
        console.log("Submitted", values);
        this.props.saveQuiz(values)
    }
    
    
    nextPage = () => {
        this.setState({ page: this.state.page + 1 })
    }

    previousPage = () => {
        this.setState({ page: this.state.page - 1 })
    }

    checkType = (values) => {
        console.log("Checking Type", values)
        if(values.ring_type === "band"){
            this.finish(values);
        }
        else
            this.nextPage();
    }

    finish = (values) => {
        this.props.saveQuiz(values);
        this.handleSubmit(values);
        this.setState({page: 20});
        console.log("End Quiz");
    }

   
    render(){
        return(
        <FullContain>
            <HomeButton><Link to ="/">Home</Link></HomeButton>
            <QuizContain>
                Quiz
                {this.state.page === 0 && <QStart onSubmit={this.nextPage}/>}
                {this.state.page === 1 && <QName previousPage={this.previousPage} onSubmit={this.nextPage}/>}
                {this.state.page === 2 && <QRingMetal previousPage={this.previousPage} onSubmit={this.nextPage}/>}
                {this.state.page === 3 && <QRingColor previousPage={this.previousPage} onSubmit={this.nextPage}/>}
                {this.state.page === 4 && <QSize previousPage={this.previousPage} onSubmit={this.nextPage}/>}
                {this.state.page === 5 && <QType previousPage={this.previousPage} checkType={this.checkType} onSubmit={this.checkType}/>}
                {/* If type = set or ring  */}
                    {this.state.page === 6 && <QShape previousPage={this.previousPage} onSubmit={this.nextPage}/>}
                    {this.state.page === 7 && <QStone previousPage={this.previousPage} onSubmit={this.nextPage}/>}
                    {this.state.page === 8 && <QStyle previousPage={this.previousPage} onSubmit={this.nextPage}/>}
                    {this.state.page === 9 && <QGemColor previousPage={this.previousPage} onSubmit={this.finish}/>}
                {this.state.page === 20 && <QSend previousPage={this.previousPage}/>}
            </QuizContain>
        </FullContain>
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

export default withRouter(connect(mapState, mapDispatch)(Quiz))