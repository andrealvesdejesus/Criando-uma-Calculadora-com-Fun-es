/*Crie um programa em JavaScript que contenha quatro funções:
soma(a, b): retorna a soma de dois números
subtracao(a, b): retorna a subtração de dois números
multiplicacao(a, b): retorna a multiplicação de dois números
divisao(a, b): retorna a divisão de dois números (verifique se b é diferente de zero)
O programa deve solicitar ao usuário dois números e a operação desejada (+, -, *, /). Em seguida, deve chamar a função correspondente e exibir o resultado no console.

Desafio extra: faça a interface em HTML para a entrada e a apresentação dos resultados, semelhante ao aplicativo de Calculadora. Implemente novas funcionalidades para a sua calculadora!*/

// FUNÇÕES MATEMÁTICAS. 
    
    function soma(a, b) { return a + b; }
    
    function subtracao(a, b) { return a - b; }
    
    function multiplicacao(a, b) { return a * b; }
    
    function divisao(a, b) {
        if (b === 0) return "Erro: Divisão por 0";
        return a / b;
    }

    // Funcionalidades Extras.
    function potencia(a, b) { return a ** b; }
    function raiz(a) { return Math.sqrt(a).toFixed(2); }

    // FUNÇÃO PRINCIPAL .    

    function executar() {
        // Pega os valores dos inputs e converte para números
        let n1 = parseFloat(document.getElementById("num1").value);
        let n2 = parseFloat(document.getElementById("num2").value);
        let operacao = document.getElementById("op").value;
        let tela = document.getElementById("res");

        // Validação simples.
        if (isNaN(n1) && operacao !== "raiz") {
            tela.innerText = "Digite os números!";
            return;
        }

        let resultado;

        // Escolhe qual função chamar baseado na operação.
        switch (operacao) {
            case "+": resultado = soma(n1, n2); break;
            case "-": resultado = subtracao(n1, n2); break;
            case "*": resultado = multiplicacao(n1, n2); break;
            case "/": resultado = divisao(n1, n2); break;
            case "**": resultado = potencia(n1, n2); break;
            case "raiz": resultado = raiz(n1); break;
        }

        // Mostra o resultado chamando a função correspondente.
        tela.innerText = "Resultado: " + resultado;
        console.log("Resultado da operação:", resultado);
