
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getDatabase, ref, get, set, child, update, remove,writeDrugData } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";



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
const database = getDatabase(app);

AddDrug.addEventListener('click',writeDrugData());  {

    var selectdrugname = document.getElementById('selectdrugname').value;
    var manufacturer = document.getElementById('manufacturer').value;
    var supplier = document.getElementById('supplier').value;
    var ndc = document.getElementById('ndc').value;
    var expire = document.getElementById('expire').value;
    var quantity = document.getElementById('quantity').value;
    
    function writeDrugData(selectdrugname, manufacturer, supplier, ndc, expire, quantity) {
        set(ref(database, 'drugs/' + selectdrugname), {
            selectdrugname : selectdrugname,
            manufacturer: manufacturer,
            supplier: supplier,
            ndc: ndc,
            expire: expire,
            quantity: quantity
        });
        alert("added");
      }
   

    
};
