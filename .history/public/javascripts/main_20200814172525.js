//amend greeting
$(document).ready(() => {
    var title = $('#greeting');
    var subtitle = $('#reminder');
    var text = $('p');
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var time = currentTime(hour, minute);
    subtitle.html("This is your " + time + " reminder<br>that you are beautiful.");

    setInterval(() => {
        var word = [
            "beautiful",
            "smart",
            "kind",
            "loved",
            "loving",
            "silly",
            "valuable",
            "compassionate",
            "considerate",
            "thoughtful",
            "capable"
        ];
        var total = word.length;
        var n = Math.floor((Math.random() * total));
        var newWord = word[n];
        subtitle.html("This is your " + time + " reminder<br>that you are " + newWord + ".");
    }, 3000);

});

function currentTime(hour, minute){
    var period = "AM";
    if(hour > 12) { 
        hour -= 12;
        period = "PM";
    }
    if(minute < 10){
        minute = "0" + minute;
    }
    var time = hour + ":" + minute + period;
    return time;
}