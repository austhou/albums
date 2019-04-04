import firebase from 'firebase';
var config = {
    apiKey: "AIzaSyAgL63v2FYpSA22YGjKbgju3xuGpeZ05aY",
    authDomain: "albums-ba497.firebaseapp.com",
    databaseURL: "https://albums-ba497.firebaseio.com",
    projectId: "albums-ba497",
    storageBucket: "albums-ba497.appspot.com",
    messagingSenderId: "746661427419"
};
firebase.initializeApp(config);
const db = firebase.firestore();

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

export const saveAlbums = (title, name, albums) => {
    return (dispatch) => {
        db.collection("lists").add({
            data: { title, name, albums }
        }).then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
            dispatch({ type: 'set_link', payload: docRef.id });
        }).catch(function(error) {
            console.error("Error adding document: ", error);
        });
    }
}

export const getListData = (id) => {
    return (dispatch) => {
        var docRef = db.collection("lists").doc(id);

        docRef.get().then(function(doc) {
            if (doc.exists) {
                console.log("Document data:", doc.data());
                dispatch({ type: 'set_display_data', payload: {...doc.data()} });
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });
    }
}

