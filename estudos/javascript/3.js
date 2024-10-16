let a = document.getElementById('box');

a.addEventListener('mouseover', () => {
    a.style.backgroundColor = 'lightcoral';
    a.textContent = 'Você está aqui!';
});

a.addEventListener('mouseout', () => {
    a.style.backgroundColor = 'lightblue';
    a.textContent = 'Clique em mim';
});


