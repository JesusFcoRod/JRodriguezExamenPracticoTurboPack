$(document).ready(function () { 
    GetAll();
});

function GetAll() {
    $.ajax({
        type: 'GET',
        url: 'https://randomuser.me/api/',
        success: function (result) { //200 OK 
            $('#tblUsuarios tbody')
            var usuario = result.results;
            var filas =2 
                '<tr>'
                + '<td class="text-center"> '
                + '<a href="#" onclick="GetById(' + usuario[0].id.value + ')">'
                + '<i class="bi bi-pencil-square" style="color: black"></i>'
                + '</a> '
                + '</td>'
                + "<td class='text-center'>" + usuario[0].id.name + "-" + usuario[0].id.value + "</td>"
                + "<td class='text-center'>" + usuario[0].name.first + " " + usuario[0].name.last + "</td>"
                + "<td class='text-center'>" + usuario[0].email + "</td>"
                + "<td class='text-center'>" + "Ciudad: " + usuario[0].location.city + "  Pais: " + usuario[0].location.country + "  Estado: " + usuario[0].location.state + "</td>"
                + "<td class='text-center'>" + usuario[0].gender + "</td>"
                + "<td class='text-center'>" + "<img src=" + usuario[0].picture.large + ">" + "</td>"
                + '<td class="text-center"> <button class="btn btn-danger" onclick="Delete(' + usuario[0].id.value + ')"><span class="glyphicon glyphicon-trash" style="color:#FFFFFF"></span></button></td>'
                + "</tr>";
            $("#tblUsuarios tbody").append( filas );
        },
        error: function (result) {
            alert('Error en la consulta.' + result.responseJSON.ErrorMessage);
        }
    });
};

function Limpiar() {
    $('#tblUsuarios tbody').empty();
};