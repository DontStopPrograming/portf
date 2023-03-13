document.getElementById("descargar").addEventListener("click", function(){
    // Crea un objeto de solicitud HTTP
    var xhr = new XMLHttpRequest();
    // Establece la URL del archivo PDF que quieres descargar
    xhr.open("GET", "../Desktop/portafolio/_curr_.pdf", true);
    // Establece el tipo de respuesta del servidor como "blob"
    xhr.responseType = "blob";
    // Cuando la solicitud esté lista, descarga el archivo
    xhr.onload = function(){
        // Convierte la respuesta en un objeto blob
        var blob = new Blob([xhr.response], {type: "application/pdf"});
        // Crea una URL de objeto para el archivo blob
        var url = URL.createObjectURL(blob);
        // Crea un enlace para descargar el archivo
        var a = document.createElement("a");
        a.href = url;
        a.download = "_curr_.pdf";
        // Añade el enlace al documento y haz clic en él para descargar el archivo
        document.body.appendChild(a);
        a.click();
        // Elimina el enlace del documento
        document.body.removeChild(a);
    };
    // Envía la solicitud HTTP
    xhr.send();
});
