function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
var dateFormatter = {
    //Short Time function
    getShortTime: function(date) {
    var hour = date.getHours();
    var minutes = addZero(date.getMinutes());
    var amPm = (hour < 12) ? "AM": "PM";
    if (hour > 12) {
        hour = hour -12;
    }
    return hour + ":" + minutes + " " + amPm;
},
    //Long Time function
    getLongTime: function(date) {
    var hour = date.getHours();
    var minutes = addZero(date.getMinutes());
    var seconds = addZero(date.getSeconds());
    var amPm = (hour < 12) ? "AM": "PM";
    if (hour > 12) {
        hour = hour -12;
    }
    return hour + ":" + minutes +  ":" + seconds + " " + amPm;
},
    //Short Date function
    getShortDate: function(date) {
    var month = date.getMonth() +1;
    var day = date.getDate();
    var year = date.getFullYear();
    return month + "/" + day + "/" + year;
},
    //Long Date function
    getLongDate: function(date) {
    var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var m = date.getMonth();
    var day = date.getDate();
    var year = date.getFullYear();
    var moty = month[m];
    return moty + " " + day + ", " + year;
},
    //Short Date and Short Time function
    getShortDateTime: function(date){
    return this.getShortDate(date) + " " + this.getShortTime(date);
},
    //Long Date and Short Time function
    getLongDateTime: function(date){
    return this.getLongDate(date) + " " + this.getShortTime(date);
},
    //Day of Week, Long Date and Short Time
    getExtendedDateTime: function(date) {
    var weekday = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    var i = date.getDay();
    var dotw = weekday[i];
    return dotw + " " + this.getLongDateTime(date);
},
};

console.log("Short time " + dateFormatter.getShortTime(new Date()));
console.log("Long time " + dateFormatter.getLongTime(new Date()));
console.log("Short date " + dateFormatter.getShortDate(new Date()));
console.log("Long date " + dateFormatter.getLongDate(new Date()));
console.log("Short date, and time " + dateFormatter.getShortDate(new Date()));
console.log("Long date and time " + dateFormatter.getLongDateTime(new Date()));
console.log("Extended date, and time " + dateFormatter.getExtendedDateTime(new Date()));
