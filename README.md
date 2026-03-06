<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Criando uma Calculadora com Funções</title>
 <script src= "script.js" defer> </script>
 <style>
        body { font-family: sans-serif; display: flex; justify-content: center; background: #f0f0f0; padding-top: 30px; }
        .calc { background: #fff; padding: 20px; border-radius: 15px; box-shadow: 0 5px 15px rgba(0,0,0,0.2); width: 300px; }
        input, select { width: 100%; padding: 10px; margin: 10px 0; border: 1px solid #ccc; border-radius: 5px; box-sizing: border-box; }
        button { width: 100%; padding: 12px; background: #28a745; color: white; border: none; border-radius: 5px; cursor: pointer; font-size: 16px; }
        button:hover { background: #218838; }
        #res { margin-top: 15px; padding: 10px; background: #eee; border-radius: 5px; text-align: center; font-weight: bold; }
    </style>
</head>

<body>
<div class="calc">
    <h3>Calculadora</h3>
    
    <input type="number" id="num1" placeholder="Número 1">
    
    <select id="op">
        <option value="+">Soma (+)</option>
        <option value="-">Subtração (-)</option>
        <option value="*">Multiplicação (*)</option>
        <option value="/">Divisão (/)</option>
        <option value="**">Potência (**)</option>
        <option value="raiz">Raiz Quadrada (do Núm 1)</option>
    </select>

    <input type="number" id="num2" placeholder="Número 2">

    <button onclick="executar()">Calcular</button>

    <div id="res">Resultado: -</div>
</div>
</body>
</html>
