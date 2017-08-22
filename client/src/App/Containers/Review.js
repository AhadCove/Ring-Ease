import React,{Component} from 'react';
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux';
import {ReviewContain} from '../Styles/S_Review';
import {FullContain, BackButton, HomeButton, Title, SubTitle} from '../Styles/S_Defaults';
import axios from 'axios';

class Review extends Component{
    constructor(){
        super();
        this.state={code:'', error:false, errorMsg: ''}
    }

    checkCode = () => {
        let code = this.state.code;
        console.log("Checking Code", code);
        axios.get(`${process.env.REACT_APP_SERVER_LOC}/code/find?code=${code}`)
        .then(res=>{
            console.log("Found the code", res)
            this.props.history.push(`/review/${code}`);
        }).catch(err=>{
            console.log("Did not find code", err);
            this.setState({error:true, errorMsg:'Could not find code, make sure you entered it correctly. It is case sensitive'});
        })
    } 


    _handleInputChange = (e) =>{
        const value = e.target.value;
        const name = e.target.name;
        this.setState({
        [name]: value
        });
    }

    _handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            switch(e.target.name){
                case "code":
                this.checkCode();
                break;
                default:
                break;
            }
        }
    }

    render(){
        return(
        <FullContain>
            <HomeButton><Link to ="/">Home</Link></HomeButton>
            <ReviewContain>
                <h4>Review Rings that will match</h4>
                {this.state.error && <div style={{color:'red'}}>{this.state.errorMsg}</div>}
                <h5>Insert code received below</h5>
                <input name="code" type="text" maxLength="25" value={this.state.code} onChange={this._handleInputChange} onKeyPress={this._handleKeyPress} placeholder={"Received Code"} />
                <button onClick={this.checkCode}>Review</button>
            </ReviewContain>
        </FullContain>
        )
    }
    
}

const mapState = (state = {}) => {
    return {...state};
};

const mapDispatch = (dispatch) => {
    return {
    }
};

export default withRouter(connect(mapState, mapDispatch)(Review))