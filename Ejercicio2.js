window.onload = init;

function init() {
    var view = document.getElementById('view');
    var area = document.getElementById('area');
    let contador=0, validacion=0;
    let produclist = [];
        view.onclick = edit;

    document.onkeydown = function(e) {

        e = e || event;
        // Escape
        if(e.keyCode == 27) {
cancel();
return false;
}
if ((e.ctrlKey && e.keyCode == 'E'.charCodeAt(0)) && !area.offsetHeight) {
edit();
return false;
}
if((e.ctrlKey && e.keyCode == 'S'.charCodeAt(0)) && area.offsetHeight) {
save();
return false;
}
}
function edit() {
//Ocultar el elemento div
view.style.display = 'none';
//Dibujar el campo textarea y ponerle estilos
area.value = view.innerHTML;
area.style.display = 'block';
area.style.height = '80px';
area.style.padding = '6px';
area.style.width = '444px';
area.focus();
}
function save() {
area.style.display = 'none';
view.innerHTML = area.value;
view.style.display = 'block';
view.style.letterSpacing = '1.2px';
}
function cancel() {
area.style.display = 'none';
view.style.display = 'block';
}

//checkboxes
var boton = document.getElementById('enviardatos')
var checks = document.querySelectorAll('.form-check-input');
var producto1=0;
    boton.addEventListener('click', function(){

        checks.forEach((e)=>{
            if(e.checked == true){
                producto = parseFloat(e.value);
                //Hacer un foreach para contar la cantidad a pedir
                producto1=producto1+producto;
                produclist[contador]=e.value;
                document.getElementById('productos').innerHTML+="<br>"+produclist[contador]+"<br>";
                contador=contador+1;
                validacion=validacion+1;
            }
        });

        var num=document.getElementById('txttipo').value;
        console.log(num);
        if(validacion==0){
            alert("Seleccione al menos un producto").click();
        }
        producto1=producto1*parseInt(num);

        producto1=producto1.toFixed(2);
        document.getElementById("total").innerHTML+="<br> Total: "+producto1+"<br>";
        document.getElementById("Precioto").value = producto1;
        produclist.pop();
        producto1=0;
        validacion=0;
            
            var x = document.getElementById('datos');
        if (x.style.display === 'none') {
            x.style.display = 'block';
        } else {
            x.style.display = 'block';
    }

    });

    
}

/*
function mostrar() {
    
}*/

