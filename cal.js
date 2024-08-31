const display=document.getElementById("display");

function appendchild(input){
    display.value+=input;
}


function calculate(){
    try{
        display.value=eval(display.value);
    }
    catch(error){
        display.value="Error";
    }

}
function clears(){
    display.value="";
}