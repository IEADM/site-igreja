document.getElementById("eventos").value = dados.eventos;
document.getElementById("avisos").value = dados.avisos;
document.getElementById("ofertas").value = dados.ofertas;

function salvarEventos() {
    localStorage.setItem("eventos", document.getElementById("eventos").value);
    alert("Eventos salvos com sucesso!");
}

function salvarAvisos() {
    localStorage.setItem("avisos", document.getElementById("avisos").value);
    alert("Avisos salvos com sucesso!");
}

function salvarOfertas() {
    localStorage.setItem("ofertas", document.getElementById("ofertas").value);
    alert("Ofertas salvas com sucesso!");
}
