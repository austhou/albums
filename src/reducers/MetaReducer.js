const INITIAL_STATE = {
    title: "",
    name: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'update_title':
            var newState = {...state};
            newState.title = action.payload;
            return newState;   
        case 'update_name':
            var newState = {...state};
            newState.name = action.payload;
            return newState;   
        default:
            return state;
    }
};
