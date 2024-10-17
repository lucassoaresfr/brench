function pais() {
    let pais = document.getElementById('txt1').value;
    let res = document.querySelector('div#res');
    res.innerHTML = `Vivendo no país ${pais}`;

    if (pais == 'Brasil') {
        res.innerHTML += '<p>Você é nativo brasileiro</p>'
    }
    else {
        res.innerHTML += '<p>Você é estrangeiro</p>'
    }
}