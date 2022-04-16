let timer = setInterval(showTime, 1000);

function showTime() {
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();

    if(h<10) {
        h = "0"+h;
    }
    if(m<10) {
        m = "0"+m;
    }
    if(s<10) {
        s = "0"+s;
    }
    
    let txt = h+':'+m+':'+s;

    document.querySelector('.clock').innerHTML = txt;

    if ( h <= 4) {
        document.querySelector('.turn').innerHTML = "Boa noite!";
    } else if ( h < 12 ) {
        document.querySelector('.turn').innerHTML = "Bom dia!";
    } else if ( h < 18 ) {
        document.querySelector('.turn').innerHTML = "Boa tarde!";
    } else if ( h <= 23) {
        document.querySelector('.turn').innerHTML = "Boa noite!";
    } 
}