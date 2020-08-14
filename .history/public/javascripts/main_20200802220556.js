//amend greeting
$(document).ready(() => {
    var title = $('h3');
    var subtitle = $('h5');
    var text = $('p');
    var button = $('button');
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var time = currentTime(hour, minute);
    subtitle.html("This is your " + time + " reminder that you are beautiful.");
    setInterval(cycle, 5000);
});

function currentTime(hour, minute){
    var period = "AM";
    if(hour > 12) { 
        hour -= 12;
        period = "PM";
    }
    if(minute.length === 1){
        minute = "0" + minute;
    }
    var time = hour + ":" + minute + period;
    return time;
}

async function cycle(){
    var word = [
        "beautiful",
        "smart",
        "kind",
        "loved",
        "loving",
        "stunning",
        "brilliant",
        "fun",
        "silly",
        "interesting",
        "valuable",
        "compassionate",
        "considerate",
        "thoughtful",
        "gorgeous",
        "capable",
        "inspiring"
    ];
    var total = word.length;
    var n = Math.floor((Math.random() * total) + 1);
    return word(n);
}