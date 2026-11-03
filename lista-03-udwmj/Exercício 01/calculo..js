// Cria uma função chamada calcularArea
function calcularArea() {

    // Busca o valor digitado no campo de raio
    let raio = document.getElementById("raio").value;

    // Verifica se o campo está vazio ou se o raio é inválido
    if (raio === "" || Number(raio) <= 0) {
        document.getElementById("resultado").innerText =
            "Digite um raio maior que zero.";
        return;
    }

    // Converte o valor digitado para número
    raio = Number(raio);

    // Calcula a área do círculo
    let area = Math.PI * (raio ** 2);

    // Exibe o resultado com duas casas decimais
    document.getElementById("resultado").innerText =
        "A área do círculo é: " + area.toFixed(2);

}