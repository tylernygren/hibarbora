//amend greeting
$(document).ready(() => {
    var subtitle = $('h5');
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var time = currentTime(hour, minute);
    subtitle.html("This is your " + time + " reminder that you are beautiful.");
    cycle();
});

function currentTime(hour, minute){
    var period = "AM";
    if(hour > 12) { 
        hour -= 12;
        period = "PM";
    }
    if(minute.length !== 2){
        minute = "0" + minute;
    }
    var time = hour + ":" + minute + period;
    return time;
}

function cycle(){
}