// alert("HELLO")
let options = {
    headers : {
        'Authorization' : 'Bearer 8ky8bXzOo5wRzjplt_iYRsohixGYMQRD',
        'content-type'  : 'application/json',
        'content-length': '1',
        // 'request-id'    : '422ce2c4db61d7d8114a0e3a45dbf5aa'
    }
}
let p = fetch("https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/2022-01-09/2023-01-09?adjusted=true&sort=asc&limit=120&apiKey=8ky8bXzOo5wRzjplt_iYRsohixGYMQRD",options)

const display = (sno,d1,d2,d3) =>{
    const container = document.querySelector('.container')
    
    const content = document.createElement('li');
    content.classList.add('content');
    content.innerHTML =`<div class = "sNo" id = ${sno+1}>${sno+1}</div><div class = "stock">${d1}</div><div class = "openPrice">${d2}</div><div class = "closePrice">${d3}</div>`;
    container.appendChild(content);
}

p.then((value1)=>{
    return value1.json()
})
.then((value2)=>{
    let s = value2.ticker;
    for (let i=0; i<=50;i++){
        let o = value2.results[i].o
        let c = value2.results[i].c
        display(i,s,o,c)

    }
})