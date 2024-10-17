function somar() {
    let tn1 = document.getElementById('txt1');
    let tn2 = document.getElementById('txt2');
    let res = document.getElementById('res');
    let n1 = Number(tn1.value);
    let n2 = Number(tn2.value);
    let s = n1 + n2;
    res.innerHTML = `O resultado da soma foi <strong>${s}</strong>`;
    
}