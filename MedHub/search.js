// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyANOLy73kkue48ShPS9NxB6yzjSysBPfnA",
    authDomain: "medicalapp-7f8a3.firebaseapp.com",
    databaseURL: "https://medicalapp-7f8a3-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "medicalapp-7f8a3",
    storageBucket: "medicalapp-7f8a3.appspot.com",
    messagingSenderId: "407499111794",
    appId: "1:407499111794:web:7f241acdc64d2b921d71eb"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const database = getDatabase(app);

  
  // Get a reference to the data you want to retrieve
  var dataRef = database.ref(database, "Medicine/"+ enterID.value);
  
  // Get a reference to the search input element
  var searchInput = document.getElementById("searchInput");
  
  // Listen for changes to the search input
  searchInput.addEventListener("input", function(event) {
    // Get the search query from the input value
    var query = event.target.value.toLowerCase();
  
    // Retrieve the data and filter it based on the search query
    dataRef.on("value", function(snapshot) {
      var data = snapshot.val();
  
      // Filter the data based on the search query
      var filteredData = Object.keys(data)
        .filter(function(key) {
          return data[key].name.toLowerCase().includes(query);
        })
        .map(function(key) {
          return data[key];
        });
  
      // Do something with the filtered data
      console.log(filteredData);
    });
  });