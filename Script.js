function buttonclick(val){
    document.getElementById("screen").value+=val
}
function buttonClear(){
    document.getElementById("screen").value=""
}
function clickEqual(){
    var entered_data=document.getElementById("screen").value
    var result=eval(entered_data)
    document.getElementById("screen").value=result
}