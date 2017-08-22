import {combineReducers} from "redux";
import { reducer as form } from 'redux-form'

import user from './UserReducer';
import quiz from './QuizReducer';

const appReducer = combineReducers({
    user, quiz, form
});

const rootReducer = (state, action) => {
    if(action.type === 'ERASE_DATA') {
        console.log("Erasing all data");
        state = undefined;
    }
    return appReducer(state,action);
}

export default rootReducer;