let importGnomeBt = document.getElementById('importGnomeBt');
let gnomeInputsContainer = document.getElementById('consultGnomeContainer');
let consultGnomeWindow = document.getElementById('consultGnomeWindow');
var frameContent = consultGnomeWindow.contentWindow.document.getElementById('model-result')

let gnomeDisplay = false;

importGnomeBt.addEventListener('click', toggleGnome);
importGnomeBt.addEventListener('click', showGnomeInputsWindow);
importGnomeBt.addEventListener('click', closeEverythingElseTwo);


function showGnomeInputsWindow(){
    console.log("vai");
}

function toggleGnome(){
    gnomeDisplay = !gnomeDisplay;

    if(gnomeDisplay == false){
        gnomeInputsContainer.style.visibility="hidden";
        gnomeInputsContainer.style.display="none";
        console.log("fechado");
    }
    else{
        gnomeInputsContainer.style.display="block";
        gnomeInputsContainer.style.visibility="visible";
        console.log("aberto");
        containerProposito.style.display="none";
                
    }
    console.log(gnomeDisplay);
}
