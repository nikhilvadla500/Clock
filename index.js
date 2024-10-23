function Clock(){
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    hours = hours < 10 ? "0" + hours: hours;
    minutes = minutes < 10 ? "0" + minutes: minutes;
    seconds = seconds < 10 ? "0" + seconds: seconds;

    const Time = hours + ":" + minutes + ":" + seconds;
    document.getElementById("clock").innerHTML = Time;
}
setInterval(Clock,1000)
Clock;



