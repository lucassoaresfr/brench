let nome = prompt('Digite seu nome');
document.write(`Olá ${nome}! Seu nome tem extatamente ${nome.length} letras.<br>`);
document.write(`Seu nome tem em maiusculo fica ${nome.toUpperCase()}<br>`);
document.write(`Seu nome em letras minusculas ${nome.toLowerCase()}`);

// para transformar um numero em reais
n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
// Para pula 2 casas depois de pum ponto flutuante
n1.toFixed(2);
