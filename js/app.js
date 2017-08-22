function validaNombre(){
  var name = document.getElementById("nombre"); 
  var isValid=false;
  if(name.value.length > 0 && name.value.match(/^[a-zA-Z\s]*$/)){
    var palabra=primMayuscula(name.value);
    document.getElementById("name").value = palabra; 
    salida_name.innerHTML="<p style='color:green; font-size:15px;' >Nombre valido ✔</p>";
    isValid=true;
  }
  else{
    salida_name.innerHTML="<p style='color:red; font-size:15px;' >Debes escribir letras en el nombre</p>";
    isValid=false;
  }   
  return isValid;
}