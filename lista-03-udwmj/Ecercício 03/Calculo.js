// Cria a função responsável pelo cálculo dos juros compostos
function calcularJuros() {

    // Busca os valores digitados nos campos HTML
    let capital = document.getElementById("capital").value;
    let taxa = document.getElementById("taxa").value;
    let tempo = document.getElementById("tempo").value;

    // Verifica se algum campo está vazio
    if (capital === "" || taxa === "" || tempo === "") {

        // Exibe uma mensagem de erro
        document.getElementById("resultado").innerText =
            "Preencha todos os campos.";

        // Interrompe a execução da função
        return;
    }

    // Converte os valores digitados para números
    capital = Number(capital);
    taxa = Number(taxa);
    tempo = Number(tempo);

    // Verifica se os valores são válidos
    if (capital <= 0 || taxa < 0 || tempo < 0 ||
        !Number.isFinite(capital) ||
        !Number.isFinite(taxa) ||
        !Number.isFinite(tempo) ||
        !Number.isInteger(tempo)) {

        // Exibe uma mensagem de erro
        document.getElementById("resultado").innerText =
            "Informe valores válidos.";

        // Interrompe a função
        return;
    }

    // Converte a taxa percentual para decimal
    // Exemplo: 2% se transforma em 0.02
    taxa = taxa / 100;

    // Aplica a fórmula dos juros compostos
    // M = C * (1 + i) elevado ao tempo
    let montante = capital * (1 + taxa) ** tempo;

    // Exibe o resultado com duas casas decimais
    document.getElementById("resultado").innerText =
        "Montante final: R$ " + montante.toFixed(2);
}