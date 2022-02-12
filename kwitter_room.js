user_name=localStorage.getItem("username");
document.getElementById("username").innerHTML="welcome"+user_name+"!";
const firebaseConfig = {
      apiKey: "AIzaSyD9h9wdwgbsDqgUHaWFbFgcoxGOjcazTX4",
      authDomain: "kwitter-8942c.firebaseapp.com",
      databaseURL: "https://kwitter-8942c-default-rtdb.firebaseio.com",
      projectId: "kwitter-8942c",
      storageBucket: "kwitter-8942c.appspot.com",
      messagingSenderId: "269621438217",
      appId: "1:269621438217:web:584c3a9a0a3c53e5f7d5d8",
      measurementId: "G-6K65MGMYQX"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    function addroom(){
          Room_names=document.getElementById("roomname").value;
          firebase.database().ref("/").child(Room_names).update({
                purpose : "adding room"
          });
          localStorage.setItem("roomname",Room_names);
          window.location="kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
     
     console.log("room name -"+Room_names);
     row ="<div class ='room_name'id="+Room_names+" onclick='redirecToRoomName(this.id)'>#"+Room_names+"</div><hr>";
     document.getElementById("output").innerHTML+=row;
  
      });});}
getData();
function redirecToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location = "kwitter_page.html";
}

