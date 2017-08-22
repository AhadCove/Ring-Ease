import React,{Component} from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom'
import {saveQuiz} from '../../Redux/Actions/QuizActions';
import {QSendContain, Title, Label, Input, Submit, Error} from '../../Styles/S_QSend';
import axios from 'axios';


class QSend extends Component{
    constructor(){
        super();
        this.state={name:'', so_email:'', code:'', sent:false, error:false, errorMsg:""}
    }

    componentDidMount(){
    }

    sendEmail = () => {
        // Check if email is valid
        if(true){
            console.log(`Sending email to ${this.state.so_email} with Results ${this.props}`);
            this.setState({error:false});
            let code = this.generateCode();
            this.checkCode(code);
        } else{
            this.setState({error:true, errorMsg:"Need to enter a correct email"})
        }
    }

    generateCode = () => {
        let code = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for(let i = 0; i < 15; i++) {
            code += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        console.log("Code is", code);
        return code;
    }

checkCode = (code) => {
        axios.get(`${process.env.REACT_APP_SERVER_LOC}/code/check?code=${code}`)
        .then(res=>{
            if(res.data.success){
                console.log("Did not find code, Great");
                this.setState({error:false, errorMsg:''});
                const {name, ring_choices, ring_color, ring_metal, ring_size, ring_stone, ring_stone_color, ring_stone_shape, ring_stone_style, ring_type} = this.props.quiz;
                axios.post(`${process.env.REACT_APP_SERVER_LOC}/code`,{
                    code,
                    so_email: this.state.so_email,
                    name, ring_choices, ring_color, ring_metal, ring_size, ring_stone, ring_stone_color, ring_stone_shape, ring_stone_style, ring_type
                })
                .then(res=>{
                    console.log("Posted Quiz", res);
                    this.setState({sent:true, code, error:false, errorMsg:""});
                }).catch(err=>{
                    console.log("Error Posting Quiz", err);
                    this.setState({error:true, errorMsg:"There was an error sending the email, please try again"})
                })
            } else{
                console.log("Found the code", res)
                this.setState({error:true, errorMsg:'This code already exist, try again'});
                this.sendEmail();
            }
        }).catch(err=>{
                this.setState({error:true, errorMsg:'Error trying to push code to db'});
        });

            // this.setState({error:true, errorMsg:"There was an error sending the email, please try again"})
        // firebase.database().ref(`keys/${code}`).once('value').then((snapshot) => {
            // console.log(snapshot);
            // if(snapshot.exists()){
            //     return false;
            // }
            // else{
            //     firebase.database().ref(`keys/${code}`).set({
            //         name: "Ralph",
            //         email: "ringease@gmail.com",
            //         so_email: "ahadcove@gmail.com",
            //         ring_color: "silver",
            //         ring_metal: "silver",
            //         ring_size: "5.6",
            //         ring_type: "Wedding Ring",
            //         ring_stone: "diamond",
            //         ring_stone_shape: "square",
            //         ring_stone_style: "gayler",
            //         ring_stone_color: "gayler",
            //         ring_choices: []
            //     });

            // }
        // });
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
                this.sendEmail();
                break;
                default:
                break;
            }
        }
    }

    render(){
        return(
            <QSendContain>
                {!this.state.sent ?
                <div>
                    <Title>Who are you sending this to?</Title>
                    {this.state.error && <Error>{this.state.errorMsg}</Error>}
                    {/* <Label>Email</Label> */}
                    <Input name="so_email" type="email" maxLength="45" value={this.state.so_email} onChange={this._handleInputChange} onKeyPress={this._handleKeyPress} placeholder={"email"} />
                    <Submit type="submit" onClick={this.sendEmail}>Send</Submit>
                </div>
                :
                <div>
                    <Title>Here is your id Code for your Ring quiz</Title>
                    <Title><Link to={`/review/${this.state.code}`}>{this.state.code}</Link></Title>
                </div>
                }
            </QSendContain>
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

export default withRouter(connect(mapState, mapDispatch)(QSend))
