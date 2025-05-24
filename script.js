var outputScreen = document.getElementById("output-screen");

function display(num){
    outputScreen.value= outputScreen.value + num;

}

function calculate(){
    try{
        outputScreen.value = math.evaluate(outputScreen.value);
    }
    catch(err){
        
      outputScreen.value = outputScreen.innerHTM = "Invalid"
    }
    
}

function Clear(){
    outputScreen.value ="";

}

function Del(){
    outputScreen.value = outputScreen.value.slice(0,-1);
}