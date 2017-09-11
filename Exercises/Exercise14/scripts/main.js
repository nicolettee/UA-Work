
var btnSub = getElm("btnSubmit").addEventListener("click", submit);
var btnRes = getElm("btnReset").addEventListener("click", reset);

var messages = []


var elms = [getElm("userName"), getElm("emailAddress"), getElm("password"), getElm("timezone"), getElm("terms")];
function submit(){
    for (i = 0; i < elm.length; i++) {
    var elm = elms[i];
    if (elm.value.length === 0 && elm != elm[3,4]) {
        messages.push(elm.placeholder + "is required")
        elm.classList.add("invalid");
        getElm("messages").innerHTML = "message";
        console.log(elm.placeholder + "is required.")
    }else if(elm[3,4].checked == false){
        messages.push(elm.placeholder + "is required")
        elm.classList.add("invalid");
        getElm("messages").innerHTML = "message";
        console.log(elm.placeholder + "is required.")
    }else{
        getElm("messages").innerHTML = "Success!"
    }
}

}
function reset() {
    for (i = 0; i < elm.value.length; i++){
    var elm = elms[i];
    getElm("elm").reset;
    elm.classList.remove("invalid")
}
}






function getElm(id){
    return document.getElementById(id)
}
