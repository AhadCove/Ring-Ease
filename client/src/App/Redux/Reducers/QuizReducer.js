const quizReducer = (state={
    name:null,
    email:null,
    so_email:null,
    quizKey:null,
    link:null,
    ring_color:null,
    ring_metal:null,
    ring_size:null,
    ring_type:null,
        ring_stone:null,
        ring_stone_shape:null,
        ring_stone_style:null,
        ring_stone_color:null,
    ring_choices:[],
}, action) => {
    switch(action.type){
        case 'SAVE_QUIZ':
        console.log("Save_Quiz", action.values);
        action.values
        state={
            ...state,   
            name: action.values.name,
            ring_color: (action.values.ring_color && action.values.ring_color != '0' ? action.values.ring_color:null),
            ring_metal: (action.values.ring_metal && action.values.ring_metal != '0' ? action.values.ring_metal:null),
            ring_size: action.values.ring_size,
            ring_type: action.values.ring_type,
                ring_stone: (action.values.ring_stone && action.values.ring_stone != '0' ? action.values.ring_stone:null),
                ring_stone_shape: (action.values.ring_stone_shape && action.values.ring_stone_shape != '0' ? action.values.ring_stone_shape:null),
                ring_stone_style: (action.values.ring_stone_style && action.values.ring_stone_style != '0' ? action.values.ring_stone_style:null),
                ring_stone_color: (action.values.ring_stone_color && action.values.ring_stone_color != '0' ? action.values.ring_stone_color:null),
            ring_choices:[],
        }
        break;
        default:
            break;
    }
    return state;
};

export default quizReducer;