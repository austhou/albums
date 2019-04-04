const INITIAL_STATE = {
    data: {
        title: '',
        name: ''
    }
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'set_display_data':
            console.log(action.payload);
            return action.payload;
        default:
            return state;
    }
};
