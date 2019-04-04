const INITIAL_STATE = null

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'set_link':
            console.log(action.payload);
            return 'albumlist.co/list/' + action.payload;
        default:
            return state;
    }
};
