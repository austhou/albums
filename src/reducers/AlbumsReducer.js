const INITIAL_STATE = [
    {
        link: null,
        inputText: '',
        info: {}
    },
    {
        link: null,
        inputText: '',
        info: {}
    },
    {
        link: null,
        inputText: '',
        info: {}
    },
    {
        link: null,
        inputText: '',
        info: {}
    },
    {
        link: null,
        inputText: '',
        info: {}
    },
    {
        link: null,
        inputText: '',
        info: {}
    },
    {
        link: null,
        inputText: '',
        info: {}
    },
    {
        link: null,
        inputText: '',
        info: {}
    },
    {
        link: null,
        inputText: '',
        info: {}
    },
];


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'update_album_text':
            var newState = [...state];
            newState[action.payload.id].inputText = action.payload.text;
            return newState;        
        case 'update_album_info':
            var newState = [...state];
            newState[action.payload.id].info = {...action.payload.contents};
            return newState;
        default:
            return state;
    }
};
