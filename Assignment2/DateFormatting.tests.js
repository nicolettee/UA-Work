
//Validator function
function validate(testDate, expected, d) {
    var formatted = dateFormatter[d](testDate);
     if (expected === formatted) {
        console.log("Success!");
    } else {
        console.log("error in " + d + ' expected: ' + expected + ' got: ' + formatted);
    };
}
//testDate Variable - if this changes all the 'expected' variables need to change independently
var testDate = new Date(("1/1/1990 4:20:20 PM"));

//Short time validator
var d = "getShortTime";
var expected = "4:20 PM";
validate(testDate, expected, d);

//Long time validator
d = "getLongTime";
expected ="4:20:20 PM";
validate(testDate, expected, d);

//Short date validator
d = "getShortDate";
expected ="1/1/1990";
validate(testDate, expected, d);

//Long date validator
d = "getLongDate";
expected = "January 1, 1990";
validate(testDate, expected, d);

//Short date and time validator
d = "getShortDateTime";
expected = "1/1/1990 4:20 PM";
validate(testDate, expected, d);

//Long date and time validator
d = "getLongDateTime";
expected = "January 1, 1990 4:20 PM";
validate(testDate, expected, d);

//Extended date and time validator
d = "getExtendedDateTime";
expected = "Tuesday January 1, 1990 4:20 PM";
validate(testDate, expected, d);