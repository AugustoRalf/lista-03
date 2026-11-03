// Cria uma função chamada calcularVolume
function calcularVolume() {

    // Busca o valor digitado no campo HTML
    let raio = document.getElementById("raio").value;

    // Verifica se o campo está vazio ou o raio é inválido
    if (raio === "" || Number(raio) <= 0) {

        // Exibe uma mensagem de erro
        document.getElementById("resultado").innerText =
            "Digite um raio maior que zero.";

        // Interrompe a função
        return;
    }

    // Converte o valor digitado para número
    raio = Number(raio);

    // Calcula o volume da esfera
    let volume = (4 / 3) * Math.PI * (raio ** 3);

    // Exibe o resultado com duas casas decimais
    document.getElementById("resultado").innerText =
        "O volume da esfera é: " + volume.toFixed(2);
}