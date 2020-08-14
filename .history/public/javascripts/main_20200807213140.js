//amend greeting
$(document).ready(() => {
    var title = $('h5');
    var subtitle = $('h6');
    var text = $('p');
    var button = $('button');
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var time = currentTime(hour, minute);
    subtitle.html("This is your " + time + " reminder<br>that you are loved.");

    setInterval(function(){
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
        var newWord = word[n];
        //TODO: replace word
    }, 5000);
});

function currentTime(hour, minute){
    var period = "AM";
    if(hour > 12) { 
        hour -= 12;
        period = "PM";
    }
    var time = hour + ":" + minute + period;
    return time;
}