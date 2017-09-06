function validate(testDate, expected, d) {
    var formatted = dateFormatter[d](testDate);
    
    if (expected === formatted) {
        console.log("Sucess!");
    } else {
        throw "error";
    };
}
var d = "getShortTime";
var testDate = new Date(("1/1/1990 4:20 pm"));
var expected = "4:20 PM";
validate(testDate, expected, d);