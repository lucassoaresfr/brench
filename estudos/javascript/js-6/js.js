
function calcular() {
    let txtv = document.getElementById('txt1')
    let res = document.querySelector('div#res')
    let vel = Number(txt1.value)
    res.innerHTML = `Sua velocidade é de <strong>${vel}</strong> Km/h`

if (vel > 60) {
    res.innerHTML += `<p>Você passou da velocidade maxima de 60Km/h e está sendo multado</p>`
} 

else {
     res.innerHTML += `<p>Você está nos paramentros da lei</p>`
}
}