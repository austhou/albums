import firebase from 'firebase';

export const generateJson = () => {
    //console.log("get")
    return {
        type: 'generate_json',
        payload: null
    }
}

export const updateAlbumText = (id, text) => {
    return {
        type: 'update_album_text',
        payload: {id, text}
    }
}

export const updateAlbumInfo = (id, contents) => {
    return {
        type: 'update_album_info',
        payload: {id, contents}
    }
}

export const updateTitle = (title) => {
    return {
        type: 'update_title',
        payload: title
    }
}

export const updateName = (name) => {
    return {
        type: 'update_name',
        payload: name
    }
}

export const generateShare = (title, name, albums) => {
    return {
        type: 'generate_share',
        payload: { title, name, albums }
    }
}

export const cityCheck = (city) => {
    return (dispatch) => {
        firebase.database().ref(`/${city}/`)
            .on('value', snapshot => {

                const cityObj = {
                    "name": "Los Angeles"
                };

                if (snapshot.val() == null) {
                    firebase.database().ref('/').child(city).update({
                        'cafes': '',
                        'name': city,
                        'lat': 0,
                        'lng': 0
                    });
                }
                else {
                    dispatch({ type: 'get_cafe_data', payload: snapshot.val() });
                }
            });
    }
}