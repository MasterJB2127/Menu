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

function insertar() {
    var _id = $('#id').val();
    var _name = $('#name').val();
    var _price = parseFloat($('#price').val());
    var _label = $('#label').val();

    var db = firebase.database();

    var data = {
        id: _id,
        name: _name,
        price: _price,
        label: _label
    }
    db.ref('/Menu/' + _id).set(data);

}

function modificar() {
    var _id = $('#id').val();
    var _name = $('#name').val();
    var _price = parseFloat($('#price').val());
    var _label = $('#label').val();

    var db = firebase.database();



    var data = {
        id: _id,
        name: _name,
        price: _price,
        label: _label
    }
    db.ref('/Menu/' + _id).update(data);

}

function eliminar() {
    var _id = $('#id').val();

    var db = firebase.database();

    db.ref('/Menu/' + _id).remove();

}

function buscar() {

    
    var _name = $('#name').val();

    const menu = firebase.database().ref("Menu/");
    let res = document.querySelector('#tabla');

    menu.on("value", function (snapshot) {
        $("#table").empty();
        snapshot.forEach(function (childsnapshot) {
            var data = childsnapshot.val();
            if (data.name.toUpper().indexOf(_name.toUpperCase()) >-1 ) {
                $('#id').val(data.id);
                $('#name').val(data.name);
                $('#price').val(data.price.toFixed(2));
                $('#label').val(data.label);
            }
        }
        );
    })
}