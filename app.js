document.getElementById("burgers").addEventListener("click", mostrarMenu);
document.getElementById("tacos").addEventListener("click", mostrarMenu);
document.getElementById("salads").addEventListener("click", mostrarMenu);
document.getElementById("desserts").addEventListener("click", mostrarMenu);
document.getElementById("drinks").addEventListener("click", mostrarMenu);
datos = null;

const url =
  "https://gist.githubusercontent.com/josejbocanegra/9a28c356416badb8f9173daf36d1460b/raw/5ea84b9d43ff494fcbf5c5186544a18b42812f09/restaurant.json";
fetch(url)
  .then((response) => response.json())
  .then((respuesta) => {
    datos = respuesta;
  });

function mostrarMenu() {
  let main = doc.getElementById("main");
  main.innerHTML = "";
}
