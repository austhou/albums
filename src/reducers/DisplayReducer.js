const INITIAL_STATE = {
    data: {
        title: '',
        name: ''
    }
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'set_display_data':
            return {...action.payload};
        default:
            return state;
    }
};
