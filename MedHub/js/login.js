// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
import { getDatabase, ref, get, set, child, update, remove } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyANOLy73kkue48ShPS9NxB6yzjSysBPfnA",
    authDomain: "medicalapp-7f8a3.firebaseapp.com",
    databaseURL: "https://medicalapp-7f8a3-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "medicalapp-7f8a3",
    storageBucket: "medicalapp-7f8a3.appspot.com",
    messagingSenderId: "407499111794",
    appId: "1:407499111794:web:7f241acdc64d2b921d71eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const database = getDatabase(app);

submitData.addEventListener('click',(e) => {

    var email = document.getElementById('email').value;
    var password = document.getElementById('psw').value;
    var pname = document.getElementById('pname').value;
    var address = document.getElementById('address').value;
    var phone = document.getElementById('phone').value;
    var Plicense = document.getElementById('Plicense').value;
    

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...user.uid
            set(ref(database, 'users/' + user.uid), {
                email: email,
                password : password,
                // pharmacyName: pname,
                // address: address,
                // phone: phone,
                // Plicense: Plicense
            })
                .then(() => {
                        alert('user created succesfully');
                    })
                    .catch((error) => {
                        alert(error);
                    });
            
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            alert(errorMessage);
        });

    
});

signin.addEventListener('click',(e) => {
    var Iemail = document.getElementById('Iemail').value;
    var Ipassword = document.getElementById('Ipassword').value;

    signInWithEmailAndPassword(auth, Iemail, Ipassword)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        alert('user logged in succesfully');
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
    });

});