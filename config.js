import {firebase} from '@firebase/app';
require('@firebase/firestore')


var firebaseConfig = {
    apiKey: "AIzaSyABuetkmu2qafJ5l5y6DKaCsCZZOtvA5AQ",
    authDomain: "wiliapp-a721d.firebaseapp.com",
    projectId: "wiliapp-a721d",
    storageBucket: "wiliapp-a721d.appspot.com",
    messagingSenderId: "232311892576",
    appId: "1:232311892576:web:2722ab286f86e66db67105",
    measurementId: "G-CHNLD8C36Y"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();