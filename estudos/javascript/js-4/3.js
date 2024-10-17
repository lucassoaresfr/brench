let a = document.getElementById('box');

a.addEventListener('mouseover', () => {
    a.style.backgroundColor = 'lightcoral';
    a.textContent = 'Você está aqui!';
});

a.addEventListener('mouseout', () => {
    a.style.backgroundColor = 'lightblue';
    a.textContent = 'Clique em mim';
});

a.addEventListener('click', () => {
    a.style.backgroundColor = 'green' ;
    a.textContent = 'Você clicou em mim' ;
})
estudos/javascript/styles.cssestudos/javascript/styles.css

