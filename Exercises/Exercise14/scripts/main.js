
var btnSub = getElm("btnSubmit").addEventListener("click", submit);
var btnRes = getElm("btnReset").addEventListener("click", reset);

var messages = []


var elms = [getElm("userName"), getElm("emailAddress"), getElm("password"), getElm("timezone"), getElm("terms")];
function submit(){
    for (i = 0; i < elm.length; i++) {
    var elm = elms[i];
    if (elm.value.length === 0 && elm != elms[3,4]) {
        messages.push(elm.placeholder + "is required")
        elm.classList.add("invalid");
    }else if(elms[3,4].value === !checked){
        messages.push(elm.placeholder + "is required")
        elm.classList.add("invalid");
    }
}
}
function reset() {
    for (i = 0; i < elm.length; i++){
    var elm = elms[i];
    getElm("elm").reset;
    elm.classList.remove("invalid")
}





















function getElm(id) {
    return document.getElementById(id);
}