function crearTablaAmigos()
{
var tabla = document.createElement("table");
document.getElementById("contenedor_amigos").appendChild(tabla)
    for (var i = 0; i < amigos.length; i++) {
        var tr= document.createElement("tr");
        tabla.appendChild(tr);
        var td = document.createElement("td");
        tr.appendChild(td);
        var td2 = document.createElement("td");
        tr.appendChild(td2);
        td.innerHTML=(amigos[i].nombre);
        td2.innerHTML=(amigos[i].apellido);
        tabla.appendChild(tr);
    }
tabla.className="tabla";
}