import React,{Component} from 'react';
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux';
import {ReviewContain} from '../Styles/S_Review';
import {Title, SubTitle} from '../Styles/S_Defaults';
import axios from "axios";

class ReviewRetrieve extends Component{
    constructor(){
        super();
        this.state={
            code:null, createdAt:null, email:null, 
            isDeleted:null, name:null, ring_choices:null, 
            ring_color:null, ring_metal:null, ring_size:null, 
            ring_stone:null, ring_stone_color:null, ring_stone_shape:null, 
            ring_stone_style:null, ring_type:null, so_email: null, _id:null,
            error:false, errorMsg:null
        }
    }

    componentDidMount(){
        this.retrieveRing();
    }

    retrieveRing = () => {
        console.log("Looking for", this.props.match.params.id);
        let code= this.props.match.params.id;
        axios.get(`${process.env.REACT_APP_SERVER_LOC}/code?code=${code}`)
        .then(res => {
            console.log("Found Ring", res.data.data);
            const {code, createdAt, email, isDeleted, name, ring_choices, ring_color, ring_metal, ring_size, ring_stone, ring_stone_color, ring_stone_shape, ring_stone_style, ring_type, so_email, _id} = res.data.data;
            this.setState({code, createdAt, email, isDeleted, name, ring_choices, ring_color, ring_metal, ring_size, ring_stone, ring_stone_color, ring_stone_shape, ring_stone_style, ring_type, so_email, _id});
        }).catch(err => {
            console.log("Could not find ring", err);
            // this.props.history.push('/review');
        })
    }

    render(){
        return(
            <ReviewContain>
                <Link style={{position:'absolute', top:0, right:10}} to="/review">Back</Link>
                Review Retrieved ring: {this.props.match.params.id}
                {this.state.name &&
                    <h1>
                        {this.state.name}'s Ring Ease Results:
                    </h1>
                }

                {this.state.ring_type &&
                    <div>
                        <h4>Ring Type</h4>
                        {this.state.ring_type}
                    </div>
                }
                {this.state.ring_color &&
                    <div>
                        <h4>Ring Color</h4>
                        {this.state.ring_color}
                    </div>
                }
                {this.state.ring_metal &&
                    <div>
                        <h4>Ring Metal</h4>
                        {this.state.ring_metal}
                    </div>
                }
                {this.state.ring_size &&
                    <div>
                        <h4>Ring Size</h4>
                        {this.state.ring_size}
                    </div>
                }
                {this.state.ring_stone &&
                    <div>
                        <h4>Ring Stone</h4>
                        {this.state.ring_stone}
                    </div>
                }
                {this.state.ring_stone_color &&
                    <div>
                        <h4>Stone Color</h4>
                        {this.state.ring_stone_color}
                    </div>
                }
                {this.state.ring_stone_shape &&
                    <div>
                        <h4>Stone Shape</h4>
                        {this.state.ring_stone_shape}
                    </div>
                }
                

                {this.state.ring_stone_style &&
                    <div>
                        <h4>Stone Style</h4>
                        {this.state.ring_stone_style}
                    </div>
                }
                <div>
                    
                </div>
            </ReviewContain>
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

export default withRouter(connect(mapState, mapDispatch)(ReviewRetrieve))