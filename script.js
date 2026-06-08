let hours=document.querySelector("#Hours");
let minutes=document.querySelector("#Minutes");
let seconds=document.querySelector("#Seconds");

const Time=()=>{
    let Now=new Date();
    hours.innerText=Now.getHours();
    minutes.innerText=Now.getMinutes();
    seconds.innerText=Now.getSeconds();
};
Time();
setInterval(Time,1000)
