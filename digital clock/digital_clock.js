const clock = document.querySelector('.clock');

function time(){
    const now = new Date();
    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();

    const time = `
    <span>${h}</span> :
    <span>${m}</span> :
    <span>${s}</span>
    `
    clock.innerHTML = time;
}

setInterval(time, 1000)