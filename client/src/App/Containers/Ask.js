import React,{Component} from 'react';
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux';
import {AskContain} from '../Styles/S_Ask';
import {Title, SubTitle} from '../Styles/S_Defaults';
import axios from 'axios';

class Ask extends Component{
    constructor(){
        super();
        this.state={ so_email:'', sending:false, sent:false, error:false, errorMsg:''}
    }

    sendEmail = () => {
        if(this.state.so_email){
            this.setState({sending:true});
            console.log("Trying to send an email to", this.state.so_email);
            axios.get(`${process.env.REACT_APP_SERVER_LOC}/ask?email=${this.state.so_email}`)
            .then(res=>{
                console.log("Sent Email", res);
                this.setState({sending:false, sent:true, error:false})
            }).catch(err=>{
                console.log("Error Sending email");
                this.setState({sending:false, sent:false, error:true, errorMsg:"There was an error sending the reques to this email, please check the email and try again"})
            })
        }
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
                case "so_email":
                if(!this.state.sending){
                    this.sendEmail();
                }
                break;
                default:
                break;
            }
        }
    }

    render(){
        return(
            <AskContain>
                <Link to='/' style={{position:'absolute', top:0, right:0}} >Home</Link>
                {!this.state.sent ?
                <div>
                    <h3>Send a link to SO</h3>
                    {this.state.error && <div style={{color:'red'}}>{this.state.errorMsg}</div>}
                    <input name="so_email" type="email" maxLength="45" value={this.state.so_email} onChange={this._handleInputChange} onKeyPress={this._handleKeyPress} placeholder={"email"} />
                    <button onClick={this.sendEmail} disabled={this.state.sending}>Request</button>
                </div>
                :
                <div>
                    <h3>Email sent successfully to {this.state.so_email}</h3>
                </div>
                }
            </AskContain>
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

export default withRouter(connect(mapState, mapDispatch)(Ask))