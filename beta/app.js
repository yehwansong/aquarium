$(document).ready(function(){
    onLoadFinish()
})
function onLoadFinish() {
    console.log('onLoadFinish');
const firebaseConfig = {
  apiKey: "AIzaSyB_gS0zuYPIBjhfWOlT1UX6NhH-wDff6rA",
  authDomain: "aquarium-4d066.firebaseapp.com",
  databaseURL: "https://aquarium-4d066.firebaseio.com",
  projectId: "aquarium-4d066",
  databaseURL: 'https://aquarium-4d066.firebaseio.com',
  storageBucket: "aquarium-4d066.appspot.com",
  messagingSenderId: "162473215443",
  appId: "1:162473215443:web:6d7b0547041c05e70a1b26",
  measurementId: "G-MYTFVC0QGB"
};
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

    window.setFirebaseValues = function (values) {
        firebase.database().ref('values').update(values);
    };

    firebase.database().ref('values').on('value', function (snapshot) {
        if (typeof window.firebaseValueChangeHandler !== 'function') {
            return;
        }
        window.firebaseValueChangeHandler(snapshot.val());
    }); // ready to go

    if (typeof window.onFirebaseReady === 'function') {
        window.onFirebaseReady();
    } // empty value change queue


    window.firebaseSetValuesQueue.forEach(function (values) {
        window.setFirebaseValues(values);
    });
    window.firebaseSetValuesQueue = [];

};