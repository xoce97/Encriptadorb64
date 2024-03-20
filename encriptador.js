function convertirABase64() {
    const texto = document.getElementById("texto").value;
    const textoBase64 = btoa(texto);
    document.getElementById("resultado").value = textoBase64;
}

function convertirDeBase64() {
    const textoBase64 = document.getElementById("texto").value;
    const texto = atob(textoBase64);
    document.getElementById("resultado").value = texto;
}