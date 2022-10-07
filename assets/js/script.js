
const calcular = (op, value) => {
    if (op === 'operacao') {
        if (value === 'c') {
            document.getElementById('result').value = '';
        }

        if (value === '+' || value === '-' || value === '*' || value === '/' || value === '.'){
            document.getElementById('result').value += value;
        }

        if (value === '='){
            //Chamo a função eval() que executa um código js representado como uma String
            var result = eval(document.getElementById('result').value);

            document.getElementById('result').value = result;
        }
    } else if (op === 'valor') {
        document.getElementById('result').value += value;
    }
}

