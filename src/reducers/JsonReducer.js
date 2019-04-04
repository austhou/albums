const INITIAL_STATE = {
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'generate_share':
            console.log(action.payload);
            return action.payload;
        default:
            return state;
    }
};
