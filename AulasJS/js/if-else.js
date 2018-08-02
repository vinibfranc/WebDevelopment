/*if(22 == '22') {
	document.write('Entrou dentro do bloco if (verdadeiro)')
} else {
	document.write('Entrou dentro do bloco else (falso)')
}*/

var nota = prompt('Digite a nota do aluno: ');
var faltas = prompt('Digite a quantidade de faltas: ');
var media = 7;
var faltas_maximas = 15;

if(nota >= media && faltas <= faltas_maximas) {
	document.write('Aprovado');
} else {
	document.write('Reprovado');
}

document.write('<br>');

document.write('Com operador ternário: ');

var resultado = (nota >= media && faltas <= faltas_maximas) ? 'Aprovado' : 'Reprovado';
document.write(resultado);