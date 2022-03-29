// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyBuJaNPLeYuFuzK10xgQpBHVQL6ShULFOk",

  authDomain: "survey-distributor-6d7ed.firebaseapp.com",

  databaseURL: "https://survey-distributor-6d7ed-default-rtdb.europe-west1.firebasedatabase.app/",

  projectId: "survey-distributor-6d7ed",

  storageBucket: "survey-distributor-6d7ed.appspot.com",

  messagingSenderId: "706669171065",

  appId: "1:706669171065:web:8bb22cb6e6bbc407ec5fa8",

  measurementId: "G-59WZT2RSB2"

};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//const app = initializeApp(firebaseConfig);
console.log("Initialized app");




function writeCounterToDb() {
    const updates = {};
    updates[`visitor`] = firebase.database.ServerValue.increment(1)
    firebase.database().ref().update(updates);
}

function getSurvey() {
    const dbRef = firebase.database().ref();
    dbRef.child('visitor').get().then((snapshot) => {
        if(snapshot.exists()) {
            if((snapshot.val() % 2) == 0) {
                writeCounterToDb();
                console.log("NON_PSD")
                location.replace("https://forms.gle/imgzGaRM9836X9AH8");
            }
            else {
                writeCounterToDb();
                console.log("PSD")
                location.replace("https://forms.gle/4SeonCStaskLfa2L6");
            }
        }
        else {
            console.log("No data available");
        }
    })
}
