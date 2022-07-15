// this script it to be included by all the kolon html files.

// its sole purpose is to create a <script> tag and remotely load
// the code which allows multi-page communication via firebase.

// the reason why we're doing a two stage purpose (load firebase-load.js which loads firebase.js from github)
// is to allow greg to be able to remotely update the firebase.js code to add any functionality or fix errors.

console.log('firebase-load.js');

window.firebaseSetValuesQueue = [];
// temporary queue, while firebase is still loading.
// will be emptied / sent as soon as firebase is loaded.
window.setFirebaseValues = function(values) {
  firebaseSetValuesQueue.push(values);
}

document.addEventListener("DOMContentLoaded", function() {
  var script = document.createElement('script');
  script.src = 'https://gregsadetsky.github.io/kolon-firebase/firebase.js?r=' + Math.random();
  document.head.appendChild(script);
});
