var firebaseConfig = {
    apiKey: "AIzaSyANLJq4MJbgWmLQweUvum90HXYC-iqPkNg",
    authDomain: "restaurante-9a1a3.firebaseapp.com",
    databaseURL: "https://restaurante-9a1a3-default-rtdb.firebaseio.com",
    projectId: "restaurante-9a1a3",
    storageBucket: "restaurante-9a1a3.appspot.com",
    messagingSenderId: "1081703776193",
    appId: "1:1081703776193:web:8c3f979250a6f2a7f57940"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function obtener() {


    const menu = firebase.database().ref("Menu/");
    
    
    menu.on("value", function (snapshot) {
        $("#table1").empty();
        $("#table2").empty();
        snapshot.forEach(function (childsnapshot) {
            var data = childsnapshot.val();
            if(data.label == 'BF'){
                var tr = `<tr>
          <td>${data.name}</td>
          <td> Q.${data.price.toFixed(2)}</td>
          </tr>`;
                $("#table1").append(tr);
            }else if(data.label == "BC"){
                var tr = `<tr>
                <td>${data.name}</td>
                <td> Q.${data.price.toFixed(2)}</td>
                </tr>`;
                      $("#table2").append(tr);
            }
        }
        );
    })

}

$(document).ready(function () { obtener() });